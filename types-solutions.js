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
