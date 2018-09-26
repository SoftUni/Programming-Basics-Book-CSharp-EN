## Problem: Money

Some time ago, **Pesho bought himself bitcoins**. Now, he is going on a tour in Europe and **he needs euro**. Apart from bitcoins, he has **Chinese yuan** as well. Pesho wants to **exchange his money in euro** for the tour. Write a program that calculates **how much euro he can buy, depending on the following exchange rates**:  
* **1 bitcoin = 1168 levs.**
* **1 Chinese yuan = 0.15 dollars.**
* **1 dollar = 1.76 levs.**
* **1 euro = 1.95 levs.**

The exchange office has **commission from 0 to 5 percent from the final sum in euro**. 

### Input Data

Three numbers are read from the console: 
* On the first line – **number of bitcoins**. Integer in the range [**0 … 20**].
* On the second line – **number of Chinese yuan**. Floating-point number [**0.00 … 50 000.00**].
* On the third line – **commission**. Floating-point number [**0.00 … 5.00**].
* 
### Output Data

Print one number on the console - **the result of the exchange of the currencies**. Rounding is not necessary. 

### Sample Input and Output

| Input        | Output    |
|---------------|------------|
|1<br>5<br>5|569.668717948718| 

**Explanation**: 
* 1 bitcoin = 1168 levs
* 5 Chinese yuan = 0.75 dollars 
* 0.75 dollars = 1.32 levs 
* **1168 + 1.32 = 1169.32 levs = 599.651282051282 euro**
* **Commission:** 5% от 599.651282051282 = **29.9825641025641** 
* **Result**: 599.651282051282 - 29.9825641025641 = **569.668717948718 euro**

| Input        | Output            | Input         | Output            |
|------------|------------------|--------------|------------------|
|20<br>5678<br>2.4|12442.2442010256|7<br>50200.12<br>3|10659.4701177436|