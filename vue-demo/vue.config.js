// 调整 webpack 配置

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "VueDemo";
                return args;
            })
    }

}