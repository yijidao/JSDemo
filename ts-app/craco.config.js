const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
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
              // "@primary-color": "#1DA57A",
              // "@link-color": "#1DA57A",
              // "@border-radius-base": "2px",
            },
            javascriptEnabled: true,
          },
        },
      },
      // options: {
      //   customizeThemeLessPath: path.join(
      //     __dirname,
      //     "src/style/AntDesign/customTheme.less"
      //   ),
      // },
      
    },
  ],
}