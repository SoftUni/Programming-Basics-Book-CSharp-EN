# Complex Conditions – Problems

**The third** problem of the "Programming Basics" Practical Exam includes **several nested checks combined with simple calculations**. Let's take a few examples.


## Problem: Date after 5 Days

There are two numbers **d** (day) and **m** (month) that form **a date**. Write a program that prints the date that will be **after 5 days**. For example, 5 days after **28.03** is the date **2.04**. We assume that the months: April, June, September and November have 30 days, February has 28 days, and the rest have 31 days. Months to be printed with **leading zero** when are single digits (eg 01, 08).

### Input

The input is read from the console and consists of two rows:
- On the first row stands an integer **d** in the range [**1 … 31**] - day. The number of the day does not exceed the number of days in that month (eg 28 for February).
- On the second row stands an integer **m** in the range [**1 … 12**] - month. Month 1 is January, month 2 is February,  …, month 12 is December. The month may contain a leading zero (eg April may be written as 4 or 04).

### Output

Print a single line containing a date after 5 days in the format **day.month** on the console. The month must be a 2-digit number with lead zero, if necessary. The day must be without leading zero.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|28<br>03|2.04|27<br>12|1.01|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|25<br>1|30.01|26<br>02|3.03|

### Read and Process Input Data

We take the input from the console.

![](/assets/chapter-8-1-images/05.Date-after-5-days-01.png)

To make our checks easier, we'll create a variable that will contain the **number of days** that we have in the month we set.

![](/assets/chapter-8-1-images/05.Date-after-5-days-02.png)

### Add 5 Days

We are increasing **the day** with 5.

![](/assets/chapter-8-1-images/05.Date-after-5-days-03.png)

We check if **the day** has not exceeded the number of days it has in the **month**. If so, we must deduct the days of the month from the received day in order to receive our day on which day of the next month corresponds.

![](/assets/chapter-8-1-images/05.Date-after-5-days-04.png)

After we have passed in the **next month**, this should be noted by increasing the initial one by 1. We need to check if it has not been greater than 12 and if so, adjust. Because we can not skip more than **one month** when we increase by 5 days, the lower check is enough.

![](/assets/chapter-8-1-images/05.Date-after-5-days-05.png)

### Printing the Result

It only remains to print the result on the console. It is important to **format the output** correctly to display the leading zero in the first 9 months. This is done by adding a **formatting string** `:D2` after the second element.

![](/assets/chapter-8-1-images/05.Date-after-5-days-06.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#4](https://judge.softuni.bg/Contests/Practice/Index/516#4).


## Problem: Sum of 3 Numbers

There are **3 integers** given. Write a program that checks if **the sum of two of the numbers is equal to the third**. For example, if the numbers are **3**, **5** and **2**, the sum of two of the numbers is equal to the third: **2 + 3 = 5**.

### Input

The console reads **three integers**, one per line. The numbers are in range [**1 … 1000**].

### Output

- Print a row containing the solution of the problem in the format "**a + b = c**", where **a**, **b** and **c** are among the three input numbers and **a ≤ b**.
- If the problem has no solution, print "**No**" on the console.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3<br>5<br>2|2 + 3 = 5|2<br>2<br>4|2 + 2 = 4|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|1<br>1<br>5|No|2<br>6<br>3|No|

### Reading the Input Data

We take the input from the console.

![](/assets/chapter-8-1-images/06.Sums-3-numbers-01.png)

### Composition a Frame for the Solution

We have to check if the **sum** of a pair of numbers is equal to the third. We have three possible cases:
* a + b = c
* a + c = b 
* b + c = a

We will write a **frame**, which will later be complemented by the required code. If none of the above three conditions is met, we will make our program to print "**No**".

![](/assets/chapter-8-1-images/06.Sums-3-numbers-02.png)

### Write Code in the Frame

We now have to understand the order in which the **two addends** will be written at the output of the program. For this purpose, we will do **a nested condition** that checks which of the two is the larger one. In the first case, it will be like this:

![](/assets/chapter-8-1-images/06.Sums-3-numbers-03.png)

Similarly, we will supplement the other two cases. The full code and output of the program will look like this:

![](/assets/chapter-8-1-images/06.Sums-3-numbers-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#5](https://judge.softuni.bg/Contests/Practice/Index/516#5).
