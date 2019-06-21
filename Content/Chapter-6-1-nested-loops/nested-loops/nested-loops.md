# Nested Loops – Concepts

A **nested loop** is a construction where **in the body of one loop** (outer one) **stays another loop** (inner one). In each iteration of the outer loop, **the whole** inner loop is executed. This happens in the following way:

* When nested loops start executing, **the outer loop starts** first: the controlling variable is **initialized** and after a check for ending the loop the code in its body is executed.
* After that, **the inner loop is executed**. The controlling variables start position is initialized, a check for ending the loop is made and the code in its body is executed.
* When reaching the specified value for **ending the loop**, the program goes back one step up and continues executing the previous \(outer\) loop. The controlling variable of the outer loop changes with one step, a check is made to see if the condition for ending the loop is met and **a new execution of the nested \(inner\) loop is started**.
* This is repeated until the variable of the outer loop meets the condition to **end the loop**.

## Video: Nested Loops

Watch this video to learn the concepts of nested loops: https://youtu.be/Sj49u6XlzXU.

## Nested Loops – Examples

Here is an **example** that illustrates nested loops. The aim is again to print a rectangle made of `n` \*_ _`n` stars, in which for each row a loop iterates from **1** to `n`, and for each column a nested loop is executed from **1** to \*`n`:

![](/assets/chapter-6-images/00.Nested-loops-01.png)

If we enter `5` as input on the console, the above sample code will print the following output:

![](/assets/chapter-6-images/00.Nested-loops-output.png)

Let's look at the example above. After initializing **the first \(outer\) loop**, its **body**, which contains **the second \(nested\) loop** starts executing. By itself it prints on one row `n` number of stars. After **the inner** loop **finishes** executing at the first iteration of the outer one, **the first loop will continue**, i.e. it will print an empty row on the console. **After that**, the variable of **the first** loop will be **renewed** and the whole **second** loop will be executed again. The inner loop will execute as many times as the body of the outer loop executes, in this case `n` times.
