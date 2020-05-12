const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra')
// const { override, fixBabelImports } = require('customize-cra')
const theme = require("./theme")

module.exports = override(
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: theme,
        }
    }),
    addDecoratorsLegacy()
);