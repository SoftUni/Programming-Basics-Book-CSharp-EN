#### Writing the Program Code

What remains is to write **the action** that **sums the numbers when clicking the button** [**Calculate**]. We open the file **`Controllers\HomeController.cs`** and we add the following code into the body of **`HomeController`** class:

![](/assets/chapter-1-images/08.Numbers-sum-web-07.png)

This code implements the “**calculate**” action. It takes two parameters **`num1`** and **`num2`** and records them in the objects **`ViewBag`**, after which **it calculates and records** their sum. The values recorded in **`ViewBag`** are then **used from the view**, in to be shown in the **three text fields** inside the form for summing numbers in the web page of the application.

Here is how **the file `HomeController.cs`** should look after the change:

![](/assets/chapter-1-images/08.Numbers-sum-web-08.png)
