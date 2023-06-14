const path=require('path')
const HtmlWebpackPLUGIN=require("html-webpack-plugin")
module.exports={
    mode:process.env.NODE_ENV,
    entry:'./src/script.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
};