// ### Module
// - 模块由两个命令组成 import 和 export
// - 一个模块就是一个单独的文件，文件内的变量、类、函数等外部都无法获得，只能获得 export 出的东西

import {name, print, Foo} from './module1.js';

console.log(name);
print();
let foo = new Foo();
foo.create();
foo.say();

export {}