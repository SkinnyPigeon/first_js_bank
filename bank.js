var Bank = function( name ) {
  this.name = name;
  this.accounts = [];
  this.total = 0;
}

Bank.prototype = {
  newCustomer: function( customer ) {
    this.accounts.push( customer )
  }
}




module.exports = Bank;