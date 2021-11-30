// ### async 就是 generator 的语法糖

// ### 基本用法
// - async 返回一个 Promise 对象，可以使用 then() 添加函数。当遇到 await 时会先返回，等异步操作结束后再执行 await 后面的代码
function timeout(ms) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function AsyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

async function f() {
    await AsyncPrint(1, 1000);
    await AsyncPrint(2, 1000);
    await AsyncPrint(3, 1000);
    await AsyncPrint(4, 1000);
}
f();

// ### aysnc 函数有多种使用形式
// 函数声明
async function foo(){}

// 函数表达式
const foo2 = async function(){};

// 对象方法
let o = {
    async foo3(){}
};

// Class 方法
class Test{
    async foo4(){}
}
// 箭头函数
const foo5 = async() => {};

// ### await 结合 promise 
// 因为 await 会返回 Promise 对象，所以可以使用 catch()、 then()、all()、race()、allSettled()、any()

