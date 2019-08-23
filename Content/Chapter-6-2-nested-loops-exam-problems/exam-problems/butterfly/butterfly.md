# Problem: Butterfly

Write a program that takes **an integer n** from the console and draws **a butterfly** **2 * n - 1 columns** wide and **2 * (n - 2) + 1 rows** tall, as in the examples below. **The left and right parts** are **n - 1 wide**.

## Input Data

The input is **an integer n** within the range [**3 … 1000**].

## Output Data

Print on the console **2 * (n - 2) + 1** text rows, depicting **the butterfly** as in the examples.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3|<code>&#42;&#92;&nbsp;&#47;&#42;</code><br><code>&nbsp;&nbsp;&#64;&nbsp;&nbsp;</code><br><code>&#42;&#47;&nbsp;&#92;&#42;</code><br>|5|<code>&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#92;&nbsp;&#47;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&#64;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#47;&nbsp;&#92;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;</code><br>|

| Input | Output |
| --- | --- |
|7|<code>&#42;&#42;&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#92;&nbsp;&#47;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#92;&nbsp;&#47;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;&#42;&#42;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#64;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#47;&nbsp;&#92;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#47;&nbsp;&#92;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;&#42;&#42;</code><br>|

## Hints and Guidelines

We can see in the explanation that **the input data** will be taken from only one row which contains **an integer** within the range [**3 … 1000**]. This is why we will use **a variable** of **`int`** type.

![](/assets/chapter-6-2-images/02.Butterfly-01.png)

### Divide the Figure into Parts

We can divide the figure into 3 parts – upper wing, body and lower wing. In order to draw the upper wing, we need to divide it into parts – beginning **`*`**, middle part **`\ /`** and end **`*`**. After looking at the examples we find out that the beginning is with size **`n - 2`**.

![](/assets/chapter-6-2-images/02.Butterfly-02.png)

We can also see that the upper wing is with size **`n - 2`**, and that's why we can make a loop which repeats **`halfRowSize`** times.

![](/assets/chapter-6-2-images/02.Butterfly-03.png)

We can see in the examples that on an even row we have a beginning **`*`**, a middle part **`\ /`** and an end **`*`**, and on an odd row – beginning **`-`**, middle part **`\ /`** and an end **`-`**. This is why we must add an **`if-else`** condition to check if the row is even or odd and then to draw one of the two types of rows.

![](/assets/chapter-6-2-images/02.Butterfly-04.png)

### Printing the Body and the Lower Wing 

In order to create **the body of the butterfly** we can use **the variable** **`halfRowSize`** again and print on the console exactly **one** row. The body structure begins with **`(white space)`**, middle **`@`** and ends with **`(white space)`**.

![](/assets/chapter-6-2-images/02.Butterfly-05.png)

Now we need to print the lower wing, which is the same as the upper one.

![](/assets/chapter-6-2-images/02.Butterfly-06.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/513#1](https://judge.softuni.org/Contests/Practice/Index/513#1).
