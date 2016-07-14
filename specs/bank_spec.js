var Bank = require( '../bank')
var Account = require( '../account')

var assert = require( 'chai').assert

describe( "The Bank: ", function() {
  beforeEach( function() {
    jeff = new Account( "Jeff", 50, "personal")
    steve = new Account( "Steve", 50, "business")
    fatCatsInc = new Bank( "Fat Cats Inc")
  })

  it( "Should have a suitable name", function() {
    assert.equal( "Fat Cats Inc", fatCatsInc.name )
  })

  it( "Should be begging for business", function() {
    assert.deepEqual( [], fatCatsInc.accounts )
  })

  it( "Should start as they end", function() {
    assert.equal( 0, fatCatsInc.total )
  })

  it( "Should be able to add a customer", function() {
    fatCatsInc.newCustomer( jeff );
    assert.equal( 1, fatCatsInc.accounts.length )
  })
})