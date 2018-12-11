#### Print Middle Rows

From the examples we see that **the middle** of the figure always has **odd number** rows. Note that when an **even number** is set, the number of rows is equal to **the previous odd** (2 -> 1, 4 -> 3, etc.). We create a variable that represents the number of rows that will have our rectangle and correct it if the number **`n` is even**. Then we will draw a **rectangle without the asterisks**. Each row has for **the beginning and the end** the symbol **`%`** and between them **2 * n - 2** empty spaces (the width is **`2 * n`** and we subtract 2 for the two percent at the end). Do not forget to move the code for the **last line after the loop**.

![](/assets/chapter-8-1-images/10.Rectangle-with-stars-03.png)

We can **start and test the code so far**. Everything without the two asterisks in the middle should work correctly.
