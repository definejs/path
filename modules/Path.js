
const path = require('path');


/**
* 路工具。
*/
module.exports = exports = {
    
    /**
    * 对路径进行标准化处理，以得到不同操作系统下的格式统一的路径。
    * @param {string} p 输入的路径字符串，可以是一个文件，也可以是一个目录。
    * @returns {string} 返回格式统一的路径，即把 '\' 换成 '/'，把多个 '/' 合成一个。
    */
    normalize(p) {
        p = path.normalize(p);
        p = p.replace(/\\/g, '/');    //把 '\' 换成 '/'。
        p = p.replace(/\/+/g, '/');   //把多个 '/' 合成一个。
        
        return p;
    },

    /**
    * 对目录路径进行标准化处理，以得到格式统一的目录路径。
    * @param {string} dir 要进行处理的目录路径。 经过标准化处理后，如果不是以 `/` 结尾，则自动加上。
    * @returns {string} 返回一个以 `/` 结尾的字符串。
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
    * @param {string} p 要处理的路径。
    *   如果输入的是一个目录形式的字符串，则标准化后直接返回。
    *   如果输入的是一个文件形式的字符串，则返回文件所在的目录。
    * @returns {string} 返回以 `/` 结尾的字符串作为目录。
    */
    dirname(p) {
        p = exports.normalize(p);

        //已经是一个目录。
        if (p.endsWith('/')) {
            return p;
        }

        //是一个文件。
        let dir = path.dirname(p);
        return exports.normalizeDir(dir);
    },

    /**
    * 合并多个路径，并格式化成标准形式，即以 `/` 作为目录的分隔符。
    */
    join(...args) {
        let p = path.join(...args);
        return exports.normalize(p);
    },

    /**
    * 获取相对路径。
    */
    relative(...args) {
        let p = path.relative(...args);
        return exports.normalize(p);
    },

    /**
    * 获取相对路径。
    */
    resolve(...args) {
        let p = path.resolve(...args);
        return exports.normalize(p);
    },

    /**
    * 从对象返回路径字符串。
    */
    format(...args) {
        let p = path.format(...args);
        return exports.normalize(p);
    },

    

};







