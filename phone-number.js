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
    if ((typeof number) === "number") {
      var  num1 = number.toString();
        var len = num1.length;
        if ((len < 10) || ((len > 11) && (num1.substr(0,1) != "1"))) {
            return "this is a bad number";
        } else if (len == 10) {
            return  "this i a good number";
        } else if (len == 11) {
           var num2 = num1.substr(1,len);
            return  num2;
        }else if (len > 11){
            return  "this is a bad number" ;
        }
    } 
};

Phone.prototype.number = function() {
  return this.cleanedNumber;
};
