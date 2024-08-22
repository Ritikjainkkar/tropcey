// // next.config.js

// const nextConfig = {
//   // Enables static HTML export
//   output: 'export',
//   trailingSlash: true,

//   // Existing Webpack configuration
//   webpack: (config, { isServer }) => {
//     // Customize the Webpack config here
//     // Make sure to return the modified config
//     return config;
//   },

//   // Add other configurations here as needed
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',// next.config.js

  trailingSlash: true,
  
  // Existing Webpack configuration
  webpack: (config, { isServer }) => {
    // Customize the Webpack config here
    // Make sure to return the modified config
    return config;
  },
};

export default nextConfig;
