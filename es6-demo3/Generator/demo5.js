// ### 异步 generator
// - 同步
function* SyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// - 异步
// - 写法之比同步多一个 async 
// - 每一次调用 next() 都会返回一个 Promise 对象
async function* AsyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

console.log([...(SyncGenerator())]);

// 使用 for await...of
for await(const i of AsyncGenerator()) {
    console.log(i);
}