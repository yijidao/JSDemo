// ### Reflect
// - Reflect 跟 Proxy 一样都是用来操作对象的
// - Reflect 可以用来替换 Object 的功能，因为 Objet 有一些 api 设计得不好，应该是声明式的，原来是命令式的
// - 跟 Proxy 搭配使用，用 Reflect 来完成默认的行为，用 Proxy 来完成增强的行为

// 使用 Proxy 和 Reflect，就可以完成 aop 的功能了
let proxyObj = new Proxy({}, {
    set: (t, p, v, r) => {
        Reflect.set(t, p, v);
        console.log('proxy set');
    },
    get: (t,p, r) => {
        console.log('proxy get');
        return Reflect.get(t, p, r);
    }
});

proxyObj.count = 0;
console.log(++proxyObj.count);

// - Proxy 有的属性，Reflect 都有，所以两者就是设计出来搭配使用的
// - Reflect.apply(target, thisArg, args)
// - Reflect.construct(target, args)
// - Reflect.get(target, name, receiver)
// - Reflect.set(target, name, value, receiver)
// - Reflect.defineProperty(target, name, desc)
// - Reflect.deleteProperty(target, name)
// - Reflect.has(target, name)
// - Reflect.ownKeys(target)
// - Reflect.isExtensible(target)
// - Reflect.preventExtensions(target)
// - Reflect.getOwnPropertyDescriptor(target, name)
// - Reflect.getPrototypeOf(target)
// - Reflect.setPrototypeOf(target, prototype)