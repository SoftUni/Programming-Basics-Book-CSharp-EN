# Chapter 2.1. Simple Calculations

In this chapter we are going to get familiar with the following concepts and programming techniques:

* What is the **system console**?
* How to **read numbers** from the system console?
* How to work with **data types and variables**, which are necessary to process numbers and the operations between them?
* How to **print** output \(a number\) on the console?
* How to do simple **arithmetic operations**: add, subtract, multiply, divide, string concatenation?

## Video: Chapter Overview

Watch a video lesson about what shall we learn in this chapter here: [https://youtu.be/NXbFJw\_NstA](https://youtu.be/NXbFJw_NstA).

## Introduction to Simple Calculations by Examples

Computer programs can **enter data** from the **console**, perform **calculations** and **print the results** on the console. This is a simple example of C\# program that **converts **from **foots** to **meters**:

```csharp
Console.Write("Foots = ");              
var foots = double.Parse(Console.ReadLine());
var meters = foots * 0.3048;
Console.Write("Meters = ");
Console.WriteLine(meters);
```

Run the above code example: [https://repl.it/@nakov/foots-to-meters-csharp](https://repl.it/@nakov/foots-to-meters-csharp).

The above program **enters a number** and **converts** its value from **foots** to **meters**. This is a **sample output** from the above code, when the user enters `5` as input:

```
Foots = 5
Meters = 1.524
```

In C\# we can **read a text line** from the console using `Console.ReadLine()` and we can convert the text to a floating-point number using `double.Parse(text)`. We can **print text and numbers** using the **$ text formatting** syntax as follows:

```csharp
var radius = 1.25;
Console.WriteLine($"Circle radius = {radius}");
Console.WriteLine($"Circle area = {Math.PI * radius * radius}");
```

Run the above code example: [https://repl.it/@nakov/circle-area-csharp](https://repl.it/@nakov/circle-area-csharp).

The **$ syntax** replaces all expressions in curly brackets with their values. The output from the above code is:

```
Circle radius = 1.25
Circle area = 4.90873852123405
```

Let's explain in greater detail how to use the **console**, how to **enter numbers** and text and how to perform simple **calculations** and **format and print text** and expressions on the console in C\#.
