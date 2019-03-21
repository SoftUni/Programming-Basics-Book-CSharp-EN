# Problem: Element Equal to the Sum of the Rest

Write a program that inputs **n integers** and checks whether among them there is a number equal to the sum of all the rest. If there is such an element, print **"Yes" + its value**, otherwise – **"No" + the difference between the largest element and the sum of the rest** (by absolute value). 

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | :---: |
| 7<br>3<br>4<br>1<br>1<br>2<br>12<br>1 | Yes<br>Sum = 12 | 3 + 4 + 1 + 2 + 1 + 1 = 12 |
| 4<br>6<br>1<br>2<br>3 | Yes<br>Sum = 6 | 1 + 2 + 3 = 6 |
| 3<br>1<br>1<br>10 | No<br>Diff = 8 | 10 - (1 + 1) = 8 |
| 3<br>5<br>5<br>1 | No<br>Diff = 1 | 5 - (5 + 1) = 1 |
| 3<br>1<br>1<br>1 | No<br>Diff = 1 | 1 - (1 + 1) = 1 |

## Hints and Guidelines

We must calculate the **sum** of all elements, find the **largest** of them and check the condition.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/510#9](https://judge.softuni.org/Contests/Practice/Index/510#9).
