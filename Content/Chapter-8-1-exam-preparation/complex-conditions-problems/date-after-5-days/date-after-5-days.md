### Problem: Date after 5 Days

There are two numbers **d** (day) and **m** (month) that form **a date**. Write a program that prints the date that will be **after 5 days**. For example, 5 days after **28.03** is the date **2.04**. We assume that the months: April, June, September and November have 30 days, February has 28 days, and the rest have 31 days. Months to be printed with **leading zero** when are single digits (eg 01, 08).

#### Input

The input is read from the console and consists of two rows:
- On the first row stands an integer **d** in the range [**1 … 31**] - day. The number of the day does not exceed the number of days in that month (eg 28 for February).
- On the second row stands an integer **m** in the range [**1 … 12**] - month. Month 1 is January, month 2 is February,  …, month 12 is December. The month may contain a leading zero (eg April may be written as 4 or 04).

#### Output

Print a single line containing a date after 5 days in the format **day.month** on the console. The month must be a 2-digit number with lead zero, if necessary. The day must be without leading zero.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|28<br>03|2.04|27<br>12|1.01|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|25<br>1|30.01|26<br>02|3.03|
