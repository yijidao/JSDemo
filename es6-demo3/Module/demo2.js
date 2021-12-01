// ### 模块加载
// - 浏览器加载
// - Nodejs 模块加载

// ### nodejs 的模块加载方法
// #### 模块有两种，一种是 ES6 模块(ESM)，一种是 CommonJS 模块(CJS)
// - esm 使用 import 和 export，使用 mjs 后缀
// - cjs 使用 requirs() 和 module.exports，使用 cjs 后缀

// #### package.json 文件
// - 如果不想改后缀，可以在 package.json 中指定 type 字段
// {
//    "type": "module"
// }
// - package.json 有两个模块入口，main 和 exports，简单的可以使用 main 字段： "main": "./Module/demo1.js"
// - exports 的优先级高于 main


// ####  exports 的多种用法
// - 子目录别名
//   - "exports": {"./submodule" : "./scr/submodule"}
//     这样就可以在代码中使用别名导入模块， import submodule from submodule/test.js; 
//     如果没有指定别名，就不能使用别名+脚本来导入，必须使用全路径。
// - 主入口别名
//   - 主入口别名是 "."，并且优先级高于 main
//   - "exports": {".": "./main.js"} 可以简写为 "exports": "./main.js"
// - 条件加载
//   "type": "module",
//   "exports": {
//      ".":{
//          "require": "./main.cjs", // commonjs入口，也就是使用 require() 命令的入口
//          "default": "./main.js" // es6 入口，
//       }
//    }


// #### commonjs 加载 es6 模块
// - 不能使用 require() 直接加载，只能使用 import()
(async () => {
    await import('./xx.mjs');
})();

// #### es6 加载 commonjs 模块
// - 不能指定加载，只能整体加载
// 正确 
import packageMain from 'commonjs-package'; 
// 报错 
import { method } from 'commonjs-package';

// - 加载单一加载项可以写成这样
import packageMain from 'commonjs-package';
const { method } = packageMain;

// #### 同时支持两种模块
// - 如果原始模块是 commonjs，可以加包装层再到处
import cjsModule from '../index.js';
export const foo = cjsModule.foo;
// - 或者在 package.json 中指定两种模式各自的入口
//"exports"：{
//  "require": "./index.js"，
//  "import": "./esm/wrapper.js"
//}


// #### nodejs 内置模块可以整体加载也可以指定加载
// 整体加载
import EventEmitter from 'events';
const e = new EventEmitter();
// 加载指定的输出项
import { readFile } from 'fs';
readFile('./foo.txt', (err, source) => {
  if (err) {
    console.error(err);
  } else {
    console.log(source);
  }
});

// #### 内部变量
// - es6 模块为了在浏览器和服务器环境都一样，所以跟 commonjs 模块有一些变量不一样
// - es6 顶层 this 是 undefined,commonjs 是 当前模块
// - 其次，以下这些顶层变量在 ES6 模块之中都是不存在的。
//   - arguments
//   - require
//   - module
//   - exports
//   - __filename
//   - __dirname


// #### 循环加载