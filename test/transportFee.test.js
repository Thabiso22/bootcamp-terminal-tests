const transportFee  =require("../transportFee.js");
const assert = require('assert');

describe("transportFee" ,function(){
it("should return 'R20' when given 'morning", function(){
assert.equal(transportFee ("morning"),"R20");
});
});
