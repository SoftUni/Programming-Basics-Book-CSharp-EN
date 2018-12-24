#### Calculating the Sub-expression Value

After that, in order to **calculate the sub-expression value** we will use the same methods that we used for calculating the main expression - we use a **`while` loop** to **read symbols** (until we reach an **`)`** symbol). Depending on whether the read symbol is a number or an operator, we modify the result of the sub-expression. The implementation of these operations is identical to the  above described implementation for calculating expressions. This is why we believe the reader will be able to easily handle it.

After finishing the result calculation for our sub-expression, we **modify the result of the whole expression** depending on the value of the **`expressionOperator`**.

![](/assets/chapter-9-2-images/02.X-expression-09.png)
