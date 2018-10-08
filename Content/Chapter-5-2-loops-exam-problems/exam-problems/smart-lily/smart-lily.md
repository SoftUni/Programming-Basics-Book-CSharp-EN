## Problem: Smart Lily

Lily is **N years** old. For each **birthday** she receives a gift. For the **odd** birthdays (1, 3, 5, …, n) she receives **toys**, and for every **even** (2, 4, 6, …, n) she receives **money**. For her **second birthday** she receives **10.00 BGN**, and **the amount is increased by 10.00 BGN for every even birthday** (2 -> 10, 4 -> 20, 6 -> 30 etc.). Over the years Lily has secretly saved her money. Lily's **brother** ,in the years, when she **receives money**, **takes 1.00 BGN** from them. Lily **has sold the toys**, received over the years, **every for P BGN** and added the sum to the amount of saved money. With the money she wanted to **buy a washing machine for X BGN**. Write a program, that calculates **how much money she has saved** and if it is enough **to buy a washing machine**.

### Input Data

We read from the console **3 numbers**, each on separate line:

   - **Age** of Lily – **integer number** in range [**1 … 77**].
   - **Price of the washing machine** – number in range [**1.00 … 10 000.00**].
   - **Unit price of toy** – **integer number** in range [**0 … 40**].

### Output Data

Print on the console one single line:

  * If Lily's money is enough:
    * “**Yes! {N}**” – where **N** is the remaining money after the purchase
  * If money is not enough:
    * “**No! {M}**” – where **M** is the insufficiency amount
    * Numbers **N** and **M** must be **formatted to the second place after decimal point**.

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
<td valign="top"><p><strong>First birthday</strong> gets <strong>toy</strong>; <strong>2nd</strong> -> <strong>10 BGN</strong>; 3th -> toy; <strong>4th</strong>  -> 10 + 10 = <strong>20 BGN.</strong>; 5th -> toy; <strong>6th</strong> -> 20 + 10 = <strong>30 BGN</strong>; 7th -> toy; <strong>8th</strong> -> 30 + 10 = <strong>40 BGN</strong>; 9th -> toy; <strong>10th</strong> -> 40 + 10 = <strong>50 </strong>.<br>
<strong>She has saved</strong> -> 10 + 20 + 30 + 40 + 50 = <strong>150 BGN</strong>. She sold <strong>5 toys 6 BGN each = 30 BGN</strong>.<br>
<strong>Her brother took 1 BGN 5 times = 5 BGN</strong>. <strong>Remain</strong> -> 150 + 30 – 5 = <strong>175 BGN</strong>.
<strong>175 &gt;= 170</strong> (price of the washing machine) <strong>she managed</strong> to buy it and has <strong>left</strong> 175-170 = <strong>5 BGN</strong>.
</p></td>
</tr>
<tr>
<td valign="top">21<br>1570.98<br>3</td>
<td valign="top">No! 997.98</td>
<td valign="top"><p><strong>She has saved 550 BGN </strong>. <strong>She has sold</strong>  <strong>11 toys</strong> <strong>3 BGN each</strong> = <strong>33 BGN</strong>. Her brother <strong> for 10 years, has taken 1 BGN each year</strong> = <strong>10 BGN</strong>. <strong>Remain</strong> 550 + 33 – 10 = <strong>573 BGN.</strong> <br>
<strong>573 &lt; 1570.98</strong> – <strong>She did not managed to</strong> buy a washing machine. <strong>The insufficiency amount is</strong> 1570.98–573 = <strong>997.98 BGN.</strong></p></td>
</tr>
</tbody>
</table>    
