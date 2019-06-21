# Chapter 1. First Steps in Programming

In this chapter, we are going to find out **what programming is** in its core and how to write simple programs and apps.

* We will get familiar with the idea of **programming languages** and development platforms, along with concepts like **compilation** and code **execution**.
* We are going to look at the **environments for software development** \(IDEs\) and how to work with them, in particular with **Visual Studio**.
* We will write and execute our **first program** with the programming language **C\#** in **Visual Studio**.
* We will **exercise** with a couple of tasks: we will create **console-based** programs, a graphical application \(**GUI**\) and a **Web** application.
* We will learn how to check the correctness of the solutions from this book in **the Judge system of SoftUni**.
* We will get to know some of the **typical mistakes**, which are often made during code writing and how to prevent doing them.

## Video: Chapter Overview

Watch a video lesson about what we shall learn in this chapter here: https://youtu.be/6RVKMlXtWg4.

## Introduction to Coding by Examples

Coding means to write **commands** for the computer, e.g.

```csharp
Console.WriteLine("Welcome to coding");
```

Run the above code example: [https://repl.it/@nakov/welcome-to-coding-csharp](https://repl.it/@nakov/welcome-to-coding-csharp).

When **executed**, the above command prints the following text:

```
Welcome to coding
```

Several commands can be written as a sequence, called "**computer program**":

```csharp
var size = 5;
Console.WriteLine("Size = " + size);
Console.WriteLine("Area = " + size * size);
```

Run the above code example: [https://repl.it/@nakov/square-area-csharp](https://repl.it/@nakov/square-area-csharp).

The **result** \(output\) from the above program is as follows:

```
Size = 5
Area = 25
```

The above **program** \(sequence of commands\) consists of 3 commands:

1. Defines a variable `size` and stores an integer value `5` in it.
2. Prints the value of the variable `a`, along with some text.
3. Calculates and prints the value of the expression `a * a`.

Let's explain in greater detail what is **programming**, what is programing **language**, how to write **commands** and simple **programs** in the **C\#** language, using the Visual Studio development environment.

