const greet =require("../greet.js");
const assert = require('assert');
//console.log(greet);
describe("greet" ,function(){
it("should return 'helloJohn' when given 'John'", function(){
assert.equal(greet("John"), "helloJohn");
});
});
