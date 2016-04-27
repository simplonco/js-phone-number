//
// This is only a SKELETON file for the "Phone Number" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Phone = module.exports = function Phone(number) {
    this.rawNumber = number;
    this.cleanedNumber = this.cleanNumber(number);
};

Phone.prototype.cleanNumber = function(number) {
        var num = number.replace(/\D/g, '');
        if (num.length === 10) {
            return num;
        } else if (num.length === 11 && num[0] === '1') {
            return num.substr(1, num.length);
        } else {
            return console.log("bad number");
        }
};
Phone.prototype.number = function() {
    return this.cleanedNumber;
};
