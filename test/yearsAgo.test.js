const yearsAgo= require("../yearsAgo.js");
const assert=require("assert");
describe("yearsAgo" ,function(){
it("should return '-4' when given 'Results'", function(){
assert.equal(yearsAgo("2002 02 09","2006 05 06"),-4);
});
});
