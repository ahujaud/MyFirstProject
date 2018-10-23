// tslint:disable-next-line:interface-name
interface Date {
    getTimeString(): string;
}

// tslint:disable-next-line:only-arrow-functions
Date.prototype.getTimeString = function(): string {
 return this.getTime().toString();
};
