const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const common = require('./webpack.common.js');
const config = require('./config');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
	entry: [
		`webpack-dev-server/client?http://127.0.0.1:${config.port}`,
		// 'webpack/hot/only-dev-server',
		'webpack/hot/dev-server',
		path.join(__dirname, '../src/index'),
		// '../src/index.js',
	],
	output: {
		// path: path.resolve(__dirname, '../../cw-release/pc'),
		// path: path.join(__dirname, '../dist/assets'),
		path: path.join(__dirname, '../dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, '../src'), // 从哪提供内容
		historyApiFallback: true,
		hot: true,
		port: config.port,
		publicPath: config.publicPath,
		noInfo: false,
		disableHostCheck: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/), // moment 优化
		// new webpack.NoErrorsPlugin(),
		// new BowerWebpackPlugin({
		//     searchResolveModulesDirectories: false,
		// }),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				__LOCAL__: true,
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: require.resolve('babel-loader'),
				include: path.join(__dirname, '../src'),
				options: {
					// cacheDirectory: true,
					plugins: ['react-hot-loader/babel'],
				},
			},
			{
				test: /\.tsx?$/,
				include: config.srcPath,
				// loader: 'awesome-typescript-loader',
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							plugins: ['react-hot-loader/babel'],
						},
					},
					// 'awesome-typescript-loader',
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							getCustomTransformers: () => ({
								before: [
									tsImportPluginFactory({
										libraryName: 'antd',
										libraryDirectory: 'lib',
										style: true,
									}),
								],
							}),
							compilerOptions: {
								module: 'es2015',
							},
						},
					}, // (or awesome-typescript-loader)
				],
				exclude: /node_modules/,
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				use: ['source-map-loader'],
				// loader: 'source-map-loader',
			},
		],
	},
	resolve: {
		alias: {
			config: `${config.srcPath}/config/dev`,
		},
	},
});
