# Problem: Daily Earnings

Ivan is a programmer in an **American company** and he **works** at home **approximately N days per month** by earning **approximately M dollars per day**. At the end of the year, Ivan **receives a bonus**, which **equals 2.5 of his monthly salaries. 25% of his annual salary goes for taxes**. Write a program that calculates **what is the amount of Ivan's net average earnings in leva per day**, as he spends them in Bulgaria. It is accepted that **one year has exactly 365 days. The exchange rate of dollar** to lev will be **read from the console**. 

## Input Data

**Three numbers** are read from the console.
* On the first line – **work days per month**. An integer within the range of [**5 … 30**].
* On the second line – **daily earnings**. A floating-point number within the range of [**10.00 … 2000.00**].
* On the third line – **exchange rate of dollar to lev** /1 dollar = X lev/. A floating-point number within the range of [**0.99 … 1.99**].

## Output Data

Print **one number** on the console - **the daily earnings in lev**. The result will be **rounded up to the second symbol after the decimal point**. 

## Examples

| Input        | Output          |
|---------------|------------------|
|21<br>75.00<br>1.59|74.61| 

**Explanation**:
* **One monthly salary** = 21 \* 75 = 1575 dollars.
* **Annual income** = 1575 \* 12 + 1575 \* 2.5 = 22837.5 dollars.
* **Taxes** = 25% of 22837.5 = 5709.375 leva.
* **Net annual income** = 17128.125 dollars = 27233.71875 leva.
* **Average earnings per day** = 27233.71875 / 365 = 74.61 leva.

| Input        | Output            | Input         | Output    |
|-------------|------------------|-------------|------------------|
|15<br>105<br>1.71|80.24|22<br>199.99<br>1.50|196.63|
