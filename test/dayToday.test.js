const dayToday =require("../dayToday.js");
const assert = require('assert');

describe("dayToday" ,function(){
it("should return '1' when given 'now.getDay()'", function(){
assert.equal(dayToday("2017 08 03"),5);
});
});
