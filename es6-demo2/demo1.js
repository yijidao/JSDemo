var RangeInterator = /** @class */ (function () {
    function RangeInterator(start, end) {
        this.start = start;
        this.end = end;
    }
    RangeInterator.prototype[Symbol.iterator] = function () { return this; };
    RangeInterator.prototype.next = function () {
        var value = this.start;
        if (value < this.end) {
            this.start++;
            return { done: false, value: value };
        }
        else {
            return { done: true, value: undefined };
        }
    };
    return RangeInterator;
}());
var rangeInterator = new RangeInterator(1, 10);
console.log(rangeInterator.start);
console.log(rangeInterator.end);
for (var _i = 0, rangeInterator_1 = rangeInterator; _i < rangeInterator_1.length; _i++) {
    var o = rangeInterator_1[_i];
    console.log(o);
}
