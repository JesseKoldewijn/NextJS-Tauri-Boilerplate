/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false, // Can be re-enabled - just disabled it for more clear logging
	swcMinify: true, // This option is required for NextJS to work with Tauri
	compress: true, // This option is required for NextJS to work with Tauri
	images: {
		unoptimized: true, // This option is required for NextJS to work with Tauri
	},
	publicRuntimeConfig: {
		STAGE: "dev", // "dev" for development and "prod" for production runtime
	},
};
module.exports = nextConfig;