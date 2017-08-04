const fromWhere =require("../fromWhere.js");
const assert = require('assert');

describe("fromWhere" ,function(){
it("should return 'Cape Town' when given 'CA 222'", function(){
assert.equal(fromWhere("CA 222"),"Cape Town");
});
});
