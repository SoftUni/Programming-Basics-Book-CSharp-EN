## Problem: Money

Some time ago, **Pesho bought bitcoins**. Now, he is going on vacation in Europe and **he needs Euro**. Apart from bitcoins, he has **Chinese yuans** as well. Pesho wants to **exchange his money for Euro** for the tour. Write a program that calculates **how much Euro he can buy, depending on the following exchange rates**:  
* **1 bitcoin = 1168 leva.**
* **1 Chinese yuan = 0.15 dollars.**
* **1 dollar = 1.76 leva.**
* **1 Euro = 1.95 leva.**

The exchange office has **commission fee within 0 to 5 percent from the final sum in Euro**. 

### Input Data

Three numbers are read from the console: 
* On the first line – **number of bitcoins**. Integer within the range of [**0 … 20**].
* On the second line – **number of Chinese yuans**. Floating-point number within the range of [**0.00 … 50 000.00**].
* On the third line – **commission fee**. Floating-point number within the range of [**0.00 … 5.00**].
* 
### Output Data

Print one number on the console - **the result of the exchange of currencies**. Rounding is not necessary. 

### Sample Input and Output

| Input        | Output    |
|---------------|------------|
|1<br>5<br>5|569.668717948718| 

**Explanation**: 
* 1 bitcoin = 1168 leva
* 5 Chinese yuan = 0.75 dollars 
* 0.75 dollars = 1.32 leva
* **1168 + 1.32 = 1169.32 leva = 599.651282051282 Euro**
* **Commission fee:** 5% от 599.651282051282 = **29.9825641025641** 
* **Result**: 599.651282051282 - 29.9825641025641 = **569.668717948718 Euro**

| Input        | Output            | Input         | Output            |
|------------|------------------|--------------|------------------|
|20<br>5678<br>2.4|12442.2442010256|7<br>50200.12<br>3|10659.4701177436|
