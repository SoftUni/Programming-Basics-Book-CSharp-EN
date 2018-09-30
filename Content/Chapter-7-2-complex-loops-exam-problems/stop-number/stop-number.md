## Problem: Stop Number

Write a program that prints on the console all numbers from **N** to **M**, that are **divisible by 2** and **3 without reminder **, in **reversed order**. We will read one more "stop" number from the console - **S**. If any of the divisible by 2 and 3 numbers **is equal to the stop number, it should not be printed** and the program should end.**Otherwise print all numbers to N**, that meets the condition.

### Input Data

Read from the console 3 numbers, each on a single line:
* **N** - integer number: **0 &le; N &lt; M**.
* **M** - integer number: **N &lt; M &le; 10000**.
* **S** - integer number: **N &le; S &le; M**.


### Output Data

Print on the console on a single line all numbers, that meets the condition, separated by space. 


### Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
||1<br>30<br>15|30 24 18 12 6|Numbers from 30 to 1, that is divisible at the same time by 2 and 3 without reminder are: 30, 24, 18, 12 and 6. The number 15 **is not equal** to any, so the sequence  **continues**.|

| Input | Output | Comments |
| --- | --- | --- |
|1<br>36<br>12|36 30 24 18|Numbers from 36 to 1, that is divisible at the same time by 2 and 3 without reminder are: 36, 30, 24, 18, 12 and 6. The number 12 **is equal** to the stop number , so **we stop by 18**.|


| Input | Output |
| --- | --- |
|20<br>1000<br>36|996 990 984 978 972 966 960 954 948 942 936 930 924 918 912 906 900 894 888 882 876 870 864 858 852 846 840 834 828 822 816 810 804 798 792 786 780 774 768 762 756 750 744 738 732 726 720 714 708 702 696 690 684 678 672 666 660 654 648 642 636 630 624 618 612 606 600 594 588 582 576 570 564 558 552 546 540 534 528 522 516 510 504 498 492 486 480 474 468 462 456 450 444 438 432 426 420 414 408 402 396 390 384 378 372 366 360 354 348 342 336 330 324 318 312 306 300 294 288 282 276 270 264 258 252 246 240 234 228 222 216 210 204 198 192 186 180 174 168 162 156 150 144 138 132 126 120 114 108 102 96 90 84 78 72 66 60 54 48 42|
