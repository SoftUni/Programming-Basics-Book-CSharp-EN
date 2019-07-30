# Nested Methods (Local Functions)

Let's examine the following example:

![](/assets/chapter-10-images/19.Local-functions-01.png)

## What Is a Local Function?

We can see that in this code the **`Main()`** method has **another** declared method **`Result()`**. This **nested** method is called **local function**.

Local functions can be declared inside every other method. When the C# compiler compiles such functions, they are turned into private methods. Because you will learn about the difference between **`public`** and **`private`** methods later, we can now say that **`private`** can be used only in the class, in which they have been declared. The programs that we write at this level are using only one class, therefore we can say that we can use nested methods without any concerns.

## Why Use Local Functions?

With time and practice you will see that when you are writing code, you often need **methods that you only need once**, or the method you need gets very long. We said earlier that when a method contains too many lines of code it becomes hard to read and maintain.

This is where local functions come in handy – they help us **declare a new method in another one** we already have, and it will be used only once. This helps making our code better ordered and **easier to read**, which helps for faster correction if there is an error in the code and limits the possibility for mistakes when making changes in the program logic.

## Declaring Local Functions

Let's look again at the previuously mentioned example:

![](/assets/chapter-10-images/19.Local-functions-01.png)

In this example the **`Result()`** method is a **local function**, because it is nested in the **`Main()`** method, i.e. **`Result()`** is local for **`Main()`**. This means that the **`Result()`** method can only be used in the **`Main()`** method, because it's declared inside it. The only difference between nested and normal methods is that nested methods can't be **`static`**. Because the definition for **`static`** will be seen later, we will say for the moment that when declaring a local function, we write only the return value type, the name of the method and its list of parameters. In this case this is **`double Result(double a, double b)`**.

Local functions can access variables, which are in the method containing them. The next example demonstrates how this is happening.

![](/assets/chapter-10-images/19.Local-functions-02.png)

This feature of nested methods makes them very helpful when solving a problem. They save time and code, which we would otherwise lose to give them parameters and variables, which we can already use in nested methods.
