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
      name: 'app1',
      library: { type: config.output.libraryTarget, name: 'app1' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {},
      exposes: {
        './Nav': './components/nav',
        './add': './utils/add',
        './multiplyByTwo': './utils/multiplyByTwo'
      },
      shared: [],
    }

    withModuleFederation(config, options, mfConf)

    config.plugins.push(new MergeRuntime())

    if (!isServer) {
      config.output.publicPath = 'http://adjoining-rest.surge.sh/_next/'
    }

    return config
  }
}
