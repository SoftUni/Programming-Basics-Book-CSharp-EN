# Problem: Passion Shopping Days

Lina has a real shopping passion. When she has some money, she immediately goes to the closest shopping center (mall) and tries to spend as much as she can on clothes, bags and shoes. But her favorite thing are winter sales. Our task is to analyze her strange behavior and  **calculate the purchases** that Lina does when she enters the mall, as well as the **money she has left** when the shopping is over. All prices and money are in BGN (Bulgarian levs, **lv**).

The **first line** of the input will pass the **amount** that Lina has **before** she starts shopping. After that, upon reading the "**`mall.Enter`**" command, Lina enters the mall and starts shopping until the "**`mall.Exit`**" command is given. When Lina starts shopping, **on each line** of the input you will be given strings that are **actions performed by Lina**. Each **symbol** in the string is a **purchase or another action**. String commands contain only symbols of the **ASCII table**. The ASCII code of each sign is **related to what Lina must pay** for each of the goods. You need to interpret the symbols in the following way:

- If the symbol is a **capital letter**, Lina gets a **50% discount**, which means that you must decrease the money she has by 50% of the numeric representation of the symbol from the ASCII table.
- If the symbol is a **small letter**, Lina gets a **70% discount**, which means that you must decrease the money she has by 30% of the numeric representation of the symbol from  the ASCII table.
- If the symbol is **"`%`"**, Lina makes a **purchase** that decreases her money in half.
- If the symbol is **"`*`"**, Lina **withdraws money from her debit card** and adds 10 lv. to her available funds.
- If the symbol is **different from all of the aforementioned**, Lina just makes a purchase without discount, and in this case you should simply subtract the value of the symbol from the ASCII table from her available funds.

If a certain value of her purchases is **higher** than her current available funds, Lina **DOES NOT** make the purchase. Lina's funds **cannot be less than 0**.

The shopping ends when the "**`mall.Exit`**" command is given. When this happens, you need to **print the number of purchases made and the money** that Lina has left.

## Input Data

The input data must be read from the console. The **first line** of the input will indicate the **amount that Lina has before starting to purchase**. On each of the following lines there will be a particular command. After you read the command "**`mall.Enter`**", on each of the following lines you will be given strings holding **information regarding the purchases / actions** that Lina wants to perform. These strings will keep being passed, until the "**`mall.Exit`**" command is given.

Always only one "**`mall.Enter`**" command will be given, as well as only one "**`mall.Exit`**" command.

## Output Data

The output data must be **printed on the console**.
When shopping is over, you must print on the console a particular output depending on what purchases have been made.
- If **no purchases have been made** – "**No purchases. Money left: {remaining funds} lv.**"
- If **at least one purchase** is made – "**{number of purchases} purchases. Money left: {remaining funds} lv.**"

**The funds** must be printed with **accuracy of up to 2 symbols after the decimal point**.

## Constraints

- Money is a **float** number within the range: [**0 - 7.9 x 10<sup>28</sup>**].
- The number of strings between "**`mall.Enter`**" and "**`mall.Exit`**" will be within the range: [**1-20**].
- The number of symbols in each string that represents a command will be within the range: [**1-20**].
- Allowed execution time: **0.1 seconds**.
- Allowed memory: **16 MB**.

## Sample Input and Output

| Input                       | Output                              | Comments |
|----------------------------|------------------------------------|-----------|
| 110<br>mall.Enter<br>d<br>mall.Exit | 1 purchases. Money left: 80.00 lv. | ‘d’ has an ASCII code of 100. ‘d’ is a small letter, this is why Lina gets a 70% discount. She spends 30% of 100, which is 30 lv. After this purchase, she has: 110 - 30 = 80 lv. |

| Input | Output | Input | Output |
|------|-------|------|-------|
| 110<br>mall.Enter<br>%<br>mall.Exit|1 purchases. Money left: 55.00 lv.| 100<br>mall.Enter<br>Ab<br>\*\*<br>mall.Exit|2 purchases. Money left: 58.10 lv.|

## Hints and Guidelines

We will separate the solution of the problem into three main parts:
- Processing of the **input**.
- **Algorithm** for solving the problem. 
- Formatting the **output**.

