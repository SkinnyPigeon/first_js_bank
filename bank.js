var _ = require( 'lodash' )

var Bank = function( name ) {
  this.name = name;
  this.accounts = [];
  this.total = 0;
}

Bank.prototype = {
  newCustomer: function( customer ) {
    this.accounts.push( customer )
  },

  search: function( customer ) { 
    var foundAccount = "Nowt";
    this.accounts.forEach( function( account ) { 
      if( account.name === customer ){
          foundAccount = account;
      }
    } )
    return foundAccount;
  },

  richList: function() {
    var cashMoneyBags = "Nowt";
    _.sortBy( this.accounts, ['cash']) 
      cashMoneyBags = _.last( this.accounts )
      return cashMoneyBags 
  }
  // _.sortBy(users, ['user', 'age']);
}




module.exports = Bank;