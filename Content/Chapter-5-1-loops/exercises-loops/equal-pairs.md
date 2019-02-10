# Problem: Equal Pairs

There are **2 \* n numbers**. The first and the second number form a **pair**, the third and the fourth number also, and so on. Each pair has a **value** – the sum of its numbers. Write a program that checks **if all pairs have equal value**.

In case the value is the same, print **"Yes, value=…" + the value**, otherwise, print the **maximum difference** between two neighboring pairs in the following format: **"No, maxdiff=…" + the maximum difference**. 

The input consists of the number **n**, followed by **2*n integers**, all of them one per line.

## Sample Input and Output

| Input | Output | Comments |
| --- | --- | :---: | 
| 3<br>1<br>2<br>0<br>3<br>4<br>-1| Yes, value=3 | values = {3, 3, 3}<br>equal values | 
| 2<br>1<br>2<br>2<br>2 | No, maxdiff=1 | values = {3, 4}<br>differences = {1}<br>max difference = 1 |
| 4<br>1<br>1<br>3<br>1<br>2<br>2<br>0<br>0 | No, maxdiff=4 | values = {2, 4, 4, 0}<br>differences = {2, 0, 4}<br>max difference = 4 |
| 1<br>5<br>5 | Yes, value=10 | values = {10}<br>one value<br>equal values |
| 2<br>-1<br>0<br>0<br>-1 | Yes, value=-1 | values = {-1, -1}<br>equal values | 
| 2<br>-1<br>2<br>0<br>-1 | No, maxdiff=2 | values = {1, -1}<br>differences = {2}<br>max difference = 2 |

## Hints and Guidelines

We read the input numbers **in pairs**. For each pair we calculate its **sum**. While reading the input pairs, for each pair except the first one, we must calculate **the difference compared to the previous one**. In order to do that, we need to store as a separate variable the sum of the previous pair. Finally, we find the **largest difference** between two pairs. If it is **0**, print **“Yes”** + the value, otherwise – **“No”** + the difference.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/510#11](https://judge.softuni.org/Contests/Practice/Index/510#11).
