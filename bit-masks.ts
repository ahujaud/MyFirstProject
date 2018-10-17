enum AccountType {
    UKBAP = 1,
    // tslint:disable-next-line:no-bitwise
    MORTGAGE = 1 << 1,
    // tslint:disable-next-line:no-bitwise
    CARDS = 1 << 2,
    // tslint:disable-next-line:no-bitwise
    GCP = 1 << 3,
    // tslint:disable-next-line:no-bitwise
    SOLD = 1 << 4,
    // tslint:disable-next-line:no-bitwise
    MCP = 1 << 5,
    // tslint:disable-next-line:no-bitwise
    SOLDP = 1 << 6,
    // tslint:disable-next-line:no-bitwise
    SOLDB = 1 << 7,
}

enum AccountTypeMask {
    // tslint:disable-next-line:no-bitwise
    PERSONAL = AccountType.UKBAP | AccountType.CARDS | AccountType.MORTGAGE | AccountType.SOLDP,
    // tslint:disable-next-line:no-bitwise
    BUSINESS = AccountType.GCP | AccountType.UKBAP | AccountType.SOLDB,
    COMMERCIAL = AccountType.GCP,
}

let AccountTypes: string[] = [
    "UKBAP",
    "MORTGAGE",
    "GCP",
    "MCP",
    "SOLDP",
    "SOLDB",
    "SOLD",
    "CARDS",
];

let result = 0;
// tslint:disable-next-line:no-bitwise
AccountTypes.forEach((account: string) => result |= AccountType[account]);

// tslint:disable-next-line:no-bitwise
let isPersonal = AccountTypeMask.PERSONAL & result;
// tslint:disable-next-line:no-bitwise
let isCommercial = AccountTypeMask.COMMERCIAL & result;
// tslint:disable-next-line:no-bitwise
let isBusiness = AccountTypeMask.BUSINESS & result;

// tslint:disable-next-line:no-bitwise
console.log(((isPersonal & ~isCommercial) | (~isPersonal & isBusiness)));
console.log(result);
console.log(isPersonal);
console.log(isCommercial);

console.log(isBusiness);
