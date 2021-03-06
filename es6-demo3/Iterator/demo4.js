// ### 异步 Iterator

// 普通的 Iterator 无法良好地处理异步迭代的情况
class Test {
    [Symbol.iterator]() {
        return this;
    }
    i = 0;
    next() {
        setTimeout(() => {
            console.log(++this.i);
        }, 1000);
    }
}

let t = new Test();
t.next();
t.next();
t.next();

// 异步的 Iterator 通过返回一个 Promise 来处理异步迭代的情况
class Test2 {
    [Symbol.iterator]() {
        return this;
    }
    i = 0;
    next() {
        return {
            done: false,
            value: new Promise(resolve => {
                setTimeout(() => {
                    console.log(++this.i);
                    resolve(this.i);
                }, 1000);
            })
        };
    }
}

let t2 = new Test2();
// 通过 then() 来实现
t2.next().value
    .then(_ => t2.next().value)
    .then(_ => t2.next().value);
// 通过 await 来实现
await t2.next();
await t2.next();
await t2.next();
// 通过 for await...of 来实现
for await(const i of t2) {

}



function AsyncMethod(value) {
    return new Promise(resolve => setTimeout(() => resolve(value), 1000));
}

// ### 通过 generator 和 for await...of 来实现异步迭代
// class Test3 {
//     [Symbol.iterator] = async function* () {

//         yield AsyncMethod(1);
//         yield AsyncMethod(2);
//         yield AsyncMethod(3);
//     }
// }

// let test3 = new Test3();

// for await (const i of test3) {
//     console.log(i);
// }

// let g = test3[Symbol.iterator]();
// g.next().then(x => console.log(x));
// g.next().then(x => console.log(x));
// g.next().then(x => console.log(x));

// for await (const i of g) {
//     console.log(i);
// }
// console.log('over');

