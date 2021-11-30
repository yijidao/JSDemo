// ### Generator.prototype.throw()
// - 调用 throw() 可以在 generator() 内部抛出异常并且被内部的 try...catch 捕获
// - 调用 throw() 会执行一次 next()
// - 调用 throw() 之前至少要执行一次 next()
function* throwGenerator() {
    try {
        yield console.log(1);
        yield console.log(2);
    } catch (error) {
        console.log(`inter: ${error}`);
    }
    yield console.log(3);
    yield console.log(4);
}

try {
    let g = throwGenerator();
    g.next();
    g.throw('e');
    g.next();

    g.throw('e2');
} catch (error) {
    console.log(`outer: ${error}`);
}

// ### Generator.prototype.return()
// - 调用 return() 会立刻结束 generator()，并且返回 {done:true， value: undefined}
// - 如果 return() 有传参，如 return(1)，则返回 {done:true, value: 1}
// - 如果调用 return() 时，已经执行到try...finally 中，则会立刻执行 finally 中的代码，再返回值
function* returnGenerator(){
    // yield console.log(3);

    try {
        yield console.log(1);
        yield console.log(2);    
    } catch (error) {
        
    }
    finally{
        console.log('finally');
    }
    yield console.log(3);
}

let g2 = returnGenerator();
console.log(g2.next());
console.log(g2.return('return'));
