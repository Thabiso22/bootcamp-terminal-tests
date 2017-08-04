const countAllPaarl =require("../countAllPaarl.js");
const assert = require('assert');


describe("countAllPaarl" ,function(){
it("should return '2' when given 'CJ 987-9876,CA 409-5439,CJ 932-6306'", function(){
assert.equal(countAllPaarl("CJ 987-9876,CA 409-5439,CJ 932-6306"),2);
});
});
