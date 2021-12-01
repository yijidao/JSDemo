// ### Iterator 的 return() 和 throw()
// - return() 主要在迭代非正常退出时调用，如 break、发生异常、return，主要用来释放资源
// - throw() 主要用于 Generator
class ReturnIterator {
    [Symbol.iterator]() {
        return this;
    };
    start = 0;
    end = 3;
    next() {
        return this.start < this.end ? {
            done: false,
            value: this.start++
        } : {
            done: true,
            value: undefined
        }
    };
    return () {
        console.log('释放资源');
        return {
            done: true
        }
    }
}

let returnIterator = new ReturnIterator();
for (const i of returnIterator) {
    console.log(i);

}

returnIterator = new ReturnIterator();
for (const i of returnIterator) {
    if (i === 1) break;
    console.log(i);
}

returnIterator = new ReturnIterator();
try {
    for (const i of returnIterator) {
        if (i === 1) throw new Error();
        console.log(i);
    }
} catch {

}

returnIterator = new ReturnIterator();
for (const i of returnIterator) {
    // if (i === 1) return;
    console.log(i);
}