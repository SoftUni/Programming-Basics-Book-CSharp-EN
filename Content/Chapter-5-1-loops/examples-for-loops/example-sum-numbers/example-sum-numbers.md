# Problem: Summing up Numbers

Write a program that **inputs `n` integers and sums them up**.
 * The first line of the input holds the number of integers **`n`**.
 * Each of the following **`n`** lines holds an integer for summing.
 * Sum up the numbers and finally print the result.

## Sample Input and Output

| Input | Output |
| --- | --- |
| 2<br>10<br>20 | 30 |
| 3<br>-10<br>-20<br>-30 | -60 |
| 4<br>45<br>-20<br>7<br>11<br> | 43 |
| 1<br>999 | 999 | 
| 0 | 0 |

## Video: Summing Numbers

Watch this video to learn how to sum numbers in for-loop: https://youtu.be/t7PAichwl7k.

## Hints and Guidelines

We can solve the problem with summing up numbers in the following way:
- We read the input number **`n`**.
- We initially start with a sum **`sum = 0`**.
- We run a loop from 1 to **`n`**. On each step of the loop, we read the number **`num`** and add it to the sum **`sum`**.
- Finally, we print the calculated amount **`sum`**.

Below is the source code for the solution:

![](/assets/chapter-5-images/04.Sum-numbers-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/510#3](https://judge.softuni.org/Contests/Practice/Index/510#3).
