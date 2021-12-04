module.exports = {
    basePath: process.env.PRODUCTION === 'true' ? '/landing-nextjs' : '',
    images: {
        loader: 'imgix',
        path: '',
    },
}