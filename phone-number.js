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
    var pho = number.replace(/\D/g, '');

    if (pho.length === 10) {
        return pho;
    } else if (pho.length === 11 && num[0] === '1') {
        return pho.substr(1, pho.length);
    } else {
        return '0000000000';
    }
};

Phone.prototype.number = function() {
    return this.cleanedNumber;
};
<<<<<<< HEAD

Phone.prototype.areaCode = function() {
    return this.number().substr(0, 3);
};

Phone.prototype.exchangeCode = function() {
    return this.number().substr(3, 3);
};

Phone.prototype.subscriberNumber = function() {
    return this.number().substr(6, 4);
};

Phone.prototype.toString = function() {
    return '(' + this.areaCode() + ') ' + this.exchangeCode() + '-' + this.subscriberNumber();

};
=======
>>>>>>> f74ff3137f32cf43d9bc966071d9c7975ca9257e
