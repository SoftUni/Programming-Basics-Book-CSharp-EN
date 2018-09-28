## Problem: Back to the Past

Ivancho is **18 years old** and receives an inheritance that consists of ** X ** money ** and ** time machine **. He decides **to return to 1800**, but does not know **if money** will **be enough** to live without working. Write ** a program that calculates ** if Ivancho **will have enough money**  to not have to work until the given year. Assuming that **for every even** (1800, 1802, etc.) year he **will spend 12 000 dollars**. For **every odd** (1801, 1803, etc.) he will spend **12 000 + 50 * [the age he will have reached in the given year]**.

### Input Data

The input is read from the console and **contains exactly 2 lines**:
  * **Inherited money** – a real number in the range [**1.00 … 1 000 000.00**].
  * **Year, until to live(inclusive)** – integer number in the range [**1801 … 1900**].

### Output Data

**Print** on the console **1 line**. **Sum** must be **formated** to the **second decimal point**:
  * If **money is enough**:
    * „**Yes! He will live a carefree life and will have {N} dollars left.**“ – when **N** is money, which will remain.
  *If **money is NOT enough**:
    * „**He will need {М} dollars to survive.**“ – where **M** is sum, which **is NOT enough**.

### Sample Input and Output

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
 	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spend 12000</strong> dollars <br>
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Remain 50000 – 12000 = <strong>38000</strong><br>
1801 &rarr; <strong>odd</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spend</strong> 12000 + <strong>19*50</strong> = 12950 dollars<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remain</strong> 38000 – 12950 = <strong>25050</strong><br>
1802 &rarr; <strong>even</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spend</strong> 12000 dollars<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remain</strong> 25050 – 12000 = <strong>13050</strong></p></td>
</tr>
<tr>
<td valign="top">100000.15<br>1808</td>
<td valign="top">He will need 12399.85 dollars<br> to survive.</td>
<td valign="top"><p>1800 &rarr; <strong>even</strong><br> 
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Remain 100000.15 – 12000 = <strong>88000.15</strong><br>
1801 &rarr; <strong>odd</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remain</strong> 88000.15 – 12950 = <strong>75050.15</strong><br>
<strong>…</strong><br>
1808 &rarr; <strong>odd</strong> &rarr; -399.85 - 12000 = -12399.85<br>
<strong>12399.85 is not enough</strong>
</p></td>
</tr>
</tbody>
</table>    
