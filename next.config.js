/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "file-loader",
          options: {
            publicPath: "assets",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
// module.exports = {
//   // future: {
//   // webpack: true,
//   // },

//   webpack: (config) => {
//     // load worker files as a urls with `file-loader`
//     config.module.rules.unshift({
//       test: /pdf\.worker\.(min\.)?js/,
//       use: [
//         {
//           loader: "file-loader",
//           options: {
//             name: "[contenthash].[ext]",
//             // publicPath: "_next/static/worker",
//             // outputPath: "static/worker",
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };
