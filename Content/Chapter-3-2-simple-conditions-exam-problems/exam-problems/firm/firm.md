## Problem: Firm

A firm **receives a request for creating a project for which** a certain amount of hours **are needed**. The firm has **a certain number of days**. **During 10% of the days, the workers** are being trained and **cannot work** on the project. A normal **working day is 8 hours long**. The project is important for the firm and every worker must work on it in **overtime for 2 hours per day**. 

**The hours** must be **rounded down to the nearest integer** (example -> **6.98 hours** are rounded to **6 hours**).

Write a program that calculates whether **the firm can finish the project on time** and **how many hours more are needed or left**.

### Input Data

The input data is read from **the console** and contains **exactly three lines**: 
* On **the first** line are **the needed hours** – **an integer in the range of** [**0 … 200 000**].
* On **the second** line are **the days that the firm has** – **an integer in the range of** [**0 … 20 000**].
* On **the third** line are **the number of all workers** – **an integer in the range of** [**0 … 200**].

### Output Data

Print **one line** on **the console**: 
* If **the time is enough**:
  * **"Yes!{the hours left} hours left."**.
* If  **the time is NOT enough**:
  * **"Not enough time!{hours more needed} hours needed."**.

### Sample Input and Output

| Input | Output | Input | Output |
|----|-----|----|-----|
|90<br>7<br>3<br>|Yes!99 hours left.|99<br>3<br>1|Not enough time!72 hours needed.|
