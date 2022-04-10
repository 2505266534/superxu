module.exports = {
    plugins:{
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth:375,
            viewportHeight:375,
            unitPrecision:5,
            viewportUnit:'vw',
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],
            minPixelValue:1,
            mediaQuery:false,
            exclude:[/TabBar\.vue$/]//整个文件样式不hu转换要用正则写法规则以^abc开头 abc$结尾
        }
    }
}