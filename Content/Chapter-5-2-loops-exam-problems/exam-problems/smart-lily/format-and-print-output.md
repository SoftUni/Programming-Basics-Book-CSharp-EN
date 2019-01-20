#### Formatting and Printing The Output

Finally we need to print the received results, taking into account the formatting specified in the description, i.e. sum needs to be  **rounded up to 2 symbols after the decimal point**:

![](/assets/chapter-5-2-images/02.Smart-lilly-05.png)

In this case we choose to use the **conditional operator (`?:`)** (also called ternary operator), because the record is shorter. Its syntax is as follows: **`operand1 ? operand2 : operand3`**. First operand need to be **boolean type** (i.e. to return **`true/false`**). If **`operand1`** returns **`true`**, **`operand2`** will be executed, and if it returns **`false`** – **`operand3`** will be executed. In our case we check if the **money saved** by Lilly is enough for a washing machine. If it is more than or equal to the price of a washing machine, the check **`savedMoney >= priceOfWashingMachine`** will return **`true`** and will print  „**Yes! …**“, and if it is less – the result will be **`false`** and “**No! …**” will be printed. Of course, instead of conditional operand, we can use **`if`** checks.

More about the conditional operator: [https://www.dotnetperls.com/ternary](https://www.dotnetperls.com/ternary), [https://msdn.microsoft.com/en-us/library/ty67wk28.aspx](https://msdn.microsoft.com/en-us/library/ty67wk28.aspx). 

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#1](https://judge.softuni.bg/Contests/Practice/Index/511#1).
