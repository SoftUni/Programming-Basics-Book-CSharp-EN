## Problem: Operations with Numbers

Write a program that reads **two integers (n1 and n2)** and an **operator** that performs a particular **mathematical operation** with them. Possible operations are: **summing up** (**`+`**), **subtraction** (**`-`**), **multiplying** (**`*`**), **division** (**`/`**) and **modular division** (**`%`**). Upon summing up, subtracting and multiplying, the console must print the result and display whether it is **even** or **odd** number. Upon regular division – **just the result**, and upon modular division – **the remainder**. You need to take into consideration the fact that **the divisor can be equal to zero** (**`= 0`**), and dividing by zero is not possible. In this case, a **special notification** must be printed.

### Input Data

**3 rows** are read from the console:

- **N1** – **integer** within the range [**0 … 40 000**].
- **N2** – **integer** within the range [**0 … 40 000**].
- **Operator** – **one character** among: "**+**", "**-**", "**\***", "**/**", "**%**".

### Output Data

Print **one row** in the console:

- If the operation is **summing up**, **subtraction** or **multiplying**:
  - **"{N1} {operator} {N2} = {output} – {even/odd}"**.
- If the operation is **division**:
  - **"{N1} / {N2} = {output}"** – the result is **formatted** up **to the second digit after the decimal point**.
- If the operation is **modular division**:
  - **"{N1} % {N2} = {remainder}"**.
- In case of **dividing by 0 (zero)**:
  - **"Cannot divide {N1} by zero"**.

### Sample Input and Output

| Input | Output | Input | Output |
|---|---|---|---|
|123<br>12<br>/|123 / 12 = 10.25|112<br>0<br>/|Cannot divide 112 by zero|
|10<br>3<br>%|10 % 3 = 1|10<br>0<br>%|Cannot divide 10 by zero|

| Input | Output |
|---|---|
|10<br>12<br>+|10 + 12 = 22 - even|
|10<br>1<br>-|10 - 1 = 9 - odd|
|7<br>3<br>\*|7 * 3 = 21 - odd|
