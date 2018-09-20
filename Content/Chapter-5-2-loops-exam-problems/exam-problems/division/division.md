## Problem: деление без остатък

Дадени са **n цели числа** в интервала [**1 … 1000**]. От тях някакъв **процент p1 се делят без остатък на 2**, **процент p2** се **делят без остатък на 3**, **процент p3** се **делят без остатък на 4**. Да се напише програма, която изчислява и отпечатва процентите p1, p2 и p3.
**Example:** имаме **n = 10** числа: 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. Получаваме следното разпределение и визуализация:
<table>
<thead>
<tr>
<th align="left"><strong>Деление без остатък на:</strong></th>
<th align="left"><strong>Числа</strong></th>
<th align="left"><strong>Брой</strong></th>
<th align="left"><strong>Процент</strong></th>
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

### Input Data

На първия ред от входа стои цялото число **n** (1 ≤ **n** ≤ 1000) – брой числа. На следващите **n реда** стои **по едно цяло число** в интервала [**1 … 1000**] – числата, които да бъдат проверени на колко се делят.

### Output Data

Да се отпечатат на конзолата **3 реда**, всеки от които съдържа процент между 0% и 100%, с точност две цифри след десетичния знак, например 25.00%, 66.67%, 57.14%.
 * На **първия ред** – процентът на числата, които **се делят на 2**.
 * На **втория ред** – процентът на числата, които **се делят на 3**.
 * На **третия ред** – процентът на числата, които **се делят на 4**.

### Sample Input and Output

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