Fix Teen
16 MAY 2016 on Warmup
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13 to 19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a "teens" and should therefore still be added. Write a separate helper function "fixTeen(n)" that takes in an integer value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition").

noTeenSum(1, 2, 3) → 6
noTeenSum(2, 13, 1) → 3
noTeenSum(2, 1, 14) → 3
noTeenSum(2, 15, 14) → 17

Bob Ziroll


When my function was ran through all the test cases in Jasmine it initially failed because there were some quotes in the describe statement.  Once those were fixed it didn't have any errors in any of the 5 test cases.