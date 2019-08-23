# Problem: Drawing a Fort

Write a program that reads from the console **an integer n** and draws **a fort** **2 * n columns** wide and **n rows** tall, as in the examples below. The left and right columns inside are **n / 2** wide.

## Input Data

The input is **an integer n** within the range [**3 … 1000**].

## Output Data

Print on the console **n** text rows, depicting **the fort** exactly as in the examples.

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|3|<code>&#47;&#94;&#92;&#47;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#47;&#92;&#95;&#47;</code>|4|<code>&#47;&#94;&#94;&#92;&#47;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#47;&#92;&#95;&#95;&#47;</code><br>|

| Input | Output | Input | Output |
|----|----|----|----|
|5|<code>&#47;&#94;&#94;&#92;&#95;&#95;&#47;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&#95;&#95;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#47;&nbsp;&nbsp;&#92;&#95;&#95;&#47;</code><br>|8|<code>&#47;&#94;&#94;&#94;&#94;&#92;&#95;&#95;&#95;&#95;&#47;&#94;&#94;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#95;&#95;&#95;&#95;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#95;&#95;&#47;&nbsp;&nbsp;&nbsp;&nbsp;&#92;&#95;&#95;&#95;&#95;&#47;</code><br>|

## Hints and Guidelines

Let’s solve the problem step by step: read the input, perform some calculations, print the fort roof, print the fort body, print the fort base.

### Reading the Input Data

We can see from the explanation that **the input data** will be only one line which will contain **an integer** within the range [**3 … 1000**]. Therefore, we will use **a variable** of **`int`** type.

![](/assets/chapter-6-2-images/01.Draw-fort-01.png)

After we have declared and initialized the input data, we must divide **the fort** into three parts:
* roof
* body
* base

### Calculating and Printing the Roof

We can see from the examples that **the roof** is made of **two towers** and **a middle part**. Each tower has a beginning **`/`**, middle part **`^`** and an end **`\`**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><strong><code>\</code></strong> is a special symbol in C# and using only it in the method <strong><code>Console.WriteLine(…)</code></strong>, the console will not print it, that's why we show with <strong><code>\\</code></strong> that we want to print exactly this symbol, without being interpreted as a special symbol (this is called <b>"character escaping"</b>).</td>
</tr></table>

The size of the middle part is **`n / 2`**, therefore we can write this value in a new **variable**. It will keep **the size** of **the middle part of the tower**.

![](/assets/chapter-6-2-images/01.Draw-fort-02.png)

Now we declare a second **variable**, in which will keep **the value** of the part **between the two towers**. The middle part of the roofs has a size of **`2 * n - 2 * colSize - 4`**.

![](/assets/chapter-6-2-images/01.Draw-fort-03.png)

In order to print **the roof**, we will use **`new string`**, which takes two parameters **`(char, int)`** and connects a symbol **n** times.

![](/assets/chapter-6-2-images/01.Draw-fort-04.png)

### Printing the Body of the Fort

**The body of the fort** contains a beginning **`|`**, a middle part **`(white space)`** and an end **`|`**. **The middle part** is a blank space with size of **`2 * n - 2`**. The number of **the rows** used for walls can be found in the given parameters: **`n - 3`**. This code prints the body of the fort:

![](/assets/chapter-6-2-images/01.Draw-fort-05.png)

### Printing the Base of the Fort

In order to draw the last but one row, which is a part of the base, we need to print a beginning **`|`**, middle part **`(white space)_(white space)`** and an end **`|`**. In order to do this, we can use the already declared variables **`colSize`** and **`midSize`** again, because we can see from the examples that they are equal to the **`_`** in the roof.

![](/assets/chapter-6-2-images/01.Draw-fort-06.png)

We add **`+ 1`** to the **white spaces**, because we have **one** white space more in the examples.

The structure of **the base of the fort** is the same as the one of **the roof**. It is made of **two towers** and **a middle part**. Each **tower** begins with **`\`**, then a middle part **`_`** and an end **`/`**.

![](/assets/chapter-6-2-images/01.Draw-fort-07.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/513#0](https://judge.softuni.org/Contests/Practice/Index/513#0).
