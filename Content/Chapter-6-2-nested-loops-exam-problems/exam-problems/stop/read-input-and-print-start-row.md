#### Reading the Input Data and Printing the First Row

We can see from the explanation that **the input data** will be taken from only one row which contains **an integer** in the interval [**3 … 1000**]. Therefore we will use **a variable** of type **`int`**.

![](/assets/chapter-6-2-images/03.Stop-01.png)

We can **divide** the figure into **3 parts** - upper, middle and lower. **The upper part** contains two subparts - first row and rows in which the sign widens. **The first row** is made of a beginning **`.`**, middle **`_`** and an end **`.`**. After looking at the examples we can say that the beginning is **`n + 1`** columns wide so it is good to write this **value** in a separate **variable**.

![](/assets/chapter-6-2-images/03.Stop-02.png)
		
We must also create a second **variable**, in which we will keep **the value** of **the middle of the first row**, which is **`2 * n + 1`** columns wide.

![](/assets/chapter-6-2-images/03.Stop-03.png)
		
After we have declared and initialized the two variables we can print the first row on the console.

![](/assets/chapter-6-2-images/03.Stop-04.png)