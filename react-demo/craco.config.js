const CracoLessPlugin = require("craco-less");

process.env.BROWSER = "none";

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {

            },
            javascriptEnabled: true,
          },
        },
      },

      
    },
  ],
}