
const path = require('path');


/**
* 路工具。
*/
module.exports = exports = {

    /**
    * 原始的内置的 path 模块，为了方便引用。
    */
    path,
    
    /**
    * 对路径进行标准化处理，以得到格式统一的路径。
    */
    normalize(file) {
        file = path.normalize(file);
        file = file.replace(/\\/g, '/');    //把 '\' 换成 '/'。
        file = file.replace(/\/+/g, '/');   //把多个 '/' 合成一个。

        return file;
    },

    /**
    * 对目录路径进行标准化处理，以得到格式统一的路径，并且确保是以 `/` 结尾。
    */
    normalizeDir(dir) {
        dir = exports.normalize(dir);

        //确保以 `/` 结束，统一约定，不易出错。
        if (!dir.endsWith('/')) {
            dir += '/';
        }

        return dir;
    },

    /**
    * 获取指定路径的所在目录。
    */
    dirname(file) {
        let dir = path.dirname(file);
        return exports.normalizeDir(dir);
    },

    /**
    * 合并多个路径，并格式化成标准形式，即以 `/` 作为目录的分隔符。
    */
    join(...args) {
        let file = path.join(...args);
        return exports.normalize(file);
    },

    /**
    * 获取相对路径。
    */
    relative(...args) {
        let file = path.relative(...args);
        return exports.normalize(file);
    },

    /**
    * 获取相对路径。
    */
    resolve(...args) {
        let file = path.resolve(...args);
        return exports.normalize(file);
    },

    /**
    * 从对象返回路径字符串。
    */
    format(...args) {
        let file = path.format(...args);
        return exports.normalize(file);
    },

    

};







