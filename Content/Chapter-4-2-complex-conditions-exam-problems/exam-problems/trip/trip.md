## Problem: Trip

It is strange, but most people start planning their vacations well in advance. A young programmer has **certain budget** and spare time in a particular **season**.

Write a program that accepts **as input the budget and season**, and **as output** displays programmer's **vacation place**  and **the amount of money they will spend**.

**The budget determines the destination, and the season determines what amount of the budget will be spent**. If the season is **summer**, the programmer will go **camping**, if it is **winter - they will stay in a hotel**. If it is in **Europe**, **regardless of the season**, the programmer will stay in a **hotel**. Each **camp** or **hotel**, **according to the destination**, has **its own price**, which corresponds to a particular **percentage of the budget**:

- If **100 BGN or less** – somewhere in **Bulgaria**.
  - **Summer** – **30%** of the budget.
  - **Winter** – **70%** of the budget.
- If **1000 BGN or less** – somewhere on the **Balkans**.
  - **Summer** – **40%** of the budget.
  - **Winter** – **80%** of the budget.
- If **more than 1000 BGN** – somewhere in **Europe**.
  - Upon travelling in Europe, regardless of the season, the programmer will spend **90% of the budget**.

### Input Data

The input data will be read from the console and will consist of **two rows**:

- On the **first** row we receive **the budget** - **real number** in the range [**10.00 … 5000.00**].
- On the **second** row – **one** of the two possible seasons: "**summer**" or "**winter**".

### Output Data

**Two rows** must be printed in the console.

- On the **first** row – "**Somewhere in {destination}**" измежду "**Bulgaria**", "**Balkans**" и "**Europe**".
- На **втори** ред – "{**Вид почивка**} – {**Похарчена сума**}".
  - **Почивката** може да е между "**Camp**" и "**Hotel**".
  - **Сумата** трябва да е **закръглена с точност до втория символ след десетичния знак**.

### Sample Input and Output

| Input | Output |
|---|---|
|50<br>summer|Somewhere in Bulgaria<br>Camp - 15.00|
|75<br>winter|Somewhere in Bulgaria<br>Hotel - 52.50|
|312<br>summer|Somewhere in Balkans<br>Camp - 124.80|
|678.53<br>winter|Somewhere in Balkans<br>Hotel - 542.82|
|1500<br>summer|Somewhere in Europe<br>Hotel - 1350.00|
