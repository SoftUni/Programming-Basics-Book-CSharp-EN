#### Reading the Input Data and Printing the Upper Wing

We can see in the explanation that **the input data** will be taken from only one row which contains **an integer** in the interval [**3 … 1000**]. This is why we will use **a variable** of type **`int`**.

![](/assets/chapter-6-2-images/02.Butterfly-01.png)

We can divide the figure into 3 parts - upper wing, body and lower wing. In order to draw the upper wing, we need to divide it into parts - beginning **`*`**, middle **`\ /`** and end **`*`**. After looking at the examples we find that the beginning is with size **`n - 2`**.

![](/assets/chapter-6-2-images/02.Butterfly-02.png)

We can also see that the upper wing is with size **`n - 2`**, and that's why we can make a loop which recurs **`halfRowSize`** times.

![](/assets/chapter-6-2-images/02.Butterfly-03.png)

We can see in the examples that on an even row we have a beginning **`*`**, a middle **`\ /`** and an end **`*`**, and on an odd row - beginning **`-`**, middle **`\ /`** and an end **`-`**. This is why we must make an **`if-else`** to check if the row is even or odd and then to draw one of the two types of rows.

![](/assets/chapter-6-2-images/02.Butterfly-04.png)