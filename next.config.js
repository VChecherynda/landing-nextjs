module.exports = {
    basePath: process.env.PRODUCTION === 'true' ? '/landing-nextjs' : '',
    assetPrefix: process.env.PRODUCTION === 'true' ? '/landing-nextjs/' : '',
}