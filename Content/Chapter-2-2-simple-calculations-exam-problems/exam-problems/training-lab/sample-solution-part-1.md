#### Solution - part I

It is time to go to the solution. We can divide it into three smaller tasks: 
* **Reading input from the console**.
* **Doing the calculations**.
* **Printing the output on the console**.
The first thing we have to do is read the input from the console. With **`Console.ReadLine()`** we read the values from the console and with the function **`double.Parse(…)`** string is converted into **`double`**.

![](/assets/chapter-2-2-images/01.Training-lab-03.png)

Let' s go to the calculations. The special part here is that after having divided the numbers, we have to store only the whole part of the reslt in a variable. 

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>Search in Google!</b> Whenever we have an idea how to solve a particular problem but we do not know how to write it in C# or we are dealing with one that many other people have had before us, the easiest way to solve it is by looking for information on the Internet.</td>
</tr></table>

In this case, we can try with the following search: "[***c# get whole number part of double***](https://www.google.com/?q=c%23+get+whole+number+part+of+double)". One possible way is to use the method **`Math.Truncate(…)`** as it works with **`double`** data types. For the number of rows and columns we create variables of the same type.

![](/assets/chapter-2-2-images/01.Training-lab-04.png)