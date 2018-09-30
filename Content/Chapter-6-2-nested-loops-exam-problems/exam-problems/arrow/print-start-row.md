#### Reading the Input Data and Printing the First Row

From the explanation we see that **the input data** will be taken from one row only, which will have **an integer** in the interval [**3 … 1000**]. This is why we will use **a variable** of type **`int`**.

![](/assets/chapter-6-2-images/04.Arrow-01.png)
		
We can divide the figure into **3 parts** - upper, middle and lower. **The upper part** contains two subparts - a first row and a body of the arrow. We can see from the examples that the count of **the outer dots** in the first row and in the body of the arrow is **`(n - 1) / 2`**. We can write this value in **a variable** **`outerDots`**. 

![](/assets/chapter-6-2-images/04.Arrow-02.png)
		
The number of **the inside dots** in the body of the arrow is **`(n - 2)`**. We must make **a variable** named **`innerDots`**, which will contain this value.

![](/assets/chapter-6-2-images/04.Arrow-03.png)
		
We can see from the examples the structure of the first row. We must use the declared and initialized **variables** **`outerDots`** and **`n`**, in order to print **the first row**.

![](/assets/chapter-6-2-images/04.Arrow-04.png)