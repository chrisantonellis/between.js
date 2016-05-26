
var assert = require('chai').assert;

require('../between.js');

describe('between(Number, Number, Number)', function() {

  it('should return true if input value is between low value and high value', function () {
    assert.equal(true, between(2, 1, 3));
  });

  it('should return false if input value is not between low value and high value', function () {
    assert.equal(false, between(1, 2, 3));
  });

  it('should return true if input value is between or equal to low value and high value if last argument (e) is true', function () {
    assert.equal(true, between(2, 2, 3, true));
  });

  it('should return false if input value is not between or equal to low value and high value if last argument (e) is true', function () {
    assert.equal(false, between(1, 2, 3, true));
  });
});

describe('Number.between(Number, Number)', function () {

  mynum = 2

  it('should return true if input value is between low value and high value', function () {
    assert.equal(true, mynum.between(1, 3));
  });

  it('should return false if input value is not between low value and high value', function () {
    assert.equal(false, mynum.between(2, 3));
  });

  it('should return true if input value is between or equal to low value and high value if last argument (e) is true', function () {
    assert.equal(true, mynum.between(2, 3, true));
  });

  it('should return false if input value is not between or equal to low value and high value if last argument (e) is true', function () {
    assert.equal(false, mynum.between(3, 4, true));
  });
});

describe('between(Date, Date, Date)', function () {

  it('should return true if input date is between low value date and high value date', function () {
    assert.equal(true, between( new Date(2001, 1, 1), new Date(2000, 1, 1), new Date(2002, 1, 1) ));
  });

  it('should return false if input date is not between low value date and high value date', function () {
    assert.equal(false, between( new Date(1999, 1, 1), new Date(2000, 1, 1), new Date(2002, 1, 1) ));
  });

  it('should return true if input date is between or equal to low value date and high value date if last argument (e) is true', function () {
    assert.equal(true, between( new Date(2001, 1, 1), new Date(2001, 1, 1), new Date(2002, 1, 1), true ));
  });

  it('should return false if input date is not between or equal to low value date and the high value date if the last argument (e) is true', function () {
    assert.equal(false, between( new Date(1999, 1, 1), new Date(2000, 1, 1), new Date(2002, 1, 1), true ));
  });
});

describe('Date.between(Date, Date)', function () {

  mydate = new Date(2001, 1, 1)

  it('should return true if input date is between low value date and high value date', function () {
    assert.equal(true, mydate.between( new Date(2000, 1, 1), new Date(2002, 1, 1) ));
  });

  it('should return false if input date is not between low value date and high value date', function () {
    assert.equal(false, mydate.between( new Date(2001, 1, 1), new Date(2002, 1, 1) ));
  });

  it('should return true if input date is between or equal to low value date and high value date if last argument (e) is true', function () {
    assert.equal(true, mydate.between( new Date(2000, 1, 1), new Date(2001, 1, 1), true ));
  });

  it('should return false if input date is not between or equal to low value date and the high value date if the last argument (e) is true', function () {
    assert.equal(false, mydate.between( new Date(2002, 1, 1), new Date(2003, 1, 1), true ));
  });
});
