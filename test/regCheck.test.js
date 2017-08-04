const regCheck =require("../regCheck.js");
const assert = require('assert');

describe("regCheck" ,function(){
it("should return 'true' when given 'results'", function(){
assert.equal(regCheck("GP123","GP"),true);
});
});
