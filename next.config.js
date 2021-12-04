const withOptimizedImages = require('next-optimized-images');

module.exports = {
    basePath: process.env.PRODUCTION === 'true' ? '/landing-nextjs' : '',
    images: {
        domains: ['openweathermap.org'],
    },
    ...withOptimizedImages({
        handleImages: ['jpeg', 'png', 'svg'],
    })
}