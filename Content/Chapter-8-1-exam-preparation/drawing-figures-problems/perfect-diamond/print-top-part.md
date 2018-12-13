#### Print the Top Part of the Diamond

We start painting **the top half** of the diamond. We clearly see that **each row** starts with a **few empty spaces and <code>*</code>**. If we take a closer look, we will notice that **the empty spaces** are always equal to **`n - the number of lines`** (the first row is n-1, the second - n-2, etc.) We will start by drawing the number **empty spaces**, and the **first asterisk**. Let's not forget to use **`Console.Write(…)`** instead of **`Console.WriteLine(…)`** to stay on **the same line**. At the end of the line we write **`Console.WriteLine(…)`** to go to **a new line**. Notice that we start counting from **1, not from 0**. Next, we will only add a few times **`-*`** to **finish the line**.

Here is a snippet of the **top of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-02.png)

It remains to **complete each line** with the required number **`-*`** elements. On each row we have to add **`i - 1`** such **items** (on the first 1-1 -> 0, the second -> 1, etc.)

Here is the complete code for drawing **the top of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-03.png)
