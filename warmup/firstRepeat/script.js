var find = function(str) {
  for(var x = 1; x < str.length; x++) {
    if(str[x] != str[x-1]) {
      return str[x];
    }
  }
  return "not found!";
};
console.log(find("ggggggggxkljfvlsjkfg"));
