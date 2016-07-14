var Account = require( '../account')
var Bank = require( '../bank')
var Ftse = require( '../ftse')

var assert = require( 'chai').assert

describe( "The Man: ", function() {
  beforeEach( function() {
    jeff = new Account( "Jeff", 50, "personal");
    steve = new Account( "Steve", 100, "business");
    bob = new Account( "Bob", 500, "business");
    dave = new Account( "Dave", 50, "personal");

    fatCatInc = new Bank("Fat Cat Inc");
    fatCatsInc.newCustomer( jeff );
    fatCatsInc.newCustomer( steve );
    fatCatsInc.totesCash();

    greedCorp = new Bank("Greed Corp");
    greedCorp.newCustomer( bob );
    greedCorp.newCustomer( dave );
    greedCorp.totesCash();

    ftse = new Ftse( "FTSE" );
    ftse.hord( fatCatInc );
    ftse.hord( greedCorp );
  })

  it( "Should have banks in them", function() {
    assert.equal( 2, ftse.companies.length )
  })

  it( "Should rank Greed Crop as top", function() {
    assert.equal( greedCorp, ftse.rank() )
  })

})