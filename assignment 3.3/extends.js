var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        return this.distance = distance;
    };
    Animal.prototype.makeSound = function (sound) {
        return this.sound = sound;
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.eats = function (eat) {
        return this.eat = eat;
    };
    return Tiger;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bite = function (bites) {
        this.bites = bites;
    };
    return Dog;
}(Animal));
var king = new Tiger("king");
king.eats(["deer", "lion", "horse", "zebra"]);
king.move(34);
king.makeSound('roar');
console.log(king);
var dogy = new Dog("dogy");
dogy.bite(true);
dogy.move(12);
dogy.makeSound("bark bark bark");
console.log(dogy);
//# sourceMappingURL=extends.js.map