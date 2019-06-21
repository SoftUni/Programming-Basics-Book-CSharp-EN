# Problem: Rhombus Made of Stars

Write a program that takes a positive integer **n** and prints **a rhombus made of stars** with size **n**.

|Input|Output|Input|Output|
|---|---|---|---|
|1|<code>\*</code>|2|<code>&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;</code><br>|

|Input|Output|Input|Output|
|---|---|---|---|
|3|<code>&nbsp;&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;\*&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;&nbsp;</code>|4|<code>&nbsp;&nbsp;&nbsp;\*&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;\*&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*&nbsp;\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;\*&nbsp;\*&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;\*&nbsp;&nbsp;&nbsp;</code>|

## Video: Rhombus of Stars

Watch this video lesson to learn how to print a rhombus of stars on the console using nested loops: https://youtu.be/BaSgBU6yLU8.

## Hints and Guidelines

To solve this problem, we need to mentally **divide** **the rhombus** into **two parts** – **upper** one, which **also** includes the middle row, and **lower** one. For **the printing** of each part we will use **two** separate loops, as we leave the reader to decide the dependency between **`n`** and the variables of the loops. For the first loop we can use the following guidelines:

* We print **`n-row`** white spaces.
* We print **`*`**.
* We print **`row-1`** times **`*`**.

**The second** (lower) part will be printed **similarly**, which again we leave to the reader to do.

![](/assets/chapter-6-images/06.Rhombus-of-stars-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/512#5](https://judge.softuni.org/Contests/Practice/Index/512#5).
