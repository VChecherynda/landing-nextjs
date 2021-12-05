const isProd = process.env.PRODUCTION === 'true';

module.exports = {
    basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
    assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
}