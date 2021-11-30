// ### Generator.prototype.next()
// yield 本身是不会返回值的，但是调用 next() 的时候，可以给 next() 传参，作为上一个 yield 返回的值。
// 但是给 generator 传初始值必须通过给 generator() 传参，直接在第一次调用 next() 时赋值是没有用的。
function* foo(x) {
    console.log(`x: ${x}`);

    let y = 2 * (yield(x + 1));

    console.log(`y: ${y}`);

    let z = yield(y / 3);

    console.log(`z: ${z}`);

    return (x + y + z);
}

let a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

let b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));

let c = foo();
console.log(c.next(5)); // 这个写法跟 b 不一样，注意一下， 通过调用第一次 next() 是无法赋初始值的
console.log(c.next(12));
console.log(c.next(13));

// 想要第一次调用 next 就能够输入值，可以包装一下
function wrapper(generatorFunc){
    return function(...args) {
        let g = generatorFunc(...args);
        g.next();
        return g;
    }
}

let wrapped = wrapper(function* (){
    console.log(`first input: ${yield}`);
    return 'done';
})

let w = wrapped();
w.next('hello');

