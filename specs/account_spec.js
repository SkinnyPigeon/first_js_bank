var Account = require( '../account')

var assert = require( 'chai').assert

describe( "The Accounts: ", function() {
  beforeEach( function() {
    jeff = new Account( "Jeff", 50, "personal")
    steve = new Account( "Steve", 50, "business")
  })

  it( "Should have a name", function() {
    assert.equal( "Jeff", jeff.name )
  })

  it( "Should have some cash", function() {
    assert.equal( 50, jeff.cash )
  })

  it( "Should have a type", function() {
    assert.equal( "personal", jeff.type )
  })
})