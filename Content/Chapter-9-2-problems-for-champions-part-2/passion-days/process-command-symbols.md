#### Processing Command Symbols

The next part of the algorithm is to **process the symbols from the commands**, according to the following rules in the requirements:

> - If the symbol is a **capital letter**, Lina gets a 50% discount, which means that you must decrease the money she has by 50% of the numeric representation of the symbol from the ASCII table.
> - If the symbol is a **small letter**, Lina gets a 70% discount, which means that you must decrease the money she has by 30% of the numeric representation of the symbol from the ASCII table.
> - If the symbol is **"%"**,  Lina makes a purchase that decreases her money in half.
> - If the symbol is **"\*"**, Lina withdraws money from her debit card and adds 10 lv to her available funds.
> - If the symbol is **different from all of the aforementioned**, Lina just makes a purchase without discount, and in this case you should simply subtract the value of the symbol from the ASCII table from her available funds.

Let's examine the problems that we will be facing in the first condition. The first one is how to distinguish if a particular **symbol is a capital letter**. We can use one of the following ways:
* Keeping in mind the fact that the letters in the alphabet have a particular order, we can use the following condition **`action >= 'A' && action <= 'Z'`**, in order to check if our symbol is within the capital letters range.
* We can use the **`char.IsUpper(..)`** function.

The other problem is how **to skip a particular symbol**, if it is not an operation that requires more money that Lina has. This is doable using the **`continue`** construction.

An exemplary condition for the first part of the requirements looks like this:

![](/assets/chapter-9-2-images/01.Passion-days-04.png)

**Note**: **`purchases`** is a variable of **`int`** type, in which we store the number of all purchases.

We believe the reader should not have difficulties implementing all the other conditions because they are very similar to the first one.
