# Problem: Drawing a Fort

Write a program which takes **an integer n** and draws **a fort** wide **2 * n columns** and tall **n rows** as in the examples below. The left and right columns inside are wide **n / 2**.

## Input Data

The input is **an integer n** in the interval [**3 … 1000**].

## Output Data

Print on the console **n** rows, depicting **the fort**as in the examples.

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|3|<code>&#47;&#94;&#92;&#47;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#47;&#92;&#95;&#47;</code>|4|<code>&#47;&#94;&#94;&#92;&#47;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#47;&#92;&#95;&#95;&#47;</code><br>|

| Input | Output | Input | Output |
|----|----|----|----|
|5|<code>&#47;&#94;&#94;&#92;&#95;&#95;&#47;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&#95;&#95;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#47;&nbsp;&nbsp;&#92;&#95;&#95;&#47;</code><br>|8|<code>&#47;&#94;&#94;&#94;&#94;&#92;&#95;&#95;&#95;&#95;&#47;&#94;&#94;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#95;&#95;&#95;&#95;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#95;&#95;&#47;&nbsp;&nbsp;&nbsp;&nbsp;&#92;&#95;&#95;&#95;&#95;&#47;</code><br>|

## Reading the Input Data

We can see from the explanation that **the input data** will be only one row which will contain **an integer** in the interval [**3 … 1000**]. Therefore we will use **a variable** of type **`int`**.

![](/assets/chapter-6-2-images/01.Draw-fort-01.png)

After we have declared and initialized the input data we must divide **the fort** into three parts:
* roof
* body
* base

## Calculating and Printing the Roof

We can see from the examples that **the roof** is made of **two towers** and **a middle part**. Each tower has a beginning **`/`**, middle **`^`** and an end **`\`**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><strong><code>\</code></strong> is a special symbol in C# and using only it in the method <strong><code>Console.WriteLine(…)</code></strong>, the console will not print it, that's why we show with <strong><code>\\</code></strong> that we want to print exactly this symbol, without being interpreted as a special symbol (<b>escaping it</b>).</td>
</tr></table>

The size of the middle is **`n / 2`**, therefore we can write this value in a new **variable**. It will keep **the size** of **the middle of the tower**.

![](/assets/chapter-6-2-images/01.Draw-fort-02.png)

Now we declare a second **variable**, which will keep **the value** of the part **between the two towers**. The middle of the roofs size is **`2 * n - 2 * colSize - 4`**.

![](/assets/chapter-6-2-images/01.Draw-fort-03.png)

In order to print **the roof**, we will use **`new string`**, which takes two parameters **`(char, int)`** and connects a symbol **n** times.

![](/assets/chapter-6-2-images/01.Draw-fort-04.png)

## Printing the Body of the Fort

**The body of the fort** contains a beginning **`|`**, a middle part **`(white space)`** and an end **`|`**. **The middle part** of white spaces is **`2 * n - 2`** columns wide. The number of **the rows** for walls can be found in the examples: **`n - 3`**. This code prints the body of the fort:

![](/assets/chapter-6-2-images/01.Draw-fort-05.png)

## Printing the Base of the Fort

In order to draw the second to last row, which is a part of the base, we need to print a beginning **`|`**, middle **`(white space)_(white space)`** and an end **`|`**. In order to do this we can use the already declared variables **`colSize`** and **`midSize`** again, because we can see from the examples that they are equal to the **`_`** in the roof.

![](/assets/chapter-6-2-images/01.Draw-fort-06.png)

We add **`+ 1`** to the **white spaces** , because we have **one** white space more in the examples.

The structure of **the base of the fort** is the same as the one of **the roof**. It is made up of **two towers** and **a middle part**. Each **tower** begins with **`\`**, then a middle **`_`** and an end **`/`**.

![](/assets/chapter-6-2-images/01.Draw-fort-07.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/513#0](https://judge.softuni.bg/Contests/Practice/Index/513#0).
