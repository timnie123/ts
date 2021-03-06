class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distance:number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Snake extends Animal{
    constructor(name:string) {
        super(name);
    }
    move(distance: number = 5) {
        console.log(`${this.name} zzz`);
        super.move(distance);
    }
}

let sam = new Snake('sam');
sam.move();