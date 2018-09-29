## Nested Loops

Nested loops are a construction where **in the body of one loop** (outer) **another loop is run** (inner). For each iteration of the outer loop, **the whole** of the inner loop is executed. This happens in the following way:

 - When nested loops start executing **the outer loop starts** first: the controlling variable is **initialized** and after a check for ending the loop the code in its body is executed.
 - After this **the inner loop is executed**. The controlling variables start position is initialized, a check for ending the loop is made and the code in its body is executed.
 - When reaching the set value for  **ending the loop**, the program goes back one step up and continues executing the previous (outer) loop. The controlling variable of the outer loop changes with one step, a check is made to see if the condition for ending the loop is met and **a new execution of the nested (inner) loop is started**.
 - This is repeated until the variable of the outer loop meets the condition to **end the loop**.
