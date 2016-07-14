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
    foundAccount = "Nowt"
    this.accounts.forEach( function( account ) { 
      if( account.name === customer ){
          foundAccount = account
      }
    } )
    return foundAccount
  }
}




module.exports = Bank;