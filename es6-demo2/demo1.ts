

class RangeInterator {
    
    constructor(public start: number, public end: number) {
        
        
    }

    [Symbol.iterator]() {return this;}

    next(){
        let value = this.start;
        if(value < this.end){
            
            this.start++;
            return {done:false, value: value};
        }
        else{
            return {done:true, value: undefined};
        }
    }
}

let rangeInterator = new RangeInterator(1,10);

console.log(rangeInterator.start);
console.log(rangeInterator.end);


for (const o of rangeInterator) {
    console.log(o);
}
