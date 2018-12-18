#### Transform Combinations

Having all the 5-digit combinations, we have to find a way to "convert" the five digits into a word with the letters from '**a**' to '**e**'. One way to do this is to **redefine a simple string containing the letters** we have

![](/assets/chapter-9-images/03.Five-special-letters-03.png)

and **for each digit we take the letter from the specific position**. In this way the number **00000** will become **"aaaaa"**, the number **02423** will become **"acecd"**. We can make a string of 5 letters in the following way.

![](/assets/chapter-9-images/03.Five-special-letters-04.png)

***Another way***: we can convert digits to letters using their layout in **the ASCII table**. The expression **`'а' + i`** will give us the result **`'a'`** at **`i = 0`**, **`'b'`** at **`i = 1`**, **`'c'`** at  **`i = 2`**, etc.

So we have already generated all 5-letters combinations and we can continue with the next part of the problem.

***Caution***: since we have selected **`pattern`** matching the alphabetical order of the letters and the loops to rotate appropriately, the algorithm will generate the words in alphabetical order and there is no need for additional sorting before the output.
