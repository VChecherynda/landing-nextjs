module.exports = {
    basePath: process.env.PRODUCTION === 'true' ? '/landing-nextjs' : '',
    images: {
        domains: ['https://api.openweathermap.org'],
    },
}