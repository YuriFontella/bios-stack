const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    GRAPHQL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : 'https://bios-stack.herokuapp.com/graphql',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'scontent.fnvt1-1.fna.fbcdn.net'],
  }
})
