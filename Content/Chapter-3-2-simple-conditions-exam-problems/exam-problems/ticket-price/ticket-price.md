## Problem: Ticket Price

A student has to travel **n kilometers**. He can choose between **three types of transport**: 
* **Taxi**. Starting fee: **0.70** lv. Day rate: **0.79** lv./km. Night rate: **0.90** lv./km.
* **Bus**. Day / Night rate: **0.09** lv./km. Can be used for distances of minimum **20** km.
* **Train**. Day / Night rate: **0.06** lv./km. Can be used for distances of minimum **100** km.

Write a program that receives the number of **kilometers n** and **period of the day** (day or night) and calculates **the price for the cheapest transport**.

### Input Data

**Two lines** are read from the console:
* The first line contains a number **n** – number of kilometers – an integer in the range of [**1 … 5000**].
* The second line contains the word “**day**” or “**night**” – travelling during the day or during the night. 

### Output Data

Print on the console **the lowest price** for the given number of kilometers. 

### Sample Input and Output

| Input        | Output       | Input        | Output       |
|----------|----------|----------|----------|
|5<br>day    |4.65        |7<br>night  |7           |

| Input        | Output       | Input        | Output       |
|----------|----------|----------|----------|
|25<br>day   |2.25        |180<br>night|10.8        |