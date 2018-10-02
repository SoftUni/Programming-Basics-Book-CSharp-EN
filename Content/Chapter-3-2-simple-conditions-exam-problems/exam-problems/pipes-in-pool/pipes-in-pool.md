## Problem: Pipes in Pool

A pool with **volume V** fills up with **two pipes**. **Each pipe has a certain flow rate** (the liters of water, flowing through a pipe for an hour). The worker starts the pipes simultaneously and goes out for **N hours**. Write a program that finds the state of the pool **the moment the worker comes back**. 

### Input Data

**Four lines** are read from the console: 
* The first line contains a number **V – the volume of the pool in liters** – an integer in the range of [**1 … 10000**].
* The second line contains a number **P1 – the flow rate of the first pipe for an hour** – an integer in the range of [**1 … 5000**].
* The third line contains a number **P2 – the flow rate of the second pipe for an hour** – an integer in the range of [**1 … 5000**].
* The fourth line contains a number **H – the hours that the worker is absent** – a floating-point number in the range of [**1.0 … 24.00**].

### Output Data

Print on the console **one of the two possible states**:
* To what extent the pool has filled up and how many percent each pipe has contributed with. All percents must be formatted to an integer (without rounding).
  * "The pool is **[x]**% full. Pipe 1: **[y]**%. Pipe 2: **[z]**%."
* If the pool has overflown - with how many liters it has overflown for the given time - a floating-point number. 
  * "For **[x]** hours the pool overflows with **[y]** liters."

**Have in mind** that due to **the rounding to an integer**, there is **data loss** and it is normal **the sum of the percents to be 99%, not 100%**. 

### Sample Input and Output

| Input | Output | Input | Output |
| ---- | ----- | ---- | ---- |
|1000<br>100<br>120<br>3 |The pool is 66% full. Pipe 1: 45%. Pipe2: 54%. |100<br>100<br>100<br>2.5|For 2.5 hours the pool overflows with 400 liters.|