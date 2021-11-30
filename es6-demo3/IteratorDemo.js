'use strict'

// ### 定义
// Iterator 接口会返回一个 Interator（迭代器），
// Interator 对象具有 next()、return()、throw()
// next() 会返回 {done:false, value: xx} 或 {done:true, value: undefined }

// let o = {
//     [Symbol.iterator]: function () {
//         return this;
//     },
//     start: 0,
//     end: 10,
//     next() {

//         return this.start < this.end ? {
//             done: false,
//             value: this.start++
//         } : {
//             done: true,
//             value: undefined
//         }
//     }
// };

class O {
    [Symbol.iterator]() {
        return this;
    };
    start = 0;
    end = 5;
    next() {

        return this.start < this.end ? {
            done: false,
            value: this.start++
        } : {
            done: true,
            value: undefined
        }
    }
}
let o = new O();
for (const i of o) {
    console.log(i);
}

o = new O();
console.log([...o]);

// ###原生具备 Iterator 的数据结构 
// - Array 
// - Map 
// - Set 
// - String 
// - TypeArray 
// - 函数的 arguments 对象
// - NodeList 对象

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 类数组对象可以直接使用数组的迭代器接口
// 类数组对象是指有 length 属性，和 0 1 2 3 等属性
let likeArray = {
    length: 5,
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (const o of likeArray) {
    console.log(o);
}

// ### 调用 Iterabot 的场合
// - 解构赋值
let set = new Set()
    .add('a')
    .add('b')
    .add('c');
let [x, y, z] = set;
console.log(`x:${x}, y:${y}, z:${z}`);

// - 扩展运算符
let s = 'hello';
console.log([...s]);
console.log('start', ...s, 'end')

// - yeild* 搭配生成器函数
let generator = function* () {
    yield 'start';
    yield* s;
    yield 'end';
}

let g = generator();
let next = g.next();
while (!next.done) {
    console.log(next.value);
    next = g.next();
}
// - 其他使用 Iterator 接口的场合，如
//   - for..of
//   - Array.from()
//   - Map(),Set()
//   - Promise.all()
//   - Promice.any()

// ### 使用 Generator 实现 Iterator 接口的最简单实现
let easyIterator = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield*[3, 4, 5];
        yield 6;
    }
}
for (const i of easyIterator) {
    console.log(i);
}

// ### Iterator 的 return() 和 throw()
// - return() 主要在迭代非正常退出时调用，如 break、发生异常、return，主要用来释放资源
// - throw() 主要用于 Generator
class ReturnIterator {
    [Symbol.iterator]() {
        return this;
    };
    start = 0;
    end = 3;
    next() {
        return this.start < this.end ? {
            done: false,
            value: this.start++
        } : {
            done: true,
            value: undefined
        }
    };
    return () {
        console.log('释放资源');
        return {
            done: true
        }
    }
}

let returnIterator = new ReturnIterator();
for (const i of returnIterator) {
    console.log(i);

}

returnIterator = new ReturnIterator();
for (const i of returnIterator) {
    if (i === 1) break;
    console.log(i);
}

returnIterator = new ReturnIterator();
try {
    for (const i of returnIterator) {
        if (i === 1) throw new Error();
        console.log(i);
    }
} catch {

}

returnIterator = new ReturnIterator();
for (const i of returnIterator) {
    // if (i === 1) return;
    console.log(i);
}

// ### 计算生成的 Iterator
// Array、Set、Map 的 entries() keys() values()
let arr2 = ['a', 'b', 'c'];
for (const e of arr.entries()) {
    console.log(e);
}