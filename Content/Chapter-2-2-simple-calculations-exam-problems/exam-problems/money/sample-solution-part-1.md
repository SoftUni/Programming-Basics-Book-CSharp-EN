#### Solution - Part I

After we have build an idea on how to solve the task and we have chosen the data structures that we are going to use, it is time to get to **writing the code**. As in the previous tasks, we can divide the solution into three smaller tasks:
* **Reading input from the console**.
* **Doing the calculations**.
* **Printing the output** on the console.

**We declare the variables** that we are going to use and again we have to choose **meaningful names**, which are going to give us hints about the values they store. We initialize their values: with **`Console.ReadLine(…)`**, we read the input numbers from the console and convert the string entered by the user to **`int`** or **`double`**. 

![](/assets/chapter-2-2-images/04.Money-01.png)

We do the necessary calculations: 

![](/assets/chapter-2-2-images/04.Money-02.png)

![](/assets/chapter-2-2-images/04.Money-03.png)

Finally, we **calculate the commission fee value** and **subtract it from the sum in Euro**. Let's pay attention to the way we could write this: **`Euro -= commission fee * Euro`** is the short way to write **`Euro = Euro - (commission fee * Euro)`**. In this case, we use **a combined assignment operator** (**`-=`**) that **subtracts the value of the operand to the right from the one to the left**. The operator for multiplication (**`*`**) has a **higher priority** than the combined operator, this is why, the expression **`commission fee * Euro`** is performed first and then its value is divided. (you can read more about operators here [Svetlin Nakov, Veselin Kolev and team: "Programming Basics with C#", page. 150](http://www.introprogramming.info/intro-csharp-book/read-online/glava3-operatori-i-izrazi/#_Toc298863965))
