# Problem: Sunglasses

Write a program that takes an integer **n** (3 ≤ n ≤ 100) and prints sunglasses with size of **5\*n x n** as found in the examples:

|Input|Output|Input|Output|
|---|---|---|---|
|3|<code>\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*</code><br><code>\*////\*&#124;&#124;&#124;\*////\*</code><br><code>\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*</code>|4|<code>\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*</code><br><code>\*//////\*&#124;&#124;&#124;&#124;\*//////\*</code><br><code>\*//////\*&nbsp;&nbsp;&nbsp;&nbsp;\*//////\*</code><br><code>\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*</code><br>|

|Input|Output|
|---|---|
|5|<code>\*\*\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*\*\*</code><br><code>\*////////\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*////////\*</code><br><code>\*////////\*&#124;&#124;&#124;&#124;&#124;\*////////\*</code><br><code>\*////////\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*////////\*</code><br><code>\*\*\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*\*\*</code><br>|

## Video: Sunglasses

Watch this video lesson to learn how to print sunglasses on the console using nested loops: https://youtu.be/MTQhIdgno4k.

## Hints and Guidelines

From the examples we can see that the sunglasses can be divided into **three parts** – upper, middle and lower one. A part of the code with which the problem can be solved is given below.

### Printing the Top and Bottom Rows

When drawing the upper and lower rows we need to print **`2 * n`** stars, **`n`** white spaces and **`2 * n`** stars.

![](/assets/chapter-6-images/08.Sunglasses-01.png)

### Printing the Middle Rows

When drawing **the middle** part, we need to **check** if the row is **`(n-1) / 2 - 1`**, because in the examples we can see that in **this row** we need to print **pipes** instead of white spaces.

![](/assets/chapter-6-images/08.Sunglasses-02.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/512#7](https://judge.softuni.org/Contests/Practice/Index/512#7).
