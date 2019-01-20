## Problem: Smart Lilly

Lilly is **N years** old. For each **birthday** she receives a present. For each **odd** birthday (1, 3, 5, …, n) she receives **toys**, and for each **even** birthday (2, 4, 6, …, n) she receives **money**. For her **second birthday** she received **10.00 lv**, and **the amount is increased by 10.00 lv for each following even birthday** (2 -> 10, 4 -> 20, 6 -> 30 etc.). Over the years Lilly has secretly saved her money. Lilly's **brother**, in the years when she **received money**, **took 1.00 lv** from each of the amounts. Lilly **has sold the toys**, received over the years, **each one for P lv** and added the sum to the amount of saved money. With the money she wanted to **buy a washing machine for X lv**. Write a program that calculates **how much money she has saved** and if it is enough **to buy a washing machine**.

### Input Data

We read from the console **3 numbers**, each on a separate line:

   - Lilly's **age** – **integer** in the range of [**1 … 77**].
   - **Price of the washing machine** – number in the range of [**1.00 … 10 000.00**].
   - **Unit price of each toy** – **integer** in the range of [**0 … 40**].

### Output Data

Print on the console one single line:

  * If Lilly's money is enough:
    * “**Yes! {N}**” – where **N** is the remaining money after the purchase
  * If the money is not enough:
    * “**No! {M}**” – where **M** is the insufficiency amount
    * Numbers **N** and **M** must be **formatted up to the second symbol after the decimal point**.

### Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">10<br>170.00<br>6</td>
<td valign="top">Yes! 5.00</td>
<td valign="top"><p><strong>For the first birthday</strong> she gets <strong>a toy</strong>; <strong>2nd</strong> -> <strong>10 lv</strong>; 3rd -> toy; <strong>4th</strong>  -> 10 + 10 = <strong>20 lv.</strong>; 5th -> toy; <strong>6th</strong> -> 20 + 10 = <strong>30 lv</strong>; 7th -> toy; <strong>8th</strong> -> 30 + 10 = <strong>40 lv</strong>; 9th -> toy; <strong>10th</strong> -> 40 + 10 = <strong>50 lv</strong>.<br>
<strong>She has saved</strong> -> 10 + 20 + 30 + 40 + 50 = <strong>150 lv</strong>. She sold <strong>5 toys for 6 lv each = 30 lv</strong>.<br>
<strong>Her brother took 1 lv 5 times = 5 lv</strong>. <strong>Remaining amount</strong> -> 150 + 30 – 5 = <strong>175 lv</strong>.
<strong>175 &gt;= 170</strong> (price of the washing machine) <strong>she managed</strong> to buy it and is <strong>left</strong> with 175-170 = <strong>5 lv</strong>.
</p></td>
</tr>
<tr>
<td valign="top">21<br>1570.98<br>3</td>
<td valign="top">No! 997.98</td>
<td valign="top"><p><strong>She has saved 550 lv </strong>. <strong>She has sold</strong>  <strong>11 toys</strong> <strong>3 lv each</strong> = <strong>33 lv</strong>. Her brother <strong> has taken for 10 years 1 lv each year</strong> = <strong>10 lv</strong>. <strong>Remaining amount</strong> 550 + 33 – 10 = <strong>573 lv.</strong> <br>
<strong>573 &lt; 1570.98</strong> – <strong>She did not manage to</strong> buy a washing machine. <strong>The insufficiency amount is</strong> 1570.98–573 = <strong>997.98 lv.</strong></p></td>
</tr>
</tbody>
</table>    
