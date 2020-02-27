// 普通参数
interface aObj {
    width: number,
    height: string
}

function aaa(obj: aObj) {
    console.log(obj.width, obj.height)
}
 let a = {
    width: 10,
    height: 'ds'
 };

aaa(a);

// 可选
interface config {
    color?: string,
    width?: number
}

function bbb(cfg: config): void {
    console.log(cfg.color, cfg.width)
}

bbb({color:'red'});

// 只读

interface only {
    readonly a: number,
    readonly b: number
    [prop:string]: any
}

function ccc(only:only) {
    console.log(only.a * only.b)
}

ccc({a:2,b:4});

// 函数类型
interface aFun {
    (a:number, b:number): number;
}

let myFun: aFun;
myFun = function (a:number, b:number) {
    return a * b;
};