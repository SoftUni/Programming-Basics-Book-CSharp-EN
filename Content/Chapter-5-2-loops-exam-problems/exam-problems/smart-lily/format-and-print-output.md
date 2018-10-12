#### Formating and Printing The Output

Finally we need to print the received results, taking into account the formating specified in the description, i.e. sum needs to be  **rounded to 2 places after the decimal point**:

![](/assets/chapter-5-2-images/02.Smart-lilly-05.png)

In this case we choose to use the **conditional operator (`?:`)** (also called ternary operator), because the recording is shorter. Its syntax is as follows: **`operand1 ? operand2 : operand3`**. First operand need to be **boolean type** (i.e to return **`true/false`**). If **`operand1`** returns **`true`**, will be executed **`operand2`**, and if it returns **`false`** – **`operand3`**. In our case we check if the **saved money** from Lily is enough for a washing machine. If they are more than or equal to the price of washing machine, the check **`savedMoney >= priceOfWashingMachine`** will return **`true`** and will print  „**Yes! …**“, and if is less – the result will be **`false`** and will print “**No! …**”. Of course, instead of conditional operand, we can use **`if`** checks.

More about the conditional operator: [https://www.dotnetperls.com/ternary](https://www.dotnetperls.com/ternary), [https://msdn.microsoft.com/en-us/library/ty67wk28.aspx](https://msdn.microsoft.com/en-us/library/ty67wk28.aspx). 

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/511#1](https://judge.softuni.bg/Contests/Practice/Index/511#1).
