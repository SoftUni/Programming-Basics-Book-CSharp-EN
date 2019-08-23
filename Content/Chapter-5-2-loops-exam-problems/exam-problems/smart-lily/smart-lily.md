# Problem: Smart Lilly

Lilly is **N years** old. For each **birthday** she receives a present. For each **odd** birthday (1, 3, 5, …, n) she receives **toys**, and for each **even** birthday (2, 4, 6, …, n) she receives **money**. For her **second birthday** she received **10.00 USD**, and **the amount is increased by 10.00 USD for each following even birthday** (2 -> 10, 4 -> 20, 6 -> 30 etc.). Over the years Lilly has secretly saved her money. Lilly's **brother**, in the years when she **received money**, **took 1.00 USD** from each of the amounts. Lilly **has sold the toys**, received over the years, **each one for P USD** and added the sum to the amount of saved money. With the money she wanted to **buy a washing machine for X USD**. Write a program that calculates **how much money she has saved** and if it is enough **to buy a washing machine**.

## Input Data

We read from the console **3 numbers**, each on a separate line:
- Lilly's **age** – **integer** in the range of [**1 … 77**].
- **Price of the washing machine** – number in the range of [**1.00 … 10 000.00**].
- **Unit price of each toy** – **integer** in the range of [**0 … 40**].

## Output Data

Print on the console one single line:

* If Lilly's money is enough:
* “**Yes! {N}**” – where **N** is the remaining money after the purchase
* If the money is not enough:
* “**No! {M}**” – where **M** is the insufficiency amount
* Numbers **N** and **M** must be **formatted up to the second digit after the decimal point**.

## Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">10<br>170.00<br>6</td>
<td valign="top">Yes! 5.00</td>
<td valign="top"><p><strong>For the first birthday</strong> she gets <strong>a toy</strong>; <strong>2nd</strong> -> <strong>10 USD</strong>; 3rd -> toy; <strong>4th</strong> -> 10 + 10 = <strong>20 USD</strong>; 5th -> toy; <strong>6th</strong> -> 20 + 10 = <strong>30 USD</strong>; 7th -> toy; <strong>8th</strong> -> 30 + 10 = <strong>40 USD</strong>; 9th -> toy; <strong>10th</strong> -> 40 + 10 = <strong>50 USD</strong>.<br>
<strong>She has saved</strong>: 10 + 20 + 30 + 40 + 50 = <strong>150 USD</strong>. She sold <strong>5 toys for 6 USD each = 30 USD</strong>.<br>
<strong>Her brother took 1 USD 5 times = 5 USD</strong>. <strong>Remaining amount</strong>: 150 + 30 – 5 = <strong>175 USD</strong>.<br>
<strong>175 &gt;= 170</strong> (price of the washing machine): <strong>she managed</strong> to buy it and is <strong>left</strong> with 175-170 = <strong>5 USD</strong>.
</p></td>
</tr>
<tr>
<td valign="top">21<br>1570.98<br>3</td>
<td valign="top">No! 997.98</td>
<td valign="top"><p><strong>She has saved 550 USD</strong>. She has sold <strong>11 toys,</strong> <strong>3 USD each</strong> = <strong>33 USD</strong>. Her brother <strong> has taken for 10 years 1 USD each year</strong> = <strong>10 USD</strong>. <strong>Remaining amount</strong>: 550 + 33 - 10 = <strong>573 USD</strong>. <br>
<strong>573 &lt; 1570.98</strong>: <strong>she did not manage to</strong> buy a washing machine. The <strong>insufficiency amount</strong> is: 1570.98 - 573 = <strong>997.98 USD</strong>.</p></td>
</tr>
</tbody>
</table>

## Hints and Guidelines

The solution of this problem, like the previous one, can also be split into three parts – **reading** the input data, **processing** them and **printing the output**.

### Reading the Input Data

We can read the input data like this:

![](/assets/chapter-5-2-images/02.Smart-lilly-01.png)

We start again by selecting the appropriate **data types** and names of variables. For the Lilly's years (**`age`**) and the unit price of the toy (**`presentPrice`**) the description requires **integers**. That's why we will use **`int` type**. For the price of the washing machine (**`priceOfWashingMachine`**) we know that it is **real number and we choose `double`**. Of course, we can skip the explicit specification of type, by using **`var`**. In the above code we **declare** and **initialize** (assign value to) the variables.

### Creating Helper Variables

To solve the problem, we will need several helper variables – for the **count of toys** (**`numberOfToys`**), for the **saved money** (**`savedMoney`**) and for the **money received on each birthday** (**`moneyForBirthday`**). The initial value of **`moneyForBirthday`** is 10, because the description says that the first sum, which Lilly gets, is 10 USD:

![](/assets/chapter-5-2-images/02.Smart-lilly-02.png)

### Calculating Savings

![](/assets/chapter-5-2-images/02.Smart-lilly-03.png)

With a **`for` loop** we iterate through every Lilly's birthday. When the leading variable is an **even number**, that means that Lilly **has received money** and we add this money to her total savings. At the same time, we **subtract 1 USD** – the money that her brother took. Then we **increase** the value of the variable **`moneyForBirthday`**, i.e. we increase by 10 the sum that she will receive on her next birthday. On the contrary, when the leading variable is an **odd number**, we increase the count of **toys**. We do the parity check by **division with remainder** (**`%`**) **by 2** – when the remainder is 0, the figure is even, and in case of remainder 1 – it is odd.

We also add the money from the sold toys to Lilly's savings.

![](/assets/chapter-5-2-images/02.Smart-lilly-04.png)

### Formatting and Printing the Output

Finally, we need to print the obtained results, considering the formatting specified in the description, i.e. sum needs to be **rounded up to 2 symbols after the decimal point**:

![](/assets/chapter-5-2-images/02.Smart-lilly-05.png)

In this case we choose to use the **conditional operator (`?:`)** (also called ternary operator), because the record is shorter. Its syntax is as follows: **`operand1 ? operand2 : operand3`**. The first operand needs to be of **bool type** (i.e. to return **`true/false`**). If **`operand1`** returns **`true`**, **`operand2`** will be executed, and if it returns **`false`** – **`operand3`** will be executed. In our case we check if the **money saved** by Lilly is enough for a washing machine. If it is more than or equal to the price of a washing machine, the check **`savedMoney >= priceOfWashingMachine`** will return **`true`** and will print “**Yes! …**”, and if it is less – the result will be **`false`** and “**No! …**” will be printed. Of course, instead of conditional operand, we can use **`if`** checks.

More about the conditional operator: [https://www.dotnetperls.com/ternary](https://www.dotnetperls.com/ternary), [https://msdn.microsoft.com/en-us/library/ty67wk28.aspx](https://msdn.microsoft.com/en-us/library/ty67wk28.aspx).

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/511#1](https://judge.softuni.org/Contests/Practice/Index/511#1).
