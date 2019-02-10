# Problem: Even / Odd Positions

Write a program that reads **n numbers** and calculates **the sum**, the **min** and **max** values of the numbers on **even** and **odd** positions (counted from 1). If there is no min / max element, print **"No"**. 

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
| 6<br>2<br>3<br>5<br>4<br>2<br>1 | OddSum=9,<br>OddMin=2,<br>OddMax=5,<br>EvenSum=8,<br>EvenMin=1,<br>EvenMax=4 | 2<br>1.5<br>-2.5 | OddSum=1.5,<br>OddMin=1.5,<br>OddMax=1.5,<br>EvenSum=-2.5,<br>EvenMin=-2.5,<br>EvenMax=-2.5 |
| 1<br>1 | OddSum=1,<br>OddMin=1,<br>OddMax=1,<br>EvenSum=0,<br>EvenMin=No,<br>EvenMax=No | 0 | OddSum=0,<br>OddMin=No,<br>OddMax=No,<br>EvenSum=0,<br>EvenMin=No,<br>EvenMax=No |
| 5<br>3<br>-2<br>8<br>11<br>-3 | OddSum=8,<br>OddMin=-3,<br>OddMax=8,<br>EvenSum=9,<br>EvenMin=-2,<br>EvenMax=11 | 4<br>1.5<br>1.75<br>1.5<br>1.75 | OddSum=3,<br>OddMin=1.5,<br>OddMax=1.5,<br>EvenSum=3.5,<br>EvenMin=1.75,<br>EvenMax=1.75 |
| 1<br>-5 | OddSum=-5,<br>OddMin=-5,<br>OddMax=-5,<br>EvenSum=0,<br>EvenMin=No,<br>EvenMax=No | 3<br>-1<br>-2<br>-3 | OddSum=-4,<br>OddMin=-3,<br>OddMax=-1,<br>EvenSum=-2,<br>EvenMin=-2,<br>EvenMax=-2 |

## Hints and Guidelines

The task combines some of the previous tasks: finding the **min** and **max** value and **sum**, as well as processing of elements on **even and odd positions**. Check them out.

In the current task it is better to work with **fractions** (not integers). The sum, the min and the max value will also be fractions. We must use a **neutral starting value** upon finding the min / max value, for example **1000000000.0** or **-1000000000.0**. If the end result is the neutral value, we will print **“No”**.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/510#10](https://judge.softuni.org/Contests/Practice/Index/510#10).
