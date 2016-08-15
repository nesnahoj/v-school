var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  

var foreception = function(arr) {
  var holder=[];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  for(var i=0; i<arr.length; i++) {
      holder.push(arr[i]);
        for(var x=0; x<alphabet.length; x++) {
          holder.push(alphabet[x]);
    }
  }
        return holder;
};

foreception(people);