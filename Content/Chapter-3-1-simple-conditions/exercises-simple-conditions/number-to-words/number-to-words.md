# Problem: * Numbers from 0 to 100 as English Words

Write a program that converts a number in the range of [**0 ... 100**] into text (in English).

## Sample Input and Output

| Input | Output |
| --- | ---- |
| 25 | twenty five |
| 42 | forty two |
| 6  | six |

## Hints and Guidelines

First check for **one-digit numbers** and if the number is one-digit, print the appropriate word for it. Then check for **two-digit numbers**. Print them in two parts: left part (**tens** = number / 10) and right part (**units** = number % 10). If the number has 3 digits, it must be 100 and can be considered a special case.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/506#15](https://judge.softuni.org/Contests/Practice/Index/506#15).
