const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: `${__dirname}/src/index.html`, // 源html
        //     inject: 'body', // 注入到哪里
        //     filename: 'index.html', // 输出后的名称
        //     hash: true, // 为静态资源生成hash值
        // }),
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '有成财务',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
            chunksSortMode: 'none',
            hash: true,
        }),
    ],
    output: {
        chunkFilename: '[name].[contenthash:6].js', // 按需加载名称
        filename: 'app.js', // 出口文件名称
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-virtualized/List': 'react-virtualized/dist/es/List',
            actions: `${config.srcPath}/actions/`,
            reducers: `${config.srcPath}/reducers/`,
            components: `${config.srcPath}/components/`,
            constants: `${config.srcPath}/constants/`,
            stores: `${config.srcPath}/stores/`,
            styles: `${config.srcPath}/styles/`,
            // config: `${config.srcPath}/config/${process.env.NODE_ENV}`,
            util: `${config.srcPath}/lib/util.js`,
            utils: `${config.srcPath}/utils`,
            server: `${config.srcPath}/lib/server`,
            dingApi: `${config.srcPath}/lib/dingApi.js`,
            fetchApi: `${config.srcPath}/lib/fetch.js`,
            'react/lib/ReactMount': 'react-dom/lib/ReactMount',
            svg: `${config.srcPath}/images/svg/`,
            img: `${config.srcPath}/images/`,
            imgSub: `${config.srcPath}/images/reimbursement/sub/`,
            hoc: `${config.srcPath}/hoc/`,
            validity: `${config.srcPath}/containers/validity`,
            '@app': `${config.srcPath}/applications`,
            cw: `${config.srcPath}/containers`,
            src: `${config.srcPath}`,
            bx: `${config.srcPath}/applications/reimbursement`,
            platform: `${config.srcPath}/public`,
            eventEmitter: `${config.srcPath}/eventEmitter`,
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // include: config.srcPath,
                // exclude: /node_modules/,
                use: [
                    // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: path.resolve(__dirname, './loaders/testLoader'),
                    //     options: {
                    //         name: 'yt'
                    //     }
                    // },
                ],
            },
            {
                test: /\.less/,
                // include: config.srcPath,
                use: [
                    { loader: 'style-loader' },
                    // { loader: 'css-loader?minimize' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'primary-color': '#F7941F',
                                'info-color': '#F7941F',
                                'font-size-base': '13px',
                            },
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.styl/,
                // include: config.srcPath,
                use: [
                    'style-loader',
                    // 'css-loader?minimize', // 报错
                    'css-loader', // 报错
                    'stylus-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                include: config.srcPath,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                exclude: /node_modules/,
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                include: config.srcPath,
                loader: 'file-loader',
                exclude: /node_modules/,
            },
            // { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            // {
            //     test: /\.tsx?$/,
            //     include: config.srcPath,
            //     // loader: 'awesome-typescript-loader',
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: {
            //                 babelrc: false,
            //                 plugins: ['react-hot-loader/babel'],
            //             },
            //         },
            //         // 'awesome-typescript-loader',
            //         'ts-loader', // (or awesome-typescript-loader)
            //     ],
            //     exclude: /node_modules/,
            // },
        ],
    },
    externals: {
        jquery: 'jQuery',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000, // 3 to 10 because of gzip
            // minChunks: 1, // 共享该module的最小chunk数
            minChunks: 3, // 共享该module的最小chunk数
            maxAsyncRequests: 10,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            name: true,
        },
    },
};
