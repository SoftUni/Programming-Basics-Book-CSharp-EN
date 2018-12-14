#### Wrong Implementation

Here is **a wrong solution** that looks right at first look:

![](/assets/chapter-7-images/00.Nested-and-break-desired-result-02.png)

If we leave our program that way, our result will be as follows:

![](/assets/chapter-7-images/00.Nested-and-break-undesired-result-01.png)

Why is it so? As we can see, the result is **missing "1 1"**. When the program reaches that point that **`i = 1`** and **`j = 1`**, it enters the **`if`** check and executes the **`break`** operation. In this way, it **goes out of the inner loop**, but then continues the performance of the outer one. **`i`** grows, the program enters the internal loop and prints the result.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>When we use the <b><code>break</code></b> in <b>nested loop</b> , it interrupts the execution of the inner loop <b>only</b>.</td>
</tr></table>
