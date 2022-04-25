const moduleExports = {
  env: {
    ENVIRONMNET: process.env.ENVIRONMNET,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['www-cdn.bigcommerce.com'],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: { images: { layoutRaw: true } },
}

module.exports = moduleExports
