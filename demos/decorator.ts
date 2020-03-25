// 类装饰器
function addAge(constructor: Function) {
    constructor.prototype.age = 24;
}

@addAge
class Person{
    name: string;
    age!: number;
    constructor() {
        this.name = 'Tim';
    }
}

let person = new Person();

console.log(person.age); // 24


// 方法装饰器
/**
 * 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 2.成员的名字。
 3.成员的属性描述符。
 */
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
}

class Person1{
    name: string;
    constructor() {
        this.name = 'Tim';
    }

    @method
    say(){
        return 'instance method';
    }

    @method
    static run(){
        return 'static method';
    }
}

const tim = new Person1();

// 修改实例方法say
tim.say = function() {
    return 'edit'
};

console.log(tim.say());

// 属性装饰器
/**
 * 
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 成员的名字。
 * */
function props(target: any, propertyKey: string) {
    console.log(target, propertyKey);
}

class Person2{
    @props
    name: string;
    constructor() {
        this.name = 'Tim';
    }

    say(){
        return 'instance method';
    }

    static run(){
        return 'static method';
    }
}

// 参数装饰器
/*
* 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
成员的名字。
参数在函数参数列表中的索引
* */
function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(target, propertyKey, index);
}

class Person3 {
    greet(@logParameter message: string,@logParameter name: string): string {
        return `${message} ${name}`;
    }
}
const p = new Person3();
p.greet('hello', 'tim');

// Person3 { greet: [Function] } greet 1
// Person3 { greet: [Function] } greet 0