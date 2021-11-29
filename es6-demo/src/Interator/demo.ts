console.log("hello world");


let o = {
    [Symbol.iterator]: function () {

        return {
            next: function () {
                return {
                    done: true,
                    value: 1
                }
            }
        }
    }
}
console.log(o[Symbol.iterator]().next());

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

class RangeInterator {
    private start:number;
    private end:number;
    constructor(start1: number, end1: number) {
        this.start = start1,
        this.end = end1;
    }

    [Symbol.iterator]() {return this;}

    next(){
        if(this.start < this.end){
            return {done:false, value: this.start++};
        }
        else{
            return {done:true, value: undefined};
        }
    }
}

let rangeInterator = new RangeInterator(1,10);
for (const o of rangeInterator) {
    console.log(0);
}
