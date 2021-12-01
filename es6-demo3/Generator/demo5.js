// ### 异步 generator
// - 同步
function* SyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

function AsyncMethod(value) {
    return new Promise(resolve => setTimeout(() => resolve(value), 1000));
}

// - 异步
// - 写法之比同步多一个 async 
// - 每一次调用 next() 都会返回一个 Promise 对象
async function* AsyncGenerator() {
    yield AsyncMethod(1);
    yield AsyncMethod(2);
    yield AsyncMethod(3);
}

console.log([...(SyncGenerator())]);

// 使用 for await...of
for await (const i of AsyncGenerator()) {
    console.log(i);
}

let ag = AsyncGenerator();
ag.next().then(x => console.log(x));
ag.next().then(x => console.log(x));
ag.next().then(x => console.log(x));