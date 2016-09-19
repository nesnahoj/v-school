// var string = "somedingblattedDarnscrewedupphraseincludingcode";
// var phrase = "code";
//
// var possStr = function() {
// for(var i = 0; i < string.length; i++) {
//   var possPhr = string.substring(i, phrase.length + i);
//   var pattern = /co.?e/;
//   if(pattern.test(string)) {
//       return("Word found: '" + phrase + "'.");
//   }
//   }
//
// };
// possStr(phrase);

// var string = "somedingblattedsnickleftzDarnscrewedupphraseincludingcode";
var phrase = "snicklefritz";

var possStr = function(string) {
for(var i = 0; i < string.length; i++) {
  var possPhr = string.substring(i, phrase.length + i);
  var pattern = /snicklefr.?tz/;
  if(pattern.test(string)) {
      return("Word found: '" + phrase + "'.");
    }
  }
      return("Undefined");
};
// possStr(phrase);
