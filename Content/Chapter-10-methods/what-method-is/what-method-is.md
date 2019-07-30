# What Is a "Method"?

Up until now we found out that when **writing** the code of a program that solves a problem, it is **easier** to **divide** the task into **parts**. Each part fulfills **a given action** and this way it is not only **easier** to solve the task, but the **readability** of the code and checking for mistakes is significantly better.

Each piece of code that executes some functionality and has been separated logically can take the functionality of the method. This is exactly what **methods are – pieces of code with names** given by us in a certain way, which can be **called** as many times as we need them.

A method can be called as many times, as we think we need, in order to solve a problem. This **saves** us repeating the same code over and over again, and also **reduces** the possibility to make a mistake when correcting the code.

## Simple Methods

**Simple** methods are used for performing a certain **action** that **helps** to solve a given problem. These actions can be printing a string on the console, doing a verification, executing a loop, etc.

Let's see the following example of a **simple method**:

```csharp
static void PrintHeader()
{
    Console.WriteLine("-----------");
}
```

This method prints a header, which is a sequence of the **`-`** symbol. Because of this, its name is **`PrintHeader`**. The parentheses **`( `** and **`)` always** follow the name, no matter what the method is called. We will later see how to name the methods we work with, but for now, we will only say that it is important for **its name to describe the action** that the method is doing.

**The body** of the method contains **the program code**, which is between the curly brackets **`{`** and **`}`**. These brackets **always** follow its **declaration** and between them we write the code, which solves the problem described by the method's name.

To **call this method**, we just write its **name**, along with `()` like it is shown below:
```csharp
PrintHeader();
```

A method should be **called from a code inside another method**, e.g. from the `Main()` method of the C# program:
```csharp
static void Main()
{
    PrintHeader();
}
```

## Why Use Methods?

So far we determined that methods help with **dividing larger programs into smaller parts**, which leads to **easier solving** of the problem in question. This makes our program not only better structured and easier to read, but more understandable as well.

By using methods, we **avoid repeating** code. **Repetition** is **bad** practice, because it **complicates maintaining** the program and leads to errors. If a certain part of our code can be found more than once in the program and we need to change it, the changes must be made in all of the repetitions of the code in question. There is a great probability to miss a spot where correction is needed, which would lead to incorrect behavior of the program. This is the reason why it is a **good practice** to use a certain fragment of code **more than once** in our program, to **define it as a separate method**.

Methods make it **possible** to use certain **code multiple** times. With solving more and more problems, you will find that using already existing methods saves a lot of time and effort.

## Declaring Methods

In C# you can **declare** methods inside a class, i.e. between the opening **`{`** and closing **`}`** brackets of the class. Declaring is registering the method in the program, so that it can be recognized in the rest of it. The best-known example is the **`Main(…)`** method, which we use in every program that we write.

![](/assets/chapter-10-images/02.Declaring-methods-01.png)

With the next example we will look at the mandatory elements in the declaration of a method.

![](/assets/chapter-10-images/02.Declaring-methods-02.png)

* **Type of the returned value**. In this case the type is **`double`**, which means that the method will **return a result**, which is of **`double`** type. The returned value can be **`int`**, **`double`**, **`string`** **etc.**, and also **`void`**. If the type is **`void`**, this means that the method **doesn't return** a result, but only **does a particular operation**.
* **Method name**. The name of the method is **defined by us**, but we shouldn't forget that it has to **describe the function**, which is executed by the code in its body. In the example the name is **`GetSquare`**, which tells us that this method is made to find the area of a square.
* **Parameters list**. It is declared between the parentheses **`(`** and **`)`** that we write after its name. This is where we list all the **parameters** that the method will use. There can be **only one** parameter, **multiple** ones or it could be an **empty** list. If there aren't any parameters, we will write only the parentheses **`()`**. In this example we declare the parameter **`double num`**.
* **`static`** declaration in the method description. For the moment you can accept that we write **`static`** always when we declare a method, and later when we get familiar with object-oriented programming (OOP), we will learn about the difference between **static methods** (shared for the whole class) and **methods of an object**, which work on the data of a certain instance of the class (object).

When declaring methods, you must follow the **sequence** of its base elements – first **type of the returned value**, then **method name** and in the end **list of parameters**, surrounded by parentheses **`()`**.

After we have declared a method, its **implementation (body)** follows. In the body of the method we write down **the algorithm**, by which it solves a problem, i.e. the body contains the code (program block), which applies the method's **logic**. In the shown example we are calculating the area of a square, which is **`num * num`**. 

When declaring a variable in the body of a method, it is called a **local** variable of the method. The area where this variable exists and can be used starts from the line where we have declared it and reaches the closing curly bracket `}` of the body of the method. This area is called **variable scope**.

## Calling Methods

**Calling** a method means **starting to execute the code**, which is in **the body of the method**. This happens by writing its **name**, followed by parentheses **`()`** and the semicolon sign **`;`** to end the line. If the method needs input data, it is given in the parentheses **`()`**, and the succession of the parameters should be the same as the one of the given parameters when declaring the method. Here is an example:

![](/assets/chapter-10-images/03.Invoking-methods-01.png)

A method can be called from **several places** in the program. One way is to call it in **the main method**.

![](/assets/chapter-10-images/03.Invoking-methods-02.png)

A method can also be called from **the body of another method**, which is **not** the main method of the program.

![](/assets/chapter-10-images/03.Invoking-methods-03.png)

There is also a possibility for the method to be called in **its own body**. This is called **recursion** and you can find more information about it in [Wikipedia](https://en.wikipedia.org/wiki/Recursion) or you can search on your own in the Internet.

It is important to know that if a method is declared in a class, it can be called before the line, on which it has been declared.

## Example: Blank Receipt

Write a method that prints a blank receipt. The method should call another three methods: one to print the header, one for the middle part of the receipt and one for the lower part.

|Part of the receipt|Text|
| --- | --- |
|Upper part|CASH RECEIPT<br>------------------------------|
|Middle part|Charged to\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>Received by\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|
|Lower part|------------------------------<br>(c) SoftUni|

### Sample Input and Output

| Input | Output |
| --- | --- |
|(no input)|CASH RECEIPT<br>------------------------------<br>Charged to\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>Received by\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>------------------------------<br>(c) SoftUni|

### Hints and Guidelines

The first step is to create a **`void`** method to **print the upper part** of the receipt (header). Let's give it a meaningful name, which describes what the method does, e.g. **`PrintReceiptHeader`**. In its body write the code from the example below:

![](/assets/chapter-10-images/04.Print-receipt-01.png)

In the same way we'll create two more methods **to print the middle part** of the receipt (body) **`PrintReceiptBody`** and **to print the lower part** of the receipt (footer) **`PrintReceiptFooter`**.

After this we will create **another method**, which will call the three methods we already wrote, one after the other:

![](/assets/chapter-10-images/04.Print-receipt-02.png)

In the end we'll **call** the **`PrintReceipt`** method from the body of the **`Main`** method of our program:

![](/assets/chapter-10-images/04.Print-receipt-03.png)

### Testing in the Judge System

The program with five methods that are invoked from one another is ready and we can **run and test it**, after which we can send it for testing in the judge system: [https://judge.softuni.org/Contests/Practice/Index/594#0](https://judge.softuni.org/Contests/Practice/Index/594#0).
