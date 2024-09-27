# Problem: Stop Number

Write a program that prints on the console all numbers from **N** to **M**, that are **divisible by 2** and **3 without remainder**, in **reversed order**. We will read from the console one additional "stop" number – **S**. If any of the numbers divisible by 2 and 3 **is equal to the stop number, it should not be printed** and the program should end. **Otherwise print all numbers up to N** that meet the condition.

## Input

Read from the console 3 numbers, each on a single line:
* **N** – integer number: **0 &le; N &lt; M**.
* **M** – integer number: **N &lt; M &le; 10000**.
* **S** – integer number: **N &le; S &le; M**.

## Output

Print on the console, on a single line, all numbers that meet the condition, separated by space. 

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|1<br>30<br>15|30 24 18 12 6|The numbers from 30 to 1 that are divisible by both 2 and 3 without remainder are: 30, 24, 18, 12 and 6. The number 15 **is not equal** to any of them, so the sequence **continues**.|

| Input | Output | Comments |
| --- | --- | --- |
|1<br>36<br>12|36 30 24 18|The numbers from 36 to 1, that are divisible by both 2 and 3 without remainder are: 36, 30, 24, 18, 12 and 6. The number 12 **is equal** to the stop number, so **we stop at 18**.|

| Input | Output |
| --- | --- |
|20<br>1000<br>36|996 990 984 978 972 966 960 954 948 942 936 930 924 918 912 906 900 894 888 882 876 870 864 858 852 846 840 834 828 822 816 810 804 798 792 786 780 774 768 762 756 750 744 738 732 726 720 714 708 702 696 690 684 678 672 666 660 654 648 642 636 630 624 618 612 606 600 594 588 582 576 570 564 558 552 546 540 534 528 522 516 510 504 498 492 486 480 474 468 462 456 450 444 438 432 426 420 414 408 402 396 390 384 378 372 366 360 354 348 342 336 330 324 318 312 306 300 294 288 282 276 270 264 258 252 246 240 234 228 222 216 210 204 198 192 186 180 174 168 162 156 150 144 138 132 126 120 114 108 102 96 90 84 78 72 66 60 54 48 42|

## Hints and Guidelines

The problem can be divided into **four** logical parts:
* **Read** the input.
* **Check** all numbers in the given range by running a **loop**.
* **Check** if each of the numbers within the given range meets the required conditions.
* **Print** the numbers.

**The first** part is easy – we read **three** integer numbers from the console, so we use **`int`**.

We are also familiar with the **second** part – the initialization of a **`for`** loop. There is a little **catch** here – the problem requires us to print the numbers in **reversed order**. This means that the **initial** value of the variable **`i`** will be the **greater** number, and from the examples we can see that this is **M**. Thus, the **final** value of **`i`** should be **N**. The fact that we will print the results in reversed order and the values of **`i`** suggests that the step will **decrease i by 1**.

![](/assets/chapter-7-exam-preparation-images/04.stop-number-1.png)

After we have initialized the **`for`** loop, it is time for the **third** part of the problem – to **check** the condition if the given **number is divisible by both 2 and 3 without remainder**. We will do this by using one simple **`if`** condition that we will let the reader construct themselves.

The other **tricky** part in this problem is that, apart from the check above, we need an **additional** one – whether the **number is equal to the "stop" number** entered from the console on the third line. To reach this check, the number we're checking has to pass the check above. That's why we add another **`if`** statement **nested in the previous one**. If the condition is **true**, we have to stop printing. We can achieve this with the **`break`** operator which will lead us **out** of the **`for`** loop.
 
Accordingly, if the **condition** that checks whether the number is equal to the "stop" number returns **`false`**, our program should **continue printing**. This covers the **fourth and last** part of our program.

## Test in the Judge System

Test your solution here:  [https://judge.softuni.org/Contests/Practice/Index/515#2](https://judge.softuni.org/Contests/Practice/Index/515#2).
