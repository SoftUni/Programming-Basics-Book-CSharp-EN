# Problem: Time + 15 Minutes

Write a program that **inputs hours and minutes** of a 24-hour day and calculates what will be the time **after 15 minutes**. Print the result in **hh:mm** format. Hours are always between 0 and 23, and minutes are always between 0 and 59. Hours are written with one or two digits. Minutes are always written with two digits and zero at the front when needed.

## Sample Input and Output

| Input | Output |
| --- | ---- |
| 1<br>46 | 2:01 |
| 0<br>01 | 0:16 |
| 23<br>59 | 0:14 |
| 11<br>08 | 11:23 |
| 12<br>49 | 13:04 |

## Hints and Guidelines

Add 15 minutes and check using a few conditions. If minutes are over 59, **increase hours** with 1 and **reduce minutes** with 60. Identically, check the case when hours are over 23. When you print the minutes, you should **check for zero at the front**.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/506#13](https://judge.softuni.org/Contests/Practice/Index/506#13).
