class Test {
    m() { }
}

let t = new Test();
console.log(typeof Test); // function， 所以类也是个函数
console.log(Test.prototype.m === t.m); // true，所以调用实例方法都是在调用原型方法

// ### constructor 
// - 如果没有显式添加 constructor()，则会自动生成一个隐式的 constructor() 
// - 通过 new 生成实例时，自动调用该函数。
// - 构造函数会返回实例对象（也就是 this，自我理解，this 其实是一个指针，指向实例的内存地址），所以完全可以指定返回另一个对象。
class Foo {
    constructor() {
        return Object.create(null); // 返回另一个对象
    }
}
let foo = new Foo();
console.log(foo instanceof Foo); // false

/// ### 取值函数 getter 赋值函数 setter
class GetSetClass {
    _title = 'init';
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}

let getSet = new GetSetClass();
console.log(getSet.title);
getSet.title = 'change';
console.log(getSet.title);

// ### 属性表达式
// - 类的属性名可以使用表达式
let methodName = 'getValue';
class ExpressionClass {
    [methodName]() {
        console.log('call');
    }
}
let expressionObject = new ExpressionClass();
expressionObject[methodName]();

// ### Class 表达式
// - 使用 Class 表达式可以写出立即执行的 Class
let p = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
p.sayName();

// ### Generator 函数
// - 使用 * 可以标记该函数为 Generator 函数
class GeneratorClass {
    *[Symbol.iterator]() { // 结合 Symbol.iterator 实现迭代器模式
        yield 1;
        yield 2;
        yield 3;
    }
    * commonGenerator() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
}
let generatorClass = new GeneratorClass();
for (const g of generatorClass) {
    console.log(g);
}

let cg = generatorClass.commonGenerator();
for (const g of cg) {
    console.log(g);
}

// ### this 的指向
// - this 默认指向类的实例，但是如果使用解构来单独使用方法，可能会报错
// - 可以使用 bind 来为方法绑定 this
// - 也可以使用箭头函数，因为箭头函数中的 this 总是指向定义时所在的对象
class ThisClass {

    constructor() {
        this.printNameByBindThis = this.printNameByBindThis.bind(this);
        this.printNameByArrowFunc = (name = 'arrow function') => {this.print(name)};
    }

    printName(name = 'foo') {
        this.print(name);
    }

    printNameByBindThis(name = 'bind this') {
        this.print(name);
    }

    
    print(value) {
        console.log(value);
    }
}
let thisObj = new ThisClass();
thisObj.printName();

let { printName, printNameByArrowFunc, printNameByBindThis } = thisObj;
try {
    printName();   // 报错，  Cannot read property 'print' of undefined
} catch (error) {
    console.log(error);
}
printNameByArrowFunc();
printNameByBindThis();