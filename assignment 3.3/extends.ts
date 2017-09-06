//creates a class Animal
class Animal {
    name: string;
    distance: number;
    sound: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number) {
        return this.distance = distance;
    }
    makeSound(sound: string) {
        return this.sound = sound;
    }
}

//creates a class Tiger which extends the class Animal
class Tiger extends Animal {
    eat: string[];
    constructor(name: string) {
        super(name);
    }
    //has its own method called eats
    eats(eat: string[]) {
        return this.eat = eat;
    }
}

//creates a class Dog which also extends from Animal
class Dog extends Animal {
    bites: boolean;
    constructor(name: string) {
        super(name);
    }
    bite(bites: boolean) {
        this.bites = bites;
    }
}

//creates a new instance of class Tiger
const king = new Tiger("king");

//called the methods from extended class and its own as well
king.eats(["deer", "lion", "horse", "zebra"]);
king.move(34);
king.makeSound('roar');

//logged the king object to console
console.log(king);

//created a new instance of class Dog
const dogy = new Dog("dogy");

//called its own methods and inherited methods as well
dogy.bite(true);
dogy.move(12);
dogy.makeSound("bark bark bark");

//logged the dogy object to console
console.log(dogy);
