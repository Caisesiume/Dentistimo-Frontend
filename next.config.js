/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const IS_DEV = process.env.NODE_ENV === "development";
if (!IS_DEV) {
  console.log = function () {};
}

/* plugins in the array */
const plugins = [];
/* config in here */
const nextConfig = {
  webpack5: true,
  env: {
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    IS_DEV: IS_DEV,
    BROKER_URI: process.env.BROKER_URI,
    BROKER_USERNAME: process.env.BROKER_USERNAME,
    BROKER_PASSWORD: process.env.BROKER_PASSWORD,
    BROKER_PORT: process.env.BROKER_PORT,
  },
};

module.exports = withPlugins(plugins, nextConfig);
