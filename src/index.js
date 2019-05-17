#!/usr/bin/env node

var program = require('commander');
var path = require('path');
var inquirer = require('inquirer');
var config = require('../package.json');
var fs = require('fs');
var utils = require('./util');

program.version(config.version, '-v, --version');

program.command('init <type> <name>').action(async function cb(type, name) {
	if (type === 'page') {
		utils.pageInit({ type, name });
	} else if (type === 'comp') {
		const langName = 'typescript or javascript?';
		const cssName = 'stylus, sass or less';
		const answers = await inquirer.prompt([
			{
				type: 'list',
				name: langName,
				choices: ['tsx', 'js'],
			},
			{
				type: 'list',
				name: cssName,
				choices: ['styl', 'sass', 'less'],
			},
		]);
		const usedLangName = answers[langName];
		const usedCssName = answers[cssName];
		utils.compInit({
			type: 'component',
			langName: usedLangName,
            cssName: usedCssName,
            dirName: name,
		});
	} else if (type === 'project') {
        utils.projectInit({
            projectName: name,
        })
    }
});

program.parse(process.argv);
