## Problem: Harvest

From **vineyard with area X square meters**, **40% of the harvest goes for wine production**. From **1 sq.m. vineyard**, **Y kilograms of grapes** are extracted. **2,5 kg of grapes** are needed for **1 litre of wine**. **The wanted quantity of wine** for sale is **Z litres**. 

Write **a program** that **calculates how much wine can be produced** and **whether** that quantity **is enough**. **If it is enough, the rest is divided between the vineyard workers equally**. 

### Input Data

The input data is read from the console and consists of **exactly 4 lines**: 
* First line: **X sq.m is the vineyard – an integer in the range of** [**10 … 5000**].
* Second line: **Y grapes for one sq.m. – an integer in the range of** [**0.00 … 10.00**].
* Third line: **Z needed litres of wine – an integer in the range of** [**10 … 600**].
* Fourth line: **number of workers – an integer in the range of** [**1 … 20**].

### Output Data

The following has to be printed on the console:
* If the **produced** wine is **less than the needed**:
  * **“It will be a tough winter! More {wine more needed} liters wine needed.**”  
   \* **The result** has to be **rounded down to the nearest integer**.
* If **the produced** wine is **more than the needed**:
  * **“Good harvest this year! Total wine: {total wine} liters.”**  
   \* **The result** has to be **rounded down to the nearest integer**.
  * **“{Wine left} liters left -> {wine for one worker} liters per person.”**  
   \* **Both of the results** have to be **rounded to the higher integer**.

### Sample Input and Output

| Input | Output | Input | Output |
|----|-----|----|-----|
|650<br>2<br>175<br>3|Good harvest this year! Total wine: 208 liters.<br>33 liters left -> 11 liters per person.|1020<br>1.5<br>425<br>4|It will be a tough winter! More 180 liters wine needed.|