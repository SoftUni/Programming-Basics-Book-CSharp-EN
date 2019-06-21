# Problem: Division without Remainder

We have **n integers** in the range of [**1 ... 1000**]. Among them, **some percentage p1 are divisible without remainder by 2**, **percentage p2** are **divisible without remainder by 3**, **percentage p3** are **divisible without remainder by 4**. Write a program that calculates and prints the p1, p2 and p3 percentages.
**Example:** We have **n = 10** numbers: 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. We get the following distribution and visualization:
<table>
<thead>
<tr>
<th align="left"><strong>Division without remainder by:</strong></th>
<th align="left"><strong>Numbers</strong></th>
<th align="left"><strong>Count</strong></th>
<th align="left"><strong>Percent</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">2</td>
<td valign="top">680, 2, 600, 200, 800, 46, 128</td>
<td valign="top">7</td>
<td valign="top">p1 = (7 / 10) * 100 = <strong>70.00%</strong></td>
</tr>
<tr>
<td valign="top">3</td>
<td valign="top">600</td>
<td valign="top">1</td>
<td valign="top">p2 = (1 / 10) * 100 = <strong>10.00%</strong></td>
</tr>
<tr>
<td valign="top">4</td>
<td valign="top">680, 600, 200, 800, 128</td>
<td valign="top">5</td>
<td valign="top">p3 = (5 / 10) * 100 = <strong>50.00%</strong></td>
</tr>
</tbody>
</table>   

## Input Data

On the first line of the input is the integer **n** (1 ≤ **n** ≤ 1000) – count of numbers. On each of the next **n lines** we have **one integer** in the range of [**1 … 1000**] – numbers that needs to be checked for division.

## Output Data

Print on the console **3 lines**, each of them containing a percentage between 0% and 100%, two digits after the decimal point, for example 25.00%, 66.67%, 57.14%.
 * On the **first line** – percentage of the numbers that are **divisible by 2**.
 * On the **second line** – percentage of the numbers that are **divisible by 3**.
 * On the **third line** – percentage of the numbers that are **divisible by 4**.

## Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>10</strong><br>680<br>2<br>600<br>200<br>800<br>799<br>199<br>46<br>128<br>65</td>
<td valign="top">70.00%<br>10.00%<br>50.00%</td>
<td valign="top"><strong>3</strong><br>3<br>6<br>9</td>
<td valign="top">33.33%<br>100.00%<br>0.00%</td>
<td valign="top"><strong>1</strong><br>12</td>
<td valign="top">100.00%<br>100.00%<br>100.00%</td>
</tr>
</tbody>
</table>   

## Hints and Guidelines

For the current and for the next problem you will need to write by yourself the program code, following the given guidelines.

The program that solves the current problem is similar to the one from the **Histogram** problem, which we reviewed earlier. That's why we can start declaring the required variables. Sample names of variables may be: **`n`** – count of numbers (that we need to read from the console) and **`divisibleBy2`**, **`divisibleBy3`**, **`divisibleBy4`** – helper variables that keeps the count of the numbers in the corresponding group.

To read and allocate each number to its corresponding group we have to rotate **`for` loop** from **`0`** to **`n`** (count of numbers). Each iteration of the loop should read and allocate **one single number**. The difference here is that a **single number can get into several groups at once**, so we have to make **three separate `if` checks for each number** – respectively check whether it is divided by 2, 3 and 4 (using **`if-else`** statement in this case will not work, because after finding a match it interrupts further checking of conditions) and increase the value of the variable that keeps the count of numbers in the corresponding group.

Finally, you need to print the obtained results, by following the specified format.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/511#4](https://judge.softuni.org/Contests/Practice/Index/511#4).
