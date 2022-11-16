# Lab: Web Application "Summator" (Calculator)

Now we are going to create something even more complex, but also more interesting: Web application that **calculates the sum of two numbers**. By **entering two numbers** in the first two text fields and pressing the [**Calculate**] button, **their sum is being calculated** and the result is shown in the third text field.

Pay attention that we are creating **a Web-based application**. This is an application that is available through a web browser, just like your favorite email or news website. The web application is going to have a server side (back-end), which is written in the C\# language with the ASP.NET MVC technology, and a client side (front-end), which is written in the HTML language (this is a language for visualization of information in a web browser).

The **Web application** is expected to look similarly to the following:

![](/assets/chapter-1-images/08.Numbers-sum-web-01.png)

As a difference compared to console applications, which read and write the data in the form of a text on the console, Web applications have **a Web-based user interface**. Web applications **are being loaded from some Internet address** (URL) through a standard web browser. Users write input data in a page, visualized from the web browser, the data is processed on a web server and the results are shown again in a page of the web browser. For our web application we are going to use **the ASP.NET MVC technology**, which allows creating of **web applications with the programming language C\#** in the development environment **Visual Studio**.

## Creating a New ASP.NET MVC Project

In Visual Studio we create **a new C\# project of type “ASP.NET Web Application”** with name **WebApp**:

![](/assets/chapter-1-images/08.Numbers-sum-web-02.png)

We choose as **type** of the application: **“MVC”**:

![](/assets/chapter-1-images/08.Numbers-sum-web-03.png)

## Creating a View \(Web Form\)

We find the file `Views\Home\Index.cshtml`. **The view of the home page** of our web application is inside it:

![](/assets/chapter-1-images/08.Numbers-sum-web-04.png)

We delete the old code from **the file **`Index.cshtml` and write the following code:

![](/assets/chapter-1-images/08.Numbers-sum-web-05.png)

This code **creates a web form with three text boxes and a button in it**. Inside the fields, values are being loaded, which are calculated previously in the object `ViewBag`. The requirement says that with the click of the \[**Calculate**\] button the action `/home/calculate`** \(action **`calculate`** from the **`home`** controller\)** will be called.

Here is how **the file **`Index.cshtml` is supposed to look after the change:![](/assets/chapter-1-images/08.Numbers-sum-web-06.png)

## Writing the Program Code

What remains is to write **the action** that **sums the numbers when clicking the button** \[**Calculate**\]. We open the file `Controllers\HomeController.cs` and we add the following code into the body of `HomeController` class:

![](/assets/chapter-1-images/08.Numbers-sum-web-07.png)

This code implements the “**calculate**” action. It takes two parameters `num1` and `num2` and records them in the objects `ViewBag`, after which **it calculates and records** their sum. The values recorded in `ViewBag` are then **used from the view**, in to be shown in the **three text fields** inside the form for summing numbers in the web page of the application.

Here is how **the file **`HomeController.cs` should look after the change:

## Testing the Application

The application is ready. We can start it with \[**Ctrl+F5**\] and test whether it works:

![](/assets/chapter-1-images/08.Numbers-sum-web-09.png)

Does it look scary? **Don't be afraid!** We have a lot more to learn, to reach the level of knowledge and skills to write web-based applications freely like in the example above, as well as much bigger and much more complex ones. If you don't succeed, there is nothing to worry about, keep moving on. After some time, you will remember with a smile how incomprehensible and exiting your first collision with web programming was. If you have problems with the example above, you can ask for assistance in the SoftUni official **discussion forum** (https://www.reddit.com/r/softuni) or in the SoftUni official **Facebook page** (https://fb.com/softuni.org).

The purpose of both of the above examples \(graphical desktop application and web application\) is not to teach you, but to make you dive a little deeper into programming, **to enhance your interest** towards software development and to inspire you to learn hard. **You have a lot to learn yet**, but it's interesting, isn't it?
