## Problem: Grades

Write a program that **calculates statistics for grades** in an exam. At the beginning, the program reads the **number of students** who attended the exam and for **each student - their grade**. At the end, the program must **print the percentage of students** that have grades between 2.00 and 2.99, between 3.00 and 3.99, between 4.00 and 4.99, 5.00 or more, as well as the **average grade** of the exam.

### Input Data

Read from the console a **sequence of numbers, each on a separate row**:
* On the first row – **the number of students who attended the exam** – an integer within the range [**1 … 1000**].
* For **each individual student** on a separate row – **the grade on the exam** – a real number within the range [**2.00 … 6.00**].

### Output Data

Print in the console **5 rows** that contain the following information:
* "Top students: {percentage of students with grade of 5.00 or more}%".
* "Between 4.00 and 4.99: {between 4.00 and 4.99 included}%".
* "Between 3.00 and 3.99: {between 3.00 and 3.99 included}%".
* "Fail: {less than 3.00}%".
* "Average: {average grade}".

The results must be **formatted up to the second symbol** after the decimal point.

### Sample Input and Output

| Input | Output | Comments |
| --- | --- | --- |
|10<br>3.00<br>2.99<br>5.68<br>3.01<br>4<br>4<br>6.00<br>4.50<br>2.44<br>5<br>|Top students: 30.00%<br>Between 4.00 and 4.99: 30.00%<br>Between 3.00 and 3.99: 20.00%<br>Fail: 20.00%<br>Average: 4.06|5 or more - **three students** = 30% of 10<br>Between 4.00 and 4.99 - **three students** = 30% of 10<br>Between 3.00 and 3.99 - **two students** = 20% of 10<br>Below 3 - **two students** = 20% of 10<br>The average grade is: 3 + 2.99 + 5.68 + 3.01 + 4 + 4 + 6 + 4.50 + 2.44 + 5 = 40.62 / 10 = 4.062|

| Input | Output |
| --- | --- |
|6<br>2<br>3<br>4<br>5<br>6<br>2.2|Top students: 33.33%<br>Between 4.00 and 4.99: 16.67%<br>Between 3.00 and 3.99: 16.67%<br>Fail: 33.33%<br>Average: 3.70|
