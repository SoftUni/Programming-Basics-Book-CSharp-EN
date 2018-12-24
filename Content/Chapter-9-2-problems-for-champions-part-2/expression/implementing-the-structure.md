#### Implementing the Proposed Idea

Let's examine the actions that we need to undertake in the relevant cases that we defined:
* If our symbol is an **operator**, then the only thing we need to do is to **set a new value for the `expressionOperator` variable**.
* If our symbol is a **digit**, then we need to **change the current result of the expression depending on the current operator**, i.e. if  **`expressionOperator`** is a **`-`**, then we must **decrease the result by the numerical representation of the current symbol**. We can get the numerical representation of the current symbol via the formula that we used upon checking the condition for this case (the **`[ASCII code of our symbol] - [the ASCII code of the symbol `0`] = [the digit that represents the symbol]`**)

![](/assets/chapter-9-2-images/02.X-expression-07.png)

* If our symbol is a **`(`**, this indicates the **beginning of a sub-expression** (an expression in brackets). By definition, **the sub-expression must be calculated before modifying the result of the whole expression** (the actions in brackets are performed first). This means that we will have a local result for the sub-expression and a local operator.

![](/assets/chapter-9-2-images/02.X-expression-08.png)
