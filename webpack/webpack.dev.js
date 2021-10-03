const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        hot: true,
        open: true
    },
    plugins: [
        new ReactRefreshPlugin()
    ]
}