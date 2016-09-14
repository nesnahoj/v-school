var fixTeen = function(n) {
  if(n == 13 || n == 14 || n == 17 || n == 18 || n == 19){
    n = 0;
  }
  return n;
}
var noTeenSum = function(x, y, z) {
  return fixTeen(x) + fixTeen(y) + fixTeen(z);
};