Let's examine each of the parts in details.

### Processing the Input Data

The input of our task consists of a few components:
- On the **first line we have all the money** that Lina has for shopping.
- On **each of the following lines** we will have some kind of a **command**.

The first part of reading the input is trivial:

![](/assets/chapter-9-2-images/01.Passion-days-01.png)

But the second one contains a detail that we need to take into consideration. The requirements state the following:

> On each of the following lines there will be a particular command. After you read the command **"mall.Enter"**, on each of the following lines you will be given strings containing information regarding the purchases / actions that Lina wants to perform.

This is where we need to take into consideration the fact that from the **second input line on, we need to start reading commands**, but **only after we read** the command **"mall.Enter"**, we must start processing them. How can we do this? Using a **`while`** or a **`do-while`** loop is a good option. Here is an exemplary solution of how **to skip** all commands before processing the command **"mall.Enter"**:

![](/assets/chapter-9-2-images/01.Passion-days-02.png)

Here is the place to point out that calling **`Console.ReadLine()`** after the end of the loop is used for **moving to the first command** for processing.

### Algorithm for Solving the Problem

The algorithm for solving the problem is a direct one – we continue **reading commands** from the console, **until the command "mall.Exit" is passed**. In the meantime, we **process** each symbol (**`char`**) of each one of the commands according to the rules specified in the task requirements, and in parallel, we **modify the amount** that Lina has, and **store the number of purchases**.

Let's examine the first two problems for our algorithm. The first problem concerns the way we read the commands until we reach the **"mall.Exit"** command. The solution that we previously saw uses a **`while-loop`**. The second problem for the task is to **access each symbol** of the command passed. Keeping in mind that the input data with the commands is **`string`** type, the easiest way to access each symbol inside the strings is via a **`foreach` loop**. This is how the code may look like:

![](/assets/chapter-9-2-images/01.Passion-days-03.png)

### Processing Command Symbols

The next part of the algorithm is to **process the symbols from the commands**, according to the following rules in the requirements:

> * If the symbol is a **capital letter**, Lina gets a 50% discount, which means that you must decrease the money she has by 50% of the numeric representation of the symbol from the ASCII table.
> * If the symbol is a **small letter**, Lina gets a 70% discount, which means that you must decrease the money she has by 30% of the numeric representation of the symbol from the ASCII table.
> * If the symbol is **"%"**,  Lina makes a purchase that decreases her money in half.
> * If the symbol is **"\*"**, Lina withdraws money from her debit card and adds 10 lv. to her available funds.
> * If the symbol is **different from all of the aforementioned**, Lina just makes a purchase without discount, and in this case you should simply subtract the value of the symbol from the ASCII table from her available funds.

Let's examine the problems that we will be facing in the first condition. The first one is how to distinguish if a particular **symbol is a capital letter**. We can use one of the following ways:
* Keeping in mind the fact that the letters in the alphabet have a particular order, we can use the following condition **`action >= 'A' && action <= 'Z'`**, in order to check if our symbol is within the capital letters range.
* We can use the **`char.IsUpper(..)`** function.

The other problem is how **to skip a particular symbol**, if it is not an operation that requires more money that Lina has. This is doable using the **`continue`** construction.

An exemplary condition for the first part of the requirements looks like this:

![](/assets/chapter-9-2-images/01.Passion-days-04.png)

**Note**: the variable “**`purchases`**” is of **`int`** type, in which we store the number of all purchases.

We believe the reader should not have difficulties implementing all the other conditions because they are very similar to the first one.

### Formatting the Output

In the end of our task we must **print** a particular **output**, depending on the following condition:

> * If no purchases have been made – "**No purchases. Money left: {remaining funds} lv.**"
> * If at least one purchase is made – "**{number of purchases} purchases. Money left: {remaining funds} lv.**"

The printing operations are trivial, as the only thing we need to take into consideration is that **the amount has to be printed with accuracy of up to 2 symbols after the decimal point**.

How can we do that? We will leave the answer to this question to the reader.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/519#0](https://judge.softuni.org/Contests/Practice/Index/519#0).
