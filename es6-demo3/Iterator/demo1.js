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