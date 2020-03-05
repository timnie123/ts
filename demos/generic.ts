function returnItem<T>(para: T) :T{
    return para;
}

returnItem(12);
returnItem('aaa');

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([2, 'ew']);

interface returnItemFn<T> {
    (para: T): T;
}

let returnItemP: returnItemFn<number> = para => para;
let otherFu: returnItemFn<string> = function(C:string): string {
    return C;
};

returnItemP(3);
otherFu('aaa');

class Stack<T extends string | number> {
    arr: T[] = [];

    public push(item: T) {
        this.arr.push(item);
    }
}

const stack = new Stack<number>();