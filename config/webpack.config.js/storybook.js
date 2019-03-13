const { cssModuleLoader, cssLoader } = require('./loaders');
const { client: plugins } = require('./plugins');

module.exports = async ({ config }) => {
    config.plugins = [...config.plugins, ...plugins];
    config.module.rules = [
        ...config.module.rules.filter((rule) => {
            return rule.test.toString() !== '/\\.css$/';
        }),
        {
            oneOf: [cssModuleLoader, cssLoader],
        },
    ];

    return config;
};
