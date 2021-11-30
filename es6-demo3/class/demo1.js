class Test {
    m() {}
}

let t = new Test();
console.log(typeof Test); // function， 所以类也是个函数
console.log(Test.prototype.m === t.m); // true，所以调用实例方法都是在调用原型方法
