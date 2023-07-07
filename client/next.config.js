const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "img.uxwing.com"],
  },
};

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ogg|mp4|webm)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
  ...nextConfig,
};
