const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    cache: true,
    entry: [
        path.resolve(__dirname, 'src/') + '/Api.ts'
    ],
    module: {
        rules: [
            {
                test: /\.ts?/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader'
            }
        ]
    }, 
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'automoto-sdk.js',
        library: 'AutomotoSdk',
        libraryTarget: 'umd'
    },
    plugins: [
        new BrowserSyncPlugin({
            server: {
                baseDir: './build/',
                index: ['index.html']
            },
            files: [
                'build/index.html',
                'build/automoto-sdk.js'
            ],
            https: true,
            browser: 'google chrome',
            // browser: 'chrome.exe', // Windows user
            ghostMode: false
        })
    ]
};
