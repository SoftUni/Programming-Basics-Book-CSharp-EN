# Problem: Back to the Past

Ivan is **18 years old** and receives an inheritance that consists of **X** money and a **time machine**. He decides **to return to 1800**, but does not know **if the money** will **be enough** to live without working. Write **a program that calculates** if Ivan **will have enough money** to not have to work until a particular year (inclusive). Assuming that **for every even** (1800, 1802, etc.) year he **will spend 12 000 dollars**. For **every odd one** (1801, 1803, etc.) he will spend **12 000 + 50 * [the age he will have reached in the given year]**.

## Input Data

The input is read from the console and **contains exactly 2 lines**:
  * **Inherited money** – a real number in the range [**1.00 … 1 000 000.00**].
  * **Year, until which he has to live in the past (inclusive)** – integer number in the range [**1801 … 1900**].

## Output Data

**Print** on the console **1 line**. The **sum** must be **formatted** up to the **two symbols after the decimal point**:
  * If **money is enough**:
    * **"Yes! He will live a carefree life and will have {N} dollars left."** – where **N** is the money that will remain.
  * If **money is NOT enough**:
    * **"He will need {М} dollars to survive."** – where **M** is the sum that **is NOT enough**.

## Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Explanations</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">50000<br>1802</td>
<td valign="top">Yes! He will live a carefree life and<br> will have 13050.00 dollars left.</td>
<td valign="top"><p>1800 &rarr; <strong>even</strong><br> 
 	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spends 12000</strong> dollars <br>
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Remain 50000 – 12000 = <strong>38000</strong><br>
1801 &rarr; <strong>odd</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spends</strong> 12000 + <strong>19*50</strong> = 12950 dollars<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remaining</strong> 38000 – 12950 = <strong>25050</strong><br>
1802 &rarr; <strong>even</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spends</strong> 12000 dollars<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remaining</strong> 25050 – 12000 = <strong>13050</strong></p></td>
</tr>
<tr>
<td valign="top">100000.15<br>1808</td>
<td valign="top">He will need 12399.85 dollars<br> to survive.</td>
<td valign="top"><p>1800 &rarr; <strong>even</strong><br> 
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Remaining 100000.15 – 12000 = <strong>88000.15</strong><br>
1801 &rarr; <strong>odd</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remaining</strong> 88000.15 – 12950 = <strong>75050.15</strong><br>
<strong>…</strong><br>
1808 &rarr; <strong>odd</strong> &rarr; -399.85 - 12000 = -12399.85<br>
<strong>12399.85 is not enough</strong>
</p></td>
</tr>
</tbody>
</table>

## Hints and Guidelines

Let’s solve the problem step by step: read the input data, iterate over the years, check the heritage and print the output.

### Reading the Input Data

The method to solve this task is no different than the previous ones, so we start **declaring and initializing** the necessary variables:

![](/assets/chapter-5-2-images/03.Back-to-the-past-01.png)

The requirements say that Ivan is 18 years old, so when declaring the variable **`years`** we assign it an initial value of **18**. We read the other variables from the console.

### Iterating through the Years

Using a **`for` loop**, we will iterate through all years. We **start from 1800** – the year in that Ivan returns, and we reach the **year until which he must live in the past**. We check in the loop if the current year is **even** or **odd**. We do this by **division with remainder** (**`%`**) by 2. If the year is **even**, we subtract from **`heritage`** **12000**, and if is **odd**, we subtract from **`heritage`** **12000 + 50 * (years)**.

![](/assets/chapter-5-2-images/03.Back-to-the-past-02.png)

### Checking for Enough Heritage and Printing the Output

Finally, we need to print out the results by checking **if the `heritage`** is enough to live without working or not. If the **`heritage`** is a **positive number**, we print: “**`Yes! He will live a carefree life and will have {N} dollars left.`**”, and if it is a **negative number**: “**`He will need {М} dollars to survive.`**”. Do not forget to format the sum up to the second digit after the decimal point.

**Hint**: Consider using the **`Math.Abs(…)`** function when printing the output, if the heritage is not enough.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/511#2](https://judge.softuni.org/Contests/Practice/Index/511#2).
