# Methods with Parameters

Frequently in order to solve a problem, the method with which we do this needs **additional information**, which depends on its purpose. This is precisely the information that **the method parameters** are its behaviour depends on them. 

## Using Parameters in Methods

As we observed above, **the parameters can be zero, one or more**. When declaring them you should divide them with a comma. They can be of every type (**`int`**, **`string`** etc.), and there is an example below to show how they can be used by the method.

**Declaring** the method and its **list** of **parameters**, after which writing the code, which the method executes.

![](/assets/chapter-10-images/05.Method-parameters-01.png)

After that **invoke** the method and **give it set values**:

![](/assets/chapter-10-images/05.Method-parameters-02.png)

When **declaring parameters** we can use **different** types of variables, and we should be careful that every parameter has **type** and **name**. It is important to note that when invoking the method we must feed it **values** for the parameters in **the order**, in which they are **declared**. If the parameters are first **`int`** and after that **`string`**, when invoking the method we can't give it firs a **`string`** and then **`int`**. We can only change places of given parameters if we writh the name of the parameter beforehand, as you will see below in one of the examples. This is generally not good practice!

Let's look at the example for declaring a method, which has several parameters of different types.

![](/assets/chapter-10-images/05.Method-parameters-03.png)

## Example: Sign of an Integer Number

Create a method which prints the sign of an integer n.

### Sample Input and Output

| Input | Output |
| --- | --- |
|2|The number 2 is positive.|
|-5|The number -5 is negative.|
|0|The number 0 is zero.|

### Hints and Guidelines

The first step is **creating** a method and giving it a descriptive name, e.g. **`PrintSign`**. This method will have only one parameter of type **`int`**. 

![](/assets/chapter-10-images/06.Print-sign-01.png)

The next step is **implementing** the logic by which the program will check what the sign of the number is. You can see from the examples that there are three cases – the number is larger than, equal to or lower than zero, which means that we'll make three verifications in our method. 

The next step is to read the input number and to invoke the new method from the body of the **`Main`** method.

![](/assets/chapter-10-images/06.Print-sign-02.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/594#1](https://judge.softuni.bg/Contests/Practice/Index/594#1).

## Optional Parameters

C# supports using **optional** parameters. They allow **missing** parameters when invoking the method. Their declaring is done by **providing default value** in the description of the parameter.

The following example illustrates using optional parameters:

![](/assets/chapter-10-images/07.Optional-parameters-01.png)

The shown method **`PrintNumbers`** can be invoked in one of several ways:

![](/assets/chapter-10-images/07.Optional-parameters-02.png)

## Example: Printing a Triangle

Create a method which prints a triangle as in the examples.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3|1<br>1 2<br>1 2 3<br>1 2<br>1|4|1<br>1 2<br>1 2 3<br>1 2 3 4 <br>1 2 3<br>1 2<br>1|

### Hints and Guidelines

Before creating a method to print a row with a given beginning and an end, we must read the input number from the console. After that we choose a meaningful name, which describes its purpose, e.g. **`PrintLine`**, and implement it.

![](/assets/chapter-10-images/08.Print-triangle-01.png)

From the drawing exercises we can remember, that it is good practice **to divide the figure into several parts**. to make it easier we will divide the triangle into three parts – upper, middle and lower.

The next step is to print **the upper half** of the triangle using a loop:

![](/assets/chapter-10-images/08.Print-triangle-02.png)

Then we print **the middle line**:

![](/assets/chapter-10-images/08.Print-triangle-03.png)

In the end we print **the lower part** of the triangle, but this time the loop step decreases.

![](/assets/chapter-10-images/08.Print-triangle-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/594#2](https://judge.softuni.bg/Contests/Practice/Index/594#2).

## Example: Draw a Filled Square

Print on the console a filled square with side n, As in the examples.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4|<code>--------</code><br><code>-\\/\\/\\/-</code><br><code>-\\/\\/\\/-</code><br><code>--------</code>|5|<code>----------</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>----------</code>|

### Hints and Guidelines

The first step is to read the input from the console. After that we need to create a method, which will print the first and the last rows because they are the same. Let's remember that we must give it **a descriptive name** and give it as **a parameter** the length of the side. We will use the constructor **`new string`**. 

![](/assets/chapter-10-images/09.Draw-filled-square-01.png)

Our next step is to create a method, which will draw the middle rows in the console. Again give it a descriptive name i.e. **`PrintMiddleRow`**.

![](/assets/chapter-10-images/09.Draw-filled-square-02.png)

In the end invoke the methods in the **`Main()`** method of the program in order to draw the whole square:

![](/assets/chapter-10-images/09.Draw-filled-square-03.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/594#3](https://judge.softuni.bg/Contests/Practice/Index/594#3).
