var multiply = require('./multiply');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
  it('1 乘 1 应该等于 1', function() {

    console.log(`${multiply(1,2)}`)
    expect(multiply(1, 1)).to.be.equal(1);
  });
})


