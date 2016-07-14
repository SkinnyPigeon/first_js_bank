var _ = require( 'lodash' )

var Ftse = function( name ) {
  this.name = name;
  this.companies = [];
}

Ftse.prototype = {
  hord: function( company ) {
    this.companies.push( company );
  },
  rank: function() {
    var ranking = "Nowt";
    _.sortBy( this.companies, ['totesCash']) 
    ranking = _.last( this.companies )
    return ranking 
  },


}

module.exports = Ftse;