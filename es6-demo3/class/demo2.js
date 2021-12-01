// ### 静态方法
// - 添加 static 关键字
// - 无法被实例调用
// - 静态方法的 this 指向类，不是实例
// - 静态方法可以跟实例方法同名
// - 静态方法可以继承，也可以通过 super 关键字调用
class Foo {
    static m() {
        console.log('static m');
    }

    static m2() {
        this.m();
    }
}

class Bar extends Foo {
    static m2() {
        super.m();
    }
}

Foo.m();
Foo.m2();
Bar.m();
Bar.m2();
// let f = new Foo();
// f.m(); // 无法被实例调用

// ### 实例属性
// - 可以直接在顶部声明，也可以在构造函数声明。
class Foo2 {
    title = 't'; // 顶部声明
    constructor() {
        this.name = 'n'; // 构造函数声明
    }
}

let foo2 = new Foo2();
console.log(`title ${foo2.title} name ${foo2.name}`);
foo2.title = 't2';
foo2.name = 'n2';
console.log(`title ${foo2.title} name ${foo2.name}`);

// ### 私有方法私有方法
// - 目前没有私有方法私有属性，不过可以通过命名方式区分、Symbol等来模拟实现。
// - 目前有 # 修饰符提案

// ### 静态块
// - 静态块是只会执行一次的代码块，可以用来初始化静态属性。
class Foo3 {
    static x;
    static y;
    static z;
    static print;
    constructor() {
        console.log('init');
    }
    static {
        this.x = 1;
        this.y = 2;
        this.z = 3;
        this.print = function () {
            console.log(`x: ${x} y: ${y} z: ${z}`);
        }
        console.log('static init');
    }
}
new Foo3();

// ### new.target 属性
// - 如果没有使用 new 生成对象，会返回 undefined，所以用于必须使用构造函数来生成对象的场合
// - 如果在类中使用,target 会返回当前类
// - 如果有继承关系，在父类中的 target 也会返回子类，可以利用这个特性写抽象类，必须使用子类初始化。
function Person() {
    if (new.target !== undefined) {
        console.log(new.target);
        console.log('使用 new 生成了对象');
    } else {
        console.log('必须使用 new 生成对象');
    }
}
let p = new Person();
Person();
Person.call(p)

class Person2 {
    constructor() {
        console.log('Person2 init');
        console.log(new.target);
    }
}
class Man extends Person2{
    constructor(){
        super();
        console.log('Man init');
        console.log(new.target);
    }
}

new Person2();
new Man();