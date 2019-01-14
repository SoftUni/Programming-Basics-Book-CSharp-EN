## Problem: Game Tickets

**A group of football fans** decided to buy **tickets for Euro Cup 2016**. The tickets are available in **two** price categories:

- **VIP** – **499.99** BGN.
- **Normal** – **249.99** BGN.

The football fans **have a shared budget**, and the **number of people** in the group determines what percentage of the budget will be **spent on transportation**:

- **1 to 4** – 75% of the budget.
- **5 to 9** – 60% of the budget.
- **10 to 24** – 50% of the budget.
- **25 to 49** – 40% of the budget.
- **50 or more** – 25% of the budget.

**Write a program** that **calculates whether the money left in the budget** will be enough for the football fans to **buy tickets in the selected category**, as well as **how much money** they will **have left or be insufficient**.

### Input Data

The input data is read from the **console** and contains **exactly 3 rows**:

- The **first** row contains the **budget** – real number within the range [**1 000.00 … 1 000 000.00**].
- The **second** row contains the **category** – "**VIP**" or "**Normal**".
- The **third** row contains the **number of people in the group** – an integer within the range [**1 … 200**].

### Output Data

**Print the following** in the console as **one row**:

- If the **budget is sufficient**:
  - "**Yes! You have {N} leva left.**" – where **N is the amount of remaining money** for the group.
- If the **budget is NOT sufficient**:
  - "**Not enough money! You need {М} leva.**" – where **М is the amount that is insufficient**.

**The amounts** must be **formatted up to the second digit after the decimal point**.

### Sample Input and Output

| Input | Output | Explanations |
| --- | --- | --- |
|1000<br>Normal<br>1|Yes! You have 0.01 leva left.|**1 person : 75%** of the budget are spent on **transportation**.<br>**Remaining amount:** 1000 – 750 = **250**.<br>Category **Normal**: the ticket **price is 249.99 * 1 = 249.99**<br>249.99 < 250: **the person will have** 250 – 249.99 = **0.01** money left|

| Input | Output | Explanations |
| --- | --- | --- |
|30000<br>VIP<br>49|Not enough money! You need 6499.51 leva.|**49 persons: 40%** of the budget are spent on **transportation**.<br>Remaining amount: 30000 – 12000 = 18000.<br>Category **VIP**: the ticket **costs** 499.99 * 49.<br>**24499.510000000002** < 18000.<br>**The amount is not enough** 24499.51 - 18000 = **6499.51**|
