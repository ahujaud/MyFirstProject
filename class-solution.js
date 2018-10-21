"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(name) {
        this.accelaration = 0;
        this.lastName = "";
        this._name = "";
        this.name = name;
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.accelaration = this.accelaration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.accelaration);
car.accelerate(10);
console.log(car.accelaration);
var BaseObject = (function () {
    function BaseObject() {
        this.width = 0;
        this.height = 0;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 5;
        _this.height = 5;
        return _this;
    }
    Rectangle.prototype.calSize = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
console.log(rectangle.calSize());
var PersonNew = (function () {
    function PersonNew() {
        this._firstName = "";
    }
    Object.defineProperty(PersonNew.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return PersonNew;
}());
var personObj = new PersonNew();
console.log(personObj.firstName);
personObj.firstName = "Uday";
console.log(personObj.firstName);
personObj.firstName = "Ahuja";
console.log(personObj.firstName);
