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
  },

  totesCash: function() {
    this.total = 0;
    this.accounts.forEach( function( account ) {
      this.total += account.cash;
    }.bind( this ) );
  }
}




module.exports = Bank;










