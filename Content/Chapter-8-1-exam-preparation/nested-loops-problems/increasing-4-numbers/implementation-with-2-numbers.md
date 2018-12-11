#### Implementation with 2 Numbers

We will most easily solve the problem if we logically divide it **in parts**. If we are required to draw all the rows from a number between **`a`** and **`b`**, we will do it with **one loop** that takes all the numbers from **`a`** to **`b`**. Let's think how we make this with **two-number rows**. The answer is easy - we will use **nested loops**.

![](/assets/chapter-8-1-images/11.Increasing-4-numbers-02.png)

We can test the uncomplete program to see if it's true so far. It must print all pairs of numbers **`i`**, **`j`** for which **`i ≤ j`**.

Since each **next number** of the row must be **greater** than **the previous one**, the second loop will revolve around **`i + 1`** (the next greater number). Accordingly, if **there is no sequence** of two incremental numbers (**`a`** and **`b`** are equal), the second loop **will not be fulfilled** and nothing will be printed on the console.
