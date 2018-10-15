## Problem: Hospital

For a certain period of time, patients arrive at the hospital each day for a treatment. It has **initially 7 doctors**. Every doctor can treat only **one pacient per day**, but sometimes there is a shortage of doctors, so the **remaining patients are sent to other hospotals**. **Every third day** the hospital makes calculations and  **if count of untreated patients is greater than the count of treated, another doctor is appointed**. Appointment takes place before the daily patient intake begins.

Write a program, that calculates **for the given period of time count of treated and untreated patients**.

### Input Data

Input is read from the **console** and contains:
  * On the first line – **The period**, for which you need to make calculations. **Integer number** in range [**1 … 1000**].
  * On the next lines (equals to the count of days) – **count of the patients**, who arrive for treatment for the **current day**. Integer number in range [**0 … 10 000**].

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
<td valign="top"><p><strong>1 day</strong>: 7 treated and 0 untreated patients for the day<br>
<strong>2 day</strong>: 7 treated and 20 untreated patients for the day<br>
<strong>3 day</strong>: By this moment the treated patiens are 14,<br> and untreated – 20 –> Appointed new doctor. <br>–>
8 treated and 1 untreated patient for the day<br>
<strong>4 day</strong>: 1 treated and 0 untreated patients for the day<br>
<strong>Total: 23 treated and 21 untreated patiens.</strong></p></td>
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