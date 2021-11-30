// ### Generator 基本概念
// 跟普通函数一样，但是有两个特征：
// - function 关键字和函数名之间有个 *
// - 函数体内部使用了 yield
function* helloGenerator(){
    yield 'h';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
    return 'end';
}

// yield 
// 调用 next()  后，遇到 yield 就会暂停住，同时计算 yield 之后表达式的值，并且作为 {done: x, value: y } 的值
// 如果 generator() 有 return，则返回 {done:true, value: x}，否则返回 {done:false, value: x}
let g = helloGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// Iterator 接口表示该接口会返回一个迭代器对象，而 Genarator 可以生成迭代器对象，所以可以结合使用
let o = {
    [Symbol.iterator]: function* (){
        yield 'w';
        yield 'o';
        yield 'r';
        yield 'l';
        yield 'd';
    }
}
for (const i of o) {
    console.log(i);
}