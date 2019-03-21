# Problem: Date After 5 Days

The next sample exam problem is about calculating the date 5 days after given date (day + month), having in mind that it might appear in the next month.

## Video: Date After 5 Days

Watch the video lesson about solving the "Date After 5 Days" problem: https://youtu.be/01FEQP6r_xk.

## Problem Description

There are two numbers **d** (day) and **m** (month) that form **a date**. Write a program that prints the date that will be **5 days a particular date**. For example, 5 days after **28.03** is the date **2.04**. We assume that the months: April, June, September and November have 30 days, February has 28 days, and the rest have 31 days. Months to be printed with **leading zero** when they contain a single digit (e.g. 01, 08).

## Input

The input is read from the console and consists of two lines:
 * On the first line we read an integer **d** in the range [**1 … 31**] – day. The number of the day does not exceed the number of days in that month (e.g. 28 for February).
 * On the second line we read an integer **m** in the range [**1 … 12**] – month. Month 1 is January, month 2 is February,  …, month 12 is December. The month may contain a leading zero (e.g. April may be written as 4 or 04).

## Output

Print a single line containing the date after 5 days in the format **day.month** on the console. The month must be a 2-digit number with a leading zero, if necessary. The day must be written without leading zero.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|28<br>03|2.04|27<br>12|1.01|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|25<br>1|30.01|26<br>02|3.03|

## Reading and Processing the Input Data

We take the input from the console.

![](/assets/chapter-8-1-images/05.Date-after-5-days-01.png)

To make our checks easier, we'll create a variable that will contain the **number of days** that we have in the month we set.

![](/assets/chapter-8-1-images/05.Date-after-5-days-02.png)

## Adding 5 Days

We are increasing **the day** by 5.

![](/assets/chapter-8-1-images/05.Date-after-5-days-03.png)

We check if **the day** has not exceeded the number of days in the **month**. If so, we must deduct the days of the month from the obtained day in order to calculate which day of the next month our day corresponds to.

![](/assets/chapter-8-1-images/05.Date-after-5-days-04.png)

After we have passed to the **next month**, this should be noted by increasing the initial one by 1. We need to check if it has not become greater than 12 and if it has, to adjust it. Because we cannot skip more than **one month** when we increase by 5 days, the following check is enough.

![](/assets/chapter-8-1-images/05.Date-after-5-days-05.png)

## Printing the Result

The only thing that remains is to print the result on the console. It is important to **format the output** correctly to display the leading zero in the first 9 months. This is done by adding a **formatting string** `:D2` after the second element.

![](/assets/chapter-8-1-images/05.Date-after-5-days-06.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/516#4](https://judge.softuni.org/Contests/Practice/Index/516#4).
