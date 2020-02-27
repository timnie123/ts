// string
let str: string = 'type';

//boolean
let boolean: boolean = true;

// number
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;

// array
let arr: number[] = [1,2,3,4];
let arr1: Array<string> = ['a', 'b'];

// tuple
let tuple: [string, number];
tuple = ['a', 2];

// any
let any: any = 4;

// void
function test(x:string): void {
    console.log(x);
};

// unknow
let unknow: unknown;

// never
function error(message: string): never {
    throw new Error(message);
}

let obj: object = {
    a: 1,
    b: 2
};

// func
let func:(a:number, b:number) => number = function (a: number, b: number):number {
    return a + b;
};

func(3,5);

//enum
enum color {
    red,
    yellow,
    blue
}
console.log(color.red);
console.log(color[1]);
