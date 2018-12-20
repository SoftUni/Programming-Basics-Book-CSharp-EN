## Problem: Passion Shopping Days

Lina has a real shopping passion. When she has some money, she immediately goes to the closest shopping center (mall) and tries to spend as much as she can on clothes, bags and shoes. But her favorite thing are winter sales. Our task is to analyze her strange behavior and  **calculate the purchases** that Lina does when she enters the mall, as well as the **money she has left** when the shopping is over.

The **first row** of the input will pass the **amount** that Lina has **before** she starts shopping. After that, upon receiving the "**`mall.Enter`**" command, Lina enters the mall and starts shopping until the "**`mall.Exit`**" is received. When Lina starts shopping, **on each row** of the input you will receive strings that are **actions performed by Lina**. Each **symbol** in the string is a **purchase or another action**. String commands contain only symbols of the **ASCII table**. The ASCII code of each sign is **related to what Lina must pay** for each of the goods. You need to interpret the symbols in the following way:

- If the symbol is a **capital letter**, Lina gets a **50% discount**, which means that you must decrease the money she has by 50% of the numeric representation of the symbol from the ASCII table.
- If the symbol is a **small letter**, Lina gets a **70% discount**, which means that you must decrease the money she has by 30% of the numeric representation of the symbol from  the ASCII table.
- If the symbol is **"`%`"**, Lina makes a **purchase** that decreases her money in half.
- If the symbol is **"`*`"**, Lina **withdraws money from her debit card** and adds 10 lv to her available funds.
- If the symbol is **different from all of the aforementioned**, Lina just makes a purchase without discount, and in this case you should simply subtract the value of the symbol from the ASCII table from her available funds.

If some of the values of her purchases is **higher** than her current available funds, Lina **DOES NOT** make the purchase. Lina's funds **can not be less than 0**.

The shopping ends when the "**`mall.Exit`**" command is received. When this happens, you need to **print the number of purchases made and the money** that Lina has left.

### Input Data

The input data must be read from the console. The **first row** of the input will indicate the **amount that Lina has before starting to purchase**. On each of the following rows there will be a particular command. After you receive the command **"mall.Enter"**, on each of the following rows you will receive strings containing **information regarding the purchases / actions** that Lina wants to perform. These strings will keep being passed, until the "**`mall.Exit`**" command is received.

Always only one "**`mall.Enter`**" command will be received, as well as only one "**`mall.Exit`**" command.

### Output Data

The output data must be **printed in the console**.
When shopping is over, the console must print individual output depending on what purchases have been made.
- If **no purchases have been made** – "**No purchases. Money left: {remaining funds} lv.**"
- If **at least one purchase** is made - "**{number of purchases} purchases. Money left: {remaining funds} lv.**"

**The funds** must be printed with **accuracy of up to 2 symbols after the decimal point**.

### Constraints

- Money is a **float** number within: [**0 - 7.9 x 10<sup>28</sup>**].
- The number of strings between "**`mall.Enter`**" and "**`mall.Exit`**" will be within the range: [**1-20**].
- The number of symbols in each string that represents a command will be within the range: [**1-20**].
- Allowed execution time: **0.1 секунди**.
- Allowed memory: **16 MB**.

### Sample Input and Output

| Input                       | Output                              | Comments |
|----------------------------|------------------------------------|-----------|
| 110<br>mall.Enter<br>d<br>mall.Exit | 1 purchases. Money left: 80.00 lv. | ‘d’ has an ASCII code of 100. ‘d’ is a small letter, this is why Lina receives a 70% discount. 100% – 70% = 30.110 – 30 = 80 lv. |

| Input | Output | Input | Output |
|------|-------|------|-------|
| 110<br>mall.Enter<br>%<br>mall.Exit|1 purchases. Money left: 55.00 lv.| 100<br>mall.Enter<br>Ab<br>\*\*<br>mall.Exit|2 purchases. Money left: 58.10 lv.|
