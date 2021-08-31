# Problem: Digits

Write a program that reads from the console 1 integer within the range [**100 … 999**], and then prints it a predefined number of times — modifying it before each print, as follows:
- If the number is divisible by **5** without remainder, **subtract** from it **its first digit**.
- If the number is divisible by **3** without remainder, **subtract** from it **its second digit**
- If none of the conditions above is true, **add** to it **its third digit**.

Print on the console **N lines**, each containing **M numbers** that are the result of the actions above, where:
- N = sum of the first and second digit of the number.
- M = sum of the first and third digit of the number.

## Input

The input is read from the **console** and is an integer within the range  [**100 … 999**].

## Output

Print on the console **all integers** that are the result of the above-mentioned calculations in the respective number of rows and columns as in the examples. 

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|132|129 126 123<br>120 119 121<br>123 120 119<br>121 123 120|(1 + 3) = 4 and (1 + 2) = 3 &rarr; 4 lines with 3 numbers on each<br>Input number 132 <br>132 &rarr; division by 3 &rarr; 132 - 3 =<br>= 129 &rarr; division by 3 &rarr; 129 - 3 = <br>= 126 &rarr; division by 3 &rarr; 126 - 3 = <br>= 123 &rarr; division by 3 &rarr; 123 - 3 = <br>= 120 &rarr; division by 5 &rarr; 120 - 1 = <br>..... 121 &rarr; neither by 5, nor by 3 &rarr; 121 + 2 = 123|

| Input | Output | Comments |
| --- | --- | --- |
|376|382 388 394 400 397 403 409 415 412<br>418 424 430 427 433 439 445 442 448<br>454 460 457 463 469 475 472 478 484<br>490 487 493 499 505 502 508 514 520<br>517 523 529 535 532 538 544 550 547<br>553 559 565 562 568 574 580 577 583<br>589 595 592 598 604 610 607 613 619<br>625 622 628 634 640 637 643 649 655<br>652 658 664 670 667 673 679 685 682<br>688 694 700 697 703 709 715 712 718|10 lines with 9 numbers on each<br>Input number 376 &rarr; neither 5, nor 3 &rarr; 376 + 6 &rarr; =<br>= 382 &rarr; neither by 5, nor by 3 &rarr; 382 + 6 =<br>= 388 + 6 = 394 + 6 =<br>400 &rarr; division by 5 &rarr; 400 - 3 = 397|

## Hints and Guidelines
Solve the problem **on your own**, using what you have learned from the previous ones. Remember that you have to define a **separate** variable for each digit of the input number.

## Test in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/515#4](https://judge.softuni.org/Contests/Practice/Index/515#4).
