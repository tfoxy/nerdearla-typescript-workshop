const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const dotenv = require("dotenv-extended");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

dotenv.load();

/**
 * @param {boolean} isDev
 * @param {import("webpack").RuleSetUseItem[]} loaders
 * @returns {import("webpack").RuleSetUseItem[]}
 */
function getStyleLoaders(isDev, loaders = []) {
  return [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: loaders.length,
        modules: {
          auto: true,
          getLocalIdent: isDev ? getCSSModuleLocalIdent : undefined,
        },
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [["postcss-preset-env"]],
        },
      },
    },
    ...(loaders ?? []),
  ];
}

/**
 * Exporting function docs: https://webpack.js.org/configuration/configuration-types/#exporting-a-function
 *
 * @param {Record<string, string>} env Object with all values from --env (https://webpack.js.org/guides/environment-variables/)
 * @param {Record<string, string>} argv Object with the options passed to webpack-cli (https://webpack.js.org/api/cli/)
 * @returns {import("webpack").Configuration & { devServer?: import("webpack-dev-server").Configuration }}
 */
module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  const isProd = argv.mode === "production";

  if (!isDev && !isProd) {
    throw new Error(
      `Webpack Mode needs to be either development or production. Current value: ${argv.mode}`
    );
  }

  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      https: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({
                before: isDev ? [ReactRefreshTypeScript()] : [],
              }),
              onlyCompileBundledFiles: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: getStyleLoaders(isDev),
        },
        {
          test: /\.scss$/,
          use: getStyleLoaders(isDev, [
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  // keep webpackIgnore comments in production mode.
                  // Css is minified at the end by CssMinimizerPlugin.
                  outputStyle: "expanded",
                },
              },
            },
          ]),
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          type: "asset",
        },
      ],
    },
    optimization: {
      minimizer: ["...", new CssMinimizerPlugin()],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.join(__dirname, "tsconfig.eslint.json"),
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ base: "/" }),
      new MiniCssExtractPlugin({
        filename: isProd ? "[name].[contenthash].min.css" : "[name].css",
      }),
      isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    output: {
      clean: true,
      filename: isProd ? "[name].[contenthash].min.js" : undefined,
    },
  };
};
