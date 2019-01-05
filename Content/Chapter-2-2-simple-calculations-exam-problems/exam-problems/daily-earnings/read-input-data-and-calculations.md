#### Reading the Input Data and Doing the Calculations

Again: after we have an idea on how to solve the problem and we have considered the data types that we are going to use, we can start **writing the program**. As in the previous tasks, we can divide the solution into three smaller tasks: 
* **Reading the input from the console**.
* **Doing the calculations**.
* **Printing the output** on the console.

**We declare the variables** that we are going to use by trying to choose **meaningful names**. With **`Console.ReadLine(…)`** we read the input numbers from the console and we **convert** the input string to **`int`** or **`double`** with **`int/double.Parse(…)`**.

![](assets/chapter-2-2-images/05.Daily-earnings-01.png)

We do the calculations:  

![](assets/chapter-2-2-images/05.Daily-earnings-02.png)

We could write an expression that calculates the annual income without brackets as well. As multiplication is an operation that has a higher priority over addition, it will be performed first. Despite that, **writing brackets is recommended** when using more operators, as this way the code is **easily readable** and chances of making a mistake are smaller.
