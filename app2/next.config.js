const {
  withModuleFederation,
  MergeRuntime
} = require('@module-federation/nextjs-mf')
const path = require('path')
const { config } = require('process')

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options
    const mfConf = {
      name: 'app2',
      library: { type: config.output.libraryTarget, name: 'app2' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        app1: isServer ? path.resolve(
          __dirname,
          '../app1/.next/server/static/runtime/remoteEntry.js'
        ) : 'app1'
      },
      exposes: {},
      shared: [],
    }

    withModuleFederation(config, options, mfConf)

    config.plugins.push(new MergeRuntime())

    if (!isServer) {
      config.output.publicPath = 'http://next-micro-frontends-demo.surge.sh/_next/'
    }

    return config
  }
}
