const isFromBellville =require("../isFromBellville.js");
const assert = require('assert');

describe("isFromBellville" ,function(){
it("should return 'true' when given 'Registration'", function(){
assert.equal(isFromBellville('CY123456789'),true);
});
});
