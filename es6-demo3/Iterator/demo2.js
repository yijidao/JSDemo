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

// ### 计算生成的 Iterator
// Array、Set、Map 的 entries() keys() values()
let arr2 = ['a', 'b', 'c'];
for (const e of arr.entries()) {
    console.log(e);
}