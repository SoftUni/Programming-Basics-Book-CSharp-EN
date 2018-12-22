#### Processing the Input Data

The input of our task consists of a few components:
- On the **first row we have all the money** that Lina has for shopping.
- On **each of the following rows** we will have some kind of **command**.

The first part of reading the input is trivial:

![](/assets/chapter-9-2-images/01.Passion-days-01.png)

But the second one contains a detail that we need to take into consideration. The requirements says the following:

> On each of the following rows there will be a particular command. After you receive the command **"mall.Enter"**, on each of the following rows you will receive strings containing information regarding the purchases / actions that Lina wants to perform.

This is where we need to take into consideration the fact that from the **second row on, we need to start reading commands**, but **only after we receive** the command **"mall.Enter"**, we must start processing them. How can we do this? Using a **`while`** or a **`do-while`** loop is a good option. Here is an exemplary solution of how **to skip** all commands before receiving the command **"mall.Enter"**:

![](/assets/chapter-9-2-images/01.Passion-days-02.png)

Here is the place to point out that calling **`Console.ReadLine()`** after the end of the loop is used for **moving to the first command** for processing.
