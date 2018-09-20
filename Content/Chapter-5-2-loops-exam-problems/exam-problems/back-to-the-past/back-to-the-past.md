## Problem: завръщане в миналото

Иванчо е на **18 години** и получава наследство, което се състои от **X сума пари** и **машина на времето**. Той решава **да се върне до 1800 година**, но не знае **дали парите** ще **са достатъчни**, за да живее без да работи. Напишете **програма, която пресмята** дали Иванчо **ще има достатъчно пари**, за да не се налага да работи **до дадена година включително**. Като приемем, че **за всяка четна** (1800, 1802 и т.н.) година ще **харчи 12 000 долара**. За **всяка нечетна** (1801,1803  и т.н.) ще харчи **12 000 + 50 * [годините, които е навършил през дадената година]**.

### Input Data

Входът се чете от конзолата и **съдържа точно 2 реда**:
  * **Наследените пари** – реално число в интервала [**1.00 … 1 000 000.00**].
  * **Годината, до която трябва да живее (включително)** – цяло число в интервала [**1801 … 1900**].

### Output Data

Да се **отпечата** на конзолата **1 ред**. **Сумата** трябва да е **форматирана** до **два знака след десетичния знак**:
  * Ако **парите са достатъчно**:
    * „**Yes! He will live a carefree life and will have {N} dollars left.**“ – където **N** са парите, които ще му останат.
  *	Ако **парите НЕ са достатъчно**:
    * „**He will need {М} dollars to survive.**“ – където **M** е сумата, която **НЕ достига**.

### Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Обяснения</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">50000<br>1802</td>
<td valign="top">Yes! He will live a carefree life and<br> will have 13050.00 dollars left.</td>
<td valign="top"><p>1800 &rarr; <strong>четна</strong><br> 
 	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Харчи 12000</strong> долара <br>
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Остават 50000 – 12000 = <strong>38000</strong><br>
1801 &rarr; <strong>нечетна</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Харчи</strong> 12000 + <strong>19*50</strong> = 12950 долара<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Остават</strong> 38000 – 12950 = <strong>25050</strong><br>
1802 &rarr; <strong>четна</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Харчи</strong> 12000 долара<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Остават</strong> 25050 – 12000 = <strong>13050</strong></p></td>
</tr>
<tr>
<td valign="top">100000.15<br>1808</td>
<td valign="top">He will need 12399.85 dollars<br> to survive.</td>
<td valign="top"><p>1800 &rarr; <strong>четна</strong><br> 
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Остават 100000.15 – 12000 = <strong>88000.15</strong><br>
1801 &rarr; <strong>нечетна</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Остават</strong> 88000.15 – 12950 = <strong>75050.15</strong><br>
<strong>…</strong><br>
1808 &rarr; <strong>четна</strong> &rarr; -399.85 - 12000 = -12399.85<br>
<strong>12399.85 не достигат</strong>
</p></td>
</tr>
</tbody>
</table>    
