#### Calculating and Printing the Roof

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