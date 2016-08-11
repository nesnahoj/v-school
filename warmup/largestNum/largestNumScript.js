var largestNum = [1, 2, 5, 4, 100, 59, 4, 3, -1]; 
var largest=arr[0];  
for (i=0; i<=largest;i++) {
    if (largestNum[i]>largest) {
      var largest=largestNum[i];
    }
}
console.log(largest);
