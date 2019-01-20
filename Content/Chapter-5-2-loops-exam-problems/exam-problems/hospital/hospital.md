## Problem: Hospital

For a certain period of time, patients arrive at the hospital every day for an examination. It has **initially 7 doctors**. Each doctor can treat only **one patient per day**, but sometimes there is a shortage of doctors, so the **remaining patients are sent to other hospitals**. **Every third day** the hospital makes calculations and **if the count of untreated patients is greater than the count of treated ones, another doctor is appointed**. Appointment takes place before the daily patient acceptance begins.

Write a program, that calculates **for a given period of time, the count of treated and untreated patients**.

### Input Data

Input is read from the **console** and contains:
  * On the first line – **the period**, for which you need to make calculations. **Integer** in the range of [**1 … 1000**].
  * On the next lines (equal to the count of days) – **count of the patients**, who arrive for treatment for the **current day**. Integer in the range of [**0 … 10 000**].

### Output Data

Print **on the console 2 lines**:

* On the **first line**: “**Treated patients: {count of treated patients}.**”
* On the **second line**: “**Untreated patients: {count of untreated patients}.**”

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
<td valign="top">4<br>7<br>27<br>9<br>1</td>
<td valign="top">Treated patients: 23.<br>Untreated patients: 21.</td>
<td valign="top"><p><strong>Day 1</strong>: 7 treated and 0 untreated patients for the day<br>
<strong>Day 2</strong>: 7 treated and 20 untreated patients for the day<br>
<strong>Day 3</strong>: By this moment the treated patients are 14,<br> and untreated ones – 20 –> New doctor is appointed. <br>–>
8 treated and 1 untreated patients for the day<br>
<strong>Day 4</strong>: 1 treated and 0 untreated patients for the day<br>
<strong>Total: 23 treated and 21 untreated patients.</strong></p></td>
</tr>
</tbody>
</table>    

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">6<br>25<br>25<br>25<br>25<br>25<br>2</td>
<td valign="top">Treated patients: 40.<br>Untreated patients: 87.</td>
</tr>
<tr>
<td valign="top">3<br>7<br>7<br>7</td>
<td valign="top">Treated patients: 21.<br>Untreated patients: 0.</td>
</tr>
</tbody>
</table>    
