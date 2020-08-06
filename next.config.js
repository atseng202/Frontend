const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    },
    devIndicators: {
        autoPrerender: false,
    },
    env: {
        API_BASEURL: 'https://youtubenlp.us-south.cf.appdomain.cloud',
    }
})
