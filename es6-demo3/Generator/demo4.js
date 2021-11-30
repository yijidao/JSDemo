// ### yield* 
// - 使用 yield* 可以简化在一个迭代器中遍历另一个迭代器的操作

let g = function*(){
    yield console.log(2);
    yield console.log(3);
}
let g2 = function*(){
    yield console.log(1);
    yield* g();
    yield console.log(4);
}

console.log([...(g2())]);

// ### 作为对象属性的 Generator 函数
let o = {
    * myGenerator(){

    }
};

// 这两个写法是一个意思
let o2 = {
    myGenerator: function* (){

    }
};

// ### Generator 函数中的 this
// Generator 中不能直接使用 this，因为 Generator 中返回的是迭代器对象，而不是 this 对象
function* g3(){
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}
let o3 = g3();
console.log(o3.next());
console.log(o3.a); // 这里返回的是 undefined

// 使用 prototype 和 call 来包装实现 this
let o4 = g3.call(g3.prototype);
o4.next();
o4.next();
o4.next();
console.log(`a: ${o4.a} b: ${o4.b} c: ${o4.c}`);
console.log(o4 instanceof g3);

