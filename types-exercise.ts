// Excercise from udemy typescript for types

// tslint:disable-next-line:interface-over-type-literal
type BankAccount = {
    money: number;
    deposit: (value: number) => void;
};

let bankAccount: BankAccount = {
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

let myself: Person = {
    name: "Max",
    bankAccount,
    hobbies: ["Sports", "Cooking"],
};

myself.bankAccount.deposit(3000);

console.log(myself);
