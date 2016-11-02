'use strict';

const TPL = 'module.exports = "{{content}}"';

module.exports = function(source) {

    // 除掉换行回车，转义双引号和单引号
    source = source.replace(/(\r|\n)/gm, '')
                   .replace(/("|')/gm, '\\$1');

    return TPL.replace(/\{\{content\}\}/, source);
};
