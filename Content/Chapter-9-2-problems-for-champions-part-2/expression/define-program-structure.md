#### Defining the Program Structure

Now that we already have our starting variables, we must decide **what will be the main structure** of our program. By the requirements we understand that **each expression ends with `=`**, i.e. we must read and process symbols until we reach a **`=`**. This is followed by an accurately written **`while` loop**.

![](/assets/chapter-9-2-images/02.X-expression-05.png)

The next step is the processing of our **`symbol`** variable. We have 3 possible cases for it:
* If the symbol is a **start of a sub-expression placed in brackets** i.e. the found symbol is a **`(`**.
* If the symbol is a **digit between 0 and 9**. But how can we check this? How can we check if our symbol is a digit? We can use for assistance the **ASCII code** of the symbol, via which we can use the following formula: **`[ASCII code of our symbol] - [ASCII code of the symbol 0] = [the digit that represents the symbol]`**. If **the result of this condition is between 0 and 9**, then our symbol is really a **number**.
* If the symbol is an **operator**, i.e. it is **`+`**, **`-`**, **`*`** or **`/`**.

![](/assets/chapter-9-2-images/02.X-expression-06.png)
