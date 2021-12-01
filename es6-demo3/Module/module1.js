export var name = 'foo';
var age = 18;
var address = 'China';

export function print() {
    console.log(`name: ${name}, age: ${age}, address: ${address}`);
};

export class Foo {
    constructor() {
        this.create = () => {
            this.name = name;
            this.age = age;
        };
        this.say = () => console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

export {

    age,
    
};