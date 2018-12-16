## Problem: Changing Tiles

Haralambi has some **savings** that he wants to use to **change the tiles on the bathroom floor**. The **floor is rectangular**, and the **tiles are triangular**. Write a **program** that **calculates if his savings will be sufficient**. **Read from the console the width and length of the floor**, as well as **one of the sides of the triangle with its height towards it**. We must **calculate how many tiles are needed,** in order to cover the floor. The **number** of tiles **must be rounded up to the higher integer** and **5 more tiles must be added** as spare tiles. Also **read from the console** – **the price per tile** and **the amount paid for the work** of a workman.

### Input Data

The following 7 rows must be read from the console:
* **Savings**.
* **Floor width**.
* **Floor length**.
* **Side of the rectangle**.
* **Height of the rectangle**.
* **Price of a tile**.
* **Fee to be paid to the workman**.

**All** numbers must be real numbers within the range [**0.00 … 5000.00**].

### Output Data

The following must be printed in the console in **one row**:

* If the money **is sufficient**:
   * “{Remaining funds} lv left.”
* If the money **IS NOT sufficient**:
   * “You'll need {Insufficient funds} lv more.”

The result must be **formatted up to the second symbol** after the decimal point.

### Sample Input and Output

| Input | Output | Comments |
|-----|-----|-----|
|500<br>3<br>2.5<br>0.5<br>0.7<br>7.80<br>100|25.60 lv left.|**Floor area** &rarr; 3 \* 2.5 = **7.5**<br>**Tile area** &rarr; 0.5 \* 0.7 / 2 = **0.175**<br>**Needed tiles** &rarr; 7.5 / 0.175 = 42.857… = **43 + 5 spare tiles** = **48**<br>**Total amount** &rarr; 48 \* 7.8 + 100 (workman) = **474.4**<br>**474.4 < 500** &rarr; **25.60 lv left**|

| Input | Output | Comments |
|-----|-----|-----|
|1000<br>5.55<br>8.95<br>0.90<br>0.85<br>13.99<br>321|You'll need 1209.65 lv more.|**Floor area** &rarr; 5.55 \* 8.95 = **49.67249**<br>**Tile area** &rarr; 0.9 \* 0.85 / 2 = **0.3825**<br>**Needed tiles** &rarr; 49.67249 / 0.3825 = 129.86… = **130 + 5 spare tiles** = **135**<br>**Total amount** &rarr; 135 * 13.99 + 321 (workman) = **2209.65**<br>**2209.65 > 1000** &rarr; **1209.65 lv are insufficient**|
