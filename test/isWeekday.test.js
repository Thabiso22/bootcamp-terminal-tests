const isWeekday =require("../isWeekday.js");
const assert = require('assert');

describe("isWeekday" ,function(){
it("should return 'true' when given 'weekend'", function(){
assert.equal(isWeekday('Tuesday'), true);
});
});
