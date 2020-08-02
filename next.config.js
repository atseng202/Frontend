const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    },
    devIndicators: {
        autoPrerender: false,
    },
})
