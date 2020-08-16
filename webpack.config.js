const webpack = require("webpack")
const path = require("path")
const config = require("sapper/config/webpack.js")
const pkg = require("./package.json")
const svelteConfig = require("./svelte.config.js")

const mode = process.env.NODE_ENV || "production"
const dev = mode === "development"

const alias = { svelte: path.resolve("node_modules", "svelte") }
const extensions = [".ts", ".mjs", ".js", ".json", ".svelte", ".html"]
const mainFields = ["svelte", "module", "browser", "main"]
const babelRule = {
  test: /\.(ts|mjs|js)$/,
  loader: "babel-loader",
  include: [path.resolve(__dirname, "src")],
  exclude: [/node_modules\/?!svelte/],
}

module.exports = {
  client: {
    mode,
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: [
            "babel-loader",
            {
              loader: "svelte-loader",
              options: {
                ...svelteConfig,
                dev,
                hydratable: true,
                hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
              },
            },
          ],
        },
        babelRule,
      ],
    },
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && "inline-source-map",
  },

  server: {
    mode,
    entry: config.server.entry(),
    output: config.server.output(),
    target: "node",
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat("encoding"),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: [
            "babel-loader",
            {
              loader: "svelte-loader",
              options: {
                ...svelteConfig,
                css: false,
                generate: "ssr",
                dev,
              },
            },
          ],
        },
        babelRule,
      ],
    },
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },
}
