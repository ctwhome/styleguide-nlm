'use strict';

describe('Service: DBURL', function () {

  // load the service's module
  beforeEach(module('stocksApp'));

  // instantiate service
  var DBURL;
  beforeEach(inject(function (_DBURL_) {
    DBURL = _DBURL_;
  }));

  it('should do something', function () {
    expect(!!DBURL).toBe(true);
  });

});
