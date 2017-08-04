 //var assert = require('assert');
var isFromBellville=function isFromBellville(Bellville) {
  registrationPlate = Bellville.startsWith('CY');
  return registrationPlate;
}
console.log(isFromBellville('CY123456789'));
//assert.equal(isFromBellville('CY123456789'),true);
module.exports=isFromBellville;
