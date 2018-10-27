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
