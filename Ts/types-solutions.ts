// Excercise from udemy typescript for types

// tslint:disable-next-line:interface-over-type-literal
type BankAccount = {
    money: number;
    deposit: (value: number) => void;
};

let bankAccountExcer: BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    },
};

// tslint:disable-next-line:interface-over-type-literal
type Person = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[],
};

let myselfExcer: Person = {
    name: "Max",
    bankAccount: bankAccountExcer,
    hobbies: ["Sports", "Cooking"],
};

myselfExcer.bankAccount.deposit(3000);

console.log(myselfExcer);
