### Example: a triangle of dollars

Write a program , which takes the number **n** and prints **a triangle of dollars**.

|Input|Output|Input|Output|Input|Output
|---|---|---|---|---|---|
|3|<code>$</code><br><code>$ $</code><br><code>$ $ $</code>|4|<code>$</code><br><code>$ $</code><br><code>$ $ $</code><br><code>$ $ $ $</code>|5|<code>$</code><br><code>$ $</code><br><code>$ $ $</code><br><code>$ $ $ $</code><br><code>$ $ $ $ $</code>|

#### Hints

The problem is **similar** to the draw **a rectangle** and **square** ones. We will use **nested loops** again, but there is **a  catch** here. The difference is that **the number of columns** which we need to print depends on **the row**, on which we are and not on the input number **`n`**. From the example input and output data we see that **the count of the dollars depends** on which **row** we are on at the moment of the printing, i.e. 1 dollar means first row, 3 dollars mean third row and so on. Let's see the following example in detail. We see that **the variable** of **the nested** loop is connected with the variable of **the outer**. This way our program prints the triangle.

![](/assets/chapter-6-images/04.Triangle-of-dollars-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/512#3](https://judge.softuni.bg/Contests/Practice/Index/512#3).
