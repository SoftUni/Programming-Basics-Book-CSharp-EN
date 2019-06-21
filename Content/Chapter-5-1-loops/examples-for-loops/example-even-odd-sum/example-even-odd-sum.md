# Problem: Even / Odd Sum

Write a program that inputs **n integers** and checks whether **the sum of the numbers on even positions** is equal to **the sum of the numbers on odd positions**. In case the sums are equal, print **"Yes" + the sum**, otherwise, print **"No" + the difference**. The difference is calculated by absolute value. The format of the output must be identical to the examples below.

## Sample Input and Output

| Input | Output |
| --- | --- |
| 4<br>10<br>50<br>60<br>20 | Yes<br>Sum = 70 |
| 4<br>3<br>5<br>1<br>-2 | No<br>Diff = 1 |
| 3<br>5<br>8<br>1 | No<br>Diff = 2 |

## Video: Even / Odd Sum

Watch this video to learn how to sum the element at even and odd positions and how to calculate their equality or difference: https://youtu.be/79QsS7FI2qg.

## Hints and Guidelines

We input the numbers one by one and calculate the two **sums** (of the numbers on **even** positions and the numbers on **odd** positions). Identically to the previous problem, we calculate the absolute value of the difference and print the result (**"Yes" + the sum** in case of difference of 0 or **"No" + the difference** in any other case).

![](/assets/chapter-5-images/08.Odd-even-sum-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/510#7](https://judge.softuni.org/Contests/Practice/Index/510#7).
