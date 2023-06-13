const path=require('path')
module.exports={
    entry:'./src/script.js',
    output:{
        filname:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
};