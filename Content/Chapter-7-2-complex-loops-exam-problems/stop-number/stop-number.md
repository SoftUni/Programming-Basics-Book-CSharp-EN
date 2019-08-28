# Problem: Stop Number

Write a program that prints on the console all numbers from **N** to **M**, that are **divisible by 2** and **3 without reminder**, in **reversed order**. We will read one more "stop" number from the console – **S**. If any of the numbers divisible by 2 and 3 **is equal to the stop number, it should not be printed**, and the program should end. **Otherwise print all numbers up to N**, that meet the condition.

## Input Data

Read from the console 3 numbers, each on a single line:
* **N** – integer number: **0 &le; N &lt; M**.
* **M** – integer number: **N &lt; M &le; 10000**.
* **S** – integer number: **N &le; S &le; M**.

## Output Data

Print on the console on a single line all numbers, that meet the condition, separated by space. 

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|1<br>30<br>15|30 24 18 12 6|Numbers from 30 to 1, that are divisible at the same time by 2 and 3 without reminder are: 30, 24, 18, 12 and 6. The number 15 **is not equal** to any, so the sequence **continues**.|

| Input | Output | Comments |
| --- | --- | --- |
|1<br>36<br>12|36 30 24 18|Numbers from 36 to 1, that are divisible at the same time by 2 and 3 without reminder are: 36, 30, 24, 18, 12 and 6. The number 12 **is equal** to the stop number, so **we stop by 18**.|

| Input | Output |
| --- | --- |
|20<br>1000<br>36|996 990 984 978 972 966 960 954 948 942 936 930 924 918 912 906 900 894 888 882 876 870 864 858 852 846 840 834 828 822 816 810 804 798 792 786 780 774 768 762 756 750 744 738 732 726 720 714 708 702 696 690 684 678 672 666 660 654 648 642 636 630 624 618 612 606 600 594 588 582 576 570 564 558 552 546 540 534 528 522 516 510 504 498 492 486 480 474 468 462 456 450 444 438 432 426 420 414 408 402 396 390 384 378 372 366 360 354 348 342 336 330 324 318 312 306 300 294 288 282 276 270 264 258 252 246 240 234 228 222 216 210 204 198 192 186 180 174 168 162 156 150 144 138 132 126 120 114 108 102 96 90 84 78 72 66 60 54 48 42|

## Hints and Guidelines

The problem can be divided into **four** logical parts:
* **Reading** the input.
* **Checking** all numbers in the given range, and then running a **loop**.
* **Checking** the conditions of the problem according to every number in the given range.
* **Printing** the numbers.

**First** part is ordinary – we read **three** integer numbers from the console, so we will use **`int`**.

We have already seen examples of the **second** part – initialization of the **`for`** loop. It is a bit **tricky** – the explanation mentions that the numbers have to be printed in **reversed order**. This means that the **initial** value of the variable **`i`** will be **bigger**, and from the examples we can see that it is **M**. Thus, the **final** value of **`i`** should be **N**. The fact that we will print the results in reversed order and the values of **`i`**, suggests that the step would be **decreased by 1**.

![](/assets/chapter-7-exam-preparation-images/04.stop-number-1.png)

After we have initialized the **`for`** loop, it is time for the **third** part of the problem – **checking** the condition if the given **number is divisible both by 2 and 3 without reminder**. We will do this using one simple **`if`** condition that we will leave to the reader to do by themselves.

Another **tricky** part of this problem is that apart from the above check we need to do **another** one – whether the **number is equal to the "stop" number** entered from the console on the third line. To do this check, the previous one has to be passed. For this reason, we will add another **`if`** statement that we will **nest in the previous one**. If the condition is **true**, we need to stop the program from printing. We can do this using a **`break`** operator, and it will lead us **out** of the **`for`** loop.
 
If the **condition** that checks whether the number is equal with "stop" number returns a **`false`** result, our program should **continue to print**. This covers the **fourth and last** part of our program.

## Testing in the Judge System

Test your solution here:  [https://judge.softuni.org/Contests/Practice/Index/515#2](https://judge.softuni.org/Contests/Practice/Index/515#2).
