#### Selecting Data Type for Calculations

In order to **perform** the **calculations** we select **`decimal`** type.

<table>
<tr>
<td width=10%><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>The data type for real numbers with decimal representation in <b>C#</b> is the 128-bit <b><code>decimal</code></b> type. It has the <b>accuracy</b> of <b>28 to 29</b> decimal numbers. Its <b>minimum</b> value is <b>-7.9×10^28</b>, and its <b>maximum</b> value is <b>+7.9×10^28</b>. Its default value is <b>0.0m</b> or <b>0.0M</b>. The <b><code>m</code></b> symbol at the end explicitly indicates that the number is <b><code>decimal</code></b> type (by <b>default</b> all real numbers are <b><code>double</code></b> type). The numbers closest to <b>0</b> that can be stored in <b><code>decimal</code></b> are <b>±1.0 × 10^-28</b>. It is evident that <b><code>decimal</code> can not</b> store <b>very large</b> positive and negative numbers (for example with hundreds of digits), nor values <b>very close to 0</b>. On the other hand, this type rarely causes <b>any errors</b> upon financial calculations because it represents the numbers as a <b>sum of the power of the number 10</b>, upon which the <b>losses</b> from roundings are much <b>less</b> compared to when we use binary representation. Real numbers of <b><code>decimal</code></b> type are exceptionally <b>suitable for doing money calculations</b> – calculation of incomes, liabilities, taxes, interest, etc.
</td>
</tr>
</table>

Read **additional information** regarding the various data **types** in C# here:

[http://www.introprogramming.info/intro-csharp-book/read-online/glava2-primitivni-tipove-i-promenlivi/\#\_Toc298863935](http://www.introprogramming.info/intro-csharp-book/read-online/glava2-primitivni-tipove-i-promenlivi/#_Toc298863935)
