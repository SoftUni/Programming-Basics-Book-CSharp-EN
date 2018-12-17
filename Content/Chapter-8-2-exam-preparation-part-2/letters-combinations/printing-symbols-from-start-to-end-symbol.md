#### Printing All Symbols from Start to End

Let's think of how we can achieve the **end result**. In case the task requirement is to print all symbols, from the starting to the end one (by skipping a particular letter), what should we do? 

The easiest and most efficient way is to use a **loop**, by passing through **all symbols** and printing those that are **different** from the **letter** that we need to skip. One of the advantages of C# is that we have the opportunity to use a different data type for a loop variable:

![](/assets/chapter-8-2-images/06.Letters-02.png)

The result of running the code is all letters from **а** to **z** included, printed on a single row and separated by intervals. Does this look like the end result of our task? We must find a **way** to print **3 symbols**, as required, instead of **1**. Running such a program very much looks like a slot machine. We often win in slots, if we arrange a few identical symbols on a row. Let's say that the machine has space for three symbols. When we **stop** on a particular **symbol** on the first place, the other two places will **continue** rolling symbols among all possible ones. In our case, **all possible symbols** are the letters from the starting to the end one, entered by the user, and the solution of our program is identical to the way a slot machine works.
