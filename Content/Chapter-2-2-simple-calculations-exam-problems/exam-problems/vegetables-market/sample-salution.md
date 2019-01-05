#### Solution 

It is time to get to the solution. We can divide it into three smaller tasks:  
* **Reading input from the console**.
* **Doing the calculations**.
* **Printing the output on the console**.

In order to read the input, we declare variables, which we have to name carefully, so that they can give us a hint about the values they store. With **`Console.ReadLine(…)`**, we read values from the console and with the the functions **`int.Parse(…)`** and **`double.Parse(…)`**, we convert the particular string value into **`int`** and **`double`**.

![](/assets/chapter-2-2-images/02.Vegetable-market-01.png)

We do the necessary calculations:  

![](/assets/chapter-2-2-images/02.Vegetable-market-02.png)

The task does not specify special output format, therefore, we just have to calculate the wanted value and print it on the console. As in mathematics and so in programming, division has a priority over addition. However, in this task, first we have to **calculate the sum** of the two received values and then **divide by 1.94**. In order to give priority to addition, we can use brackets. With **`Console.WriteLine(…)`** we print the output on the console. 

![](/assets/chapter-2-2-images/02.Vegetable-market-03.png)

### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/505#1](https://judge.softuni.bg/Contests/Practice/Index/505#1).
