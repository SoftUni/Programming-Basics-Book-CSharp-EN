# Drawing Figures – Problems

**The fifth** problem of the "Programming Basics" Practical Exam requires **using of one or several nested loops for drawing** a figure on the console. Logical reflections, simple calculations and checks may be required. The problem examines the students' ability to think logically and to construct simple algorithms to solve problems, ie. to think algorithmically. Let's take a few examples of exam problems.


## Problem: Perfect Diamond

Write a program that reads an integer **n** from the console and draws **a perfect diamond** of size **n** as in the examples below.

### Input

The input is an integer **n** in the range [**1 … 1000**].

### Output

The diamond should be printed on the console as in the examples.

### Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|2|<code>&nbsp;&#42;&nbsp;</code><br><code>&#42;-&#42;</code><br><code>&nbsp;&#42;&nbsp;</code>|3|<code>&nbsp;&nbsp;&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;&nbsp;&nbsp;</code><br>|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4|<code>&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;</code><br>|5|<code>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;-&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;-&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;&nbsp;</code><br>|

### Tips and Tricks, and Reading the Input Data

In the task of drawing figures the most important thing to consider is **the sequence** in which we will draw. Which items are **repeated** and with what **steps**. We can clearly see that **the top and bottom** parts of the diamond are **same**. The easiest way to solve the problem is by doing **a loop** that draws the **upper part**, and then another **one loop** that draws the **bottom part** (opposite to the top).

We will read the number **n** from the console.

![](/assets/chapter-8-1-images/09.Perfect-diamond-01.png)

### Print the Top Part of the Diamond

We start painting **the top half** of the diamond. We clearly see that **each row** starts with a **few empty spaces and <code>*</code>**. If we take a closer look, we will notice that **the empty spaces** are always equal to **`n - the number of lines`** (the first row is n-1, the second - n-2, etc.) We will start by drawing the number **empty spaces**, and the **first asterisk**. Let's not forget to use **`Console.Write(…)`** instead of **`Console.WriteLine(…)`** to stay on **the same line**. At the end of the line we write **`Console.WriteLine(…)`** to go to **a new line**. Notice that we start counting from **1, not from 0**. Next, we will only add a few times **`-*`** to **finish the line**.

Here is a snippet of the **top of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-02.png)

It remains to **complete each line** with the required number **`-*`** elements. On each row we have to add **`i - 1`** such **items** (on the first 1-1 -> 0, the second -> 1, etc.)

Here is the complete code for drawing **the top of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-03.png)

### Print the Bottom Part of the Diamond

To draw the **bottom part** of the diamond, we have to reverse **the upper part**. We will count from **`n - 1`**, because if we start from **`n`**, we will draw the middle row twice. Do not forget to change **the step** from **`++` to `--`**.

Here is the code for drawing **the bottom part of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-04.png)

It remains **to assemble the whole program** by first reading the input, printing the top part of the diamond and then the bottom part of the diamond.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#8](https://judge.softuni.bg/Contests/Practice/Index/516#8).


## Problem: Rectangle with Stars

Write a program that reads from the console an integer **n** and draws a **rectangle** with size **n with two asterisks centered** as in the examples below.

### Input

The input is an integer **n** in the range [**2 … 1000**].

### Output

The rectangle should be printed on the console as in the examples.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|2|<code>&#37;&#37;&#37;&#37;</code><br><code>&#37;&#42;&#42;&#37;</code><br><code>&#37;&#37;&#37;&#37;</code><br>|3|<code>&#37;&#37;&#37;&#37;&#37;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&#42;&#42;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&#37;&#37;&#37;&#37;&#37;</code><br>|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4|<code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&#42;&#42;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br>|5|<code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&#42;&#42;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br>|

### Reading the Input Data and Print the First and the Last Rows

We read the input data.

![](/assets/chapter-8-1-images/10.Rectangle-with-stars-01.png)

The first thing we can easily notice is that **the first and last rows** contain **`2 * n`** symbols **`%`**. We will start with this and then draw the middle of the rectangle.

![](/assets/chapter-8-1-images/10.Rectangle-with-stars-02.png)

### Print Middle Rows

From the examples we see that **the middle** of the figure always has **odd number** rows. Note that when an **even number** is set, the number of rows is equal to **the previous odd** (2 -> 1, 4 -> 3, etc.). We create a variable that represents the number of rows that will have our rectangle and correct it if the number **`n` is even**. Then we will draw a **rectangle without the asterisks**. Each row has for **the beginning and the end** the symbol **`%`** and between them **2 * n - 2** empty spaces (the width is **`2 * n`** and we subtract 2 for the two percent at the end). Do not forget to move the code for the **last line after the loop**.

![](/assets/chapter-8-1-images/10.Rectangle-with-stars-03.png)

We can **start and test the code so far**. Everything without the two asterisks in the middle should work correctly.

### Adding Stars in the Center of the Rectangle

Now, **in the body** of the loop let's add the **asterisks**. We'll check if we're on the **middle row**. If we are in the middle, we will draw **the row** together **with the asterisks**, if not - we will draw **a normal row**. The line with the asterisks has **`n - 2` empty spaces** (**`n`** is half the length and we remove the asterisk and the percentage), **two stars** and again **`n - 2` empty spaces**. We leave from the check the two percent at the beginning and at the end of the row.

![](/assets/chapter-8-1-images/10.Rectangle-with-stars-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#9](https://judge.softuni.bg/Contests/Practice/Index/516#9).
