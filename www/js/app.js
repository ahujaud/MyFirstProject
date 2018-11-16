"use strict";
var AccountType;
(function (AccountType) {
    AccountType[AccountType["UKBAP"] = 1] = "UKBAP";
    AccountType[AccountType["MORTGAGE"] = 2] = "MORTGAGE";
    AccountType[AccountType["CARDS"] = 4] = "CARDS";
    AccountType[AccountType["GCP"] = 8] = "GCP";
    AccountType[AccountType["SOLD"] = 16] = "SOLD";
    AccountType[AccountType["MCP"] = 32] = "MCP";
    AccountType[AccountType["SOLDP"] = 64] = "SOLDP";
    AccountType[AccountType["SOLDB"] = 128] = "SOLDB";
})(AccountType || (AccountType = {}));
var AccountTypeMask;
(function (AccountTypeMask) {
    AccountTypeMask[AccountTypeMask["PERSONAL"] = 71] = "PERSONAL";
    AccountTypeMask[AccountTypeMask["BUSINESS"] = 137] = "BUSINESS";
    AccountTypeMask[AccountTypeMask["COMMERCIAL"] = 8] = "COMMERCIAL";
})(AccountTypeMask || (AccountTypeMask = {}));
var AccountTypes = [
    "UKBAP",
    "MORTGAGE",
    "GCP",
    "MCP",
    "SOLDP",
    "SOLDB",
    "SOLD",
    "CARDS",
];
var result = 0;
var isPersonal = AccountTypeMask.PERSONAL & result;
var isCommercial = AccountTypeMask.COMMERCIAL & result;
var isBusiness = AccountTypeMask.BUSINESS & result;
console.log(((isPersonal & ~isCommercial) | (~isPersonal & isBusiness)));
console.log(result);
console.log(isPersonal);
console.log(isCommercial);
console.log(isBusiness);

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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./date.extension");
console.log("output is here:" + new Date().getTimeString());

"use strict";
Date.prototype.getTimeString = function () {
    return this.getTime().toString();
};

"use strict";
var doubleSol = function (value) { return value * 2; };
console.log(doubleSol(10));
var greetSol = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
};
greetSol();
greetSol("Anna");
var numbersSol = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersSol));
var newArraySol = [55, 20];
newArraySol.push.apply(newArraySol, numbersSol);
console.log(newArraySol);
var testResultsSol = [3.89, 2.99, 1.38];
var result1Sol = testResultsSol[0], result2Sol = testResultsSol[1], result3Sol = testResultsSol[2];
console.log(result1Sol, result2Sol, result3Sol);
var scientistSol = { firstName: "Will", experience: 12 };
var FirstName = scientistSol.firstName, Experience = scientistSol.experience;
console.log(FirstName, Experience);

"use strict";
var str = "My Name is Uday Ahuja";
var num = 12.45;
var bool = true;
var arr = ["first", "second", "third"];
var arrTupe = ["Uday", 23];
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 100] = "Red";
    Color[Color["White"] = 101] = "White";
})(Color || (Color = {}));
console.log(Color.Green);
var myColor = Color.Blue;
var myObj = "new type";
myObj = 45;
myObj = {
    type: "localStorage",
    allowed: false,
};
var myFun;
myFun = function (x, y) {
    console.log("this is function argument" + x + y);
};
myFun("uday", 23);
var myNewFun = myFun;
console.log(myNewFun);
console.log(myNewFun("new Type", 23));
var Obj = {
    name: "uday",
    age: 23,
};
Obj = {
    age: 25,
    name: "anurag",
};
var union;
union = 45.36;
union = "Uday";
console.log(typeof myFun);
if (typeof str === "string") {
    str = "hkhk";
}

"use strict";
var bankAccountExcer = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
};
var myselfExcer = {
    name: "Max",
    bankAccount: bankAccountExcer,
    hobbies: ["Sports", "Cooking"],
};
myselfExcer.bankAccount.deposit(3000);
console.log(myselfExcer);
