class Car {
 public accelaration: number = 0;

 protected lastName: string = "";
 // tslint:disable-next-line:variable-name
 private _name: string = "";
 public get name(): string {
    return this._name;
 }
 public set name(value: string) {
    this._name = value;
 }
 constructor(name: string) {
     this.name = name;
 }
 public honk() {
    console.log("Toooooooooot!");
 }

 public accelerate(speed: number) {
    this.accelaration = this.accelaration + speed;
 }
}
let car = new Car("BMW");
car.honk();
console.log(car.accelaration);
car.accelerate(10);
console.log(car.accelaration);

// tslint:disable-next-line:max-classes-per-file
abstract class BaseObject {
 protected abstract width: number = 0;
 protected abstract height: number = 0;
}

// tslint:disable-next-line:max-classes-per-file
class Rectangle extends BaseObject {
    public width = 5;
    public height = 5;

    public calSize() {
        return this.width * this.height;
    }
}

let rectangle = new Rectangle();

console.log(rectangle.calSize());

// tslint:disable-next-line:max-classes-per-file
class PersonNew {
    // tslint:disable-next-line:variable-name
    private _firstName: string = "";

    set firstName(value: string) {
        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }
}
let personObj = new PersonNew();
console.log(personObj.firstName);
personObj.firstName = "Uday"; // here we are setting value with setter and we write using dot operator only.
console.log(personObj.firstName); // here we are accessing value using getter with dot operator.
personObj.firstName = "Ahuja";
console.log(personObj.firstName);
