# Problem: Sums with Step of 3

The next sample exam problem is about calculating 3 sums, holding the numbers from given sequence, staying at certain positions with step 3.

## Video: Sums with Step of 3

Watch the video lesson about solving the "Sums with Step of 3" problem: https://youtu.be/bRHFuNNBmZc.

## Problem Description

We are given **n** integers: **a1, a2, …, an**. Calculate the sums:
 - **sum1 = a1 + a4 + a7** + … (the numbers are summed, starting from the first one with step of 3).
 - **sum2 = a2 + a5 + a8** + … (the numbers are summed, starting from the second one with step of 3).
 - **sum3 = a3 + a6 + a9** + … (the numbers are summed, starting from the third one with step of 3).

## Input

The input data is read from the console. The first line holds an integer **n (0 ≤ n ≤ 1000)**. On the next **n** lines we are given **n** integers in the range [**-1000 … 1000**]: **a1, a2, …, an**.

## Output

On the console we should print 3 lines containing the 3 sums in a format such as in the example.

## Sample Input and Output

| Input | Output | Input | Output | Input | Output |
| --- | --- | --- | --- | --- | --- |
|2<br>3<br>5<br>|sum1 = 3<br>sum2 = 5<br>sum3 = 0|4<br>7<br>-2<br>6<br>12|sum1 = 19<br>sum2 = -2<br>sum3 = 6|5<br>3<br>5<br>2<br>7<br>8|sum1 = 10<br>sum2 = 13<br>sum3 = 2| 

## Reading the Input Data

We will take **the count of numbers** from the console and declare **starting values** of the three sums.

![](/assets/chapter-8-1-images/07.Sums-Step-3-01.png)

Since we do not know in advance how many numbers we will process, we will take them one at a time in **a loop** which will be repeated **n times** and we will process them in the body of the loop.

![](/assets/chapter-8-1-images/07.Sums-Step-3-02.png)

## Allocating Numbers and Printing Results

To find out in which of **the three sums** we need to add the number, we will divide its **sequence number into three** and we will use the remainder. We will use the variable **`i`**, which tracks **the number of runs** of the loop, in order to find out which sequence number we are at. When the remainder of **`i/3`** is **zero**, it means we will add this number to **the first** sum, when it is **1** to the **second** one, and when it is **2** to **the third** one.

![](/assets/chapter-8-1-images/07.Sums-Step-3-03.png)

Finally, we will print the result on the console in the required **format**.

![](/assets/chapter-8-1-images/07.Sums-Step-3-04.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/516#6](https://judge.softuni.org/Contests/Practice/Index/516#6).
