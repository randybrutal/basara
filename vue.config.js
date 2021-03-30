// eslint-disable-next-line
const webpack = require('webpack');

module.exports = {
    publicPath: '/',
    devServer: {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers': '*',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS'
        // },
        port: 8080,
        public: 'localhost',
        proxy: {
            '/rest': {
                target: 'https://api.flickr.com/services/rest/',
                // pathRewrite: { '^/rest': '' },
                changeOrigin: true,
                secure: false
            }
        }
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [
            {
                R: 'ramda',
                axios: 'axios'
            }
        ]);
    }
};
