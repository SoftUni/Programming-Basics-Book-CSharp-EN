### Nested Loops - Example

Here is an **example**, which illustrates nested loops. The aim is again to print a rectangle made of **`n`** * **`n`** stars, in which for each row a loop iterates from **1** to **`n`**, and for each column a nested loop is executed from **1** to **`n`**:

![](/assets/chapter-6-images/00.Nested-loops-01.png)

Let us look at the example above. After initializing **the first (outer) loop**, its **body**, which contains **the second (nested) loop** starts executing. By itself it prints on a row **`n`** number of stars. After **the inner** loop **finishes** executing at the first iteration of the outer, **the first loop will continue**, i.e. it will print an empty row in the console. **After this** the variable of **the first** loop will be **renewed** and the whole **second** loop will be executed again. The inner loop will execute as many times as the body of the outer loop executes, in this case **`n`** times.
