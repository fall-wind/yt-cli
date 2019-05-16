var fs = require('fs');
var path = require('path');

function pageHandler(data, name) {
	return data.replace(/\$\{Page\}/g, name);
}

function componentHandler(data, name, config = {}) {
	const { cssName } = config;
	let result = data.replace(/\$\{Component\}/g, name);
	if (cssName) {
		result = result.replace(/\$\{cssName\}/g, cssName);
	}
	return result;
}

function reducerHandler(data, name) {
	return data.replace(/\$\{page\}/g, name);
}

function readFile(file, callback, name, handler) {
	fs.readFile(file, 'utf-8', function(err, data) {
		if (err) {
			console.log('读取失败');
		} else {
			callback(handler(data, name));
		}
	});
}

function writeFile(file) {
	return function(data) {
		fs.writeFile(file, data, function(error) {
			if (error) {
				throw error;
			} else {
				console.log(`create file: ${file}`);
			}
		});
	};
}
function copyFile(source, target, name, handler, config) {
	var txt = readFile(source, writeFile(target), name, (...args) =>
		handler(...args, config),
	);
}

function pageInit({ type, name }) {
	var sourceDir = path.join(__dirname, '../tmp', type);
	var targetDir = path.join(process.cwd(), name);
	var fileName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
	fs.mkdir(targetDir, function(err) {
		if (err) {
			console.log(err);
		} else {
			copyFile(
				path.join(sourceDir, 'page.js'),
				// path.join(targetDir, `${fileName}.js`),
				path.join(targetDir, 'index.js'),
				fileName,
				pageHandler,
			);
			copyFile(
				path.join(sourceDir, 'pageReducer.js'),
				path.join(targetDir, `reducer.js`),
				name,
				reducerHandler,
			);
		}
	});
}

const languageMap = {
	styl: 'styl',
	less: 'less',
	sass: 'less',
};

function compInit({ type, langName, cssName, dirName }) {
	var sourceDir = path.join(__dirname, '../tmp', type);
	var targetDir = path.join(process.cwd(), dirName);
	var fileName = `${dirName.slice(0, 1).toUpperCase()}${dirName.slice(1)}`;
	fs.mkdir(targetDir, function(err) {
		if (err) {
			console.log(err);
		} else {
			copyFile(
				path.join(sourceDir, `index.${langName}`),
				path.join(targetDir, `index.${langName}`),
				fileName,
				componentHandler,
				{ cssName },
			);
			copyFile(
				path.join(sourceDir, `index.${languageMap[cssName]}`),
				path.join(targetDir, `index.${cssName}`),
				dirName,
				componentHandler,
			);
		}
	});
}

function travel(dir, callback, finish) {
	fs.readdir(dir, function(err, files) {
		(function next(i) {
			if (i < files.length) {
				var pathname = path.join(dir, files[i]);

				fs.stat(pathname, function(err, stats) {
					if (stats.isDirectory()) {
						travel(pathname, callback, function() {
							next(i + 1);
						});
					} else {
						callback(pathname, function() {
							next(i + 1);
						});
					}
				});
			} else {
				finish && finish();
			}
		})(0);
	});
}

module.exports = {
	copyFile,
	pageInit,
	compInit,
	travel,
};
