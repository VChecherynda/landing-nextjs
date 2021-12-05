const isProd = process.env.PRODUCTION === 'true';

module.exports = {
    basePath: isProd ? process.env.PRODUCTION_NEXT_JS_PATH : '',
    assetPrefix: isProd ? process.env.PRODUCTION_NEXT_JS_PATH : '',
}