const assert = require('assert').strict;
const { Sample, server } = require('./index');

describe('Sample test', function() {
  it('should return localhost', function() {
    assert.equal(Sample("localhost").url, "localhost");
  });

  after(function() {
    server.close();
  });
});
