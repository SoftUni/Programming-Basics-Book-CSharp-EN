# Reading Floating Point Numbers From the Console

To read a **floating-point number** from the console use the following command:

```csharp
var num = double.Parse(Console.ReadLine());
```

The above C\# code first reads a **text line** from the console, then converts \(parses\) it to a **floating-point number**.

## Example: Converting Inches into Centimeters

Let's write a program that reads a floating point number in inches and converts it to centimeters:

```csharp
Console.Write("Inches = ");              
var inches = double.Parse(Console.ReadLine());
var centimeters = inches * 2.54;
Console.Write("Centimeters = ");
Console.WriteLine(centimeters);
```

Let's start the program and make sure that when a value in inches is entered, we receive a correct output in centimeters:

![](/assets/chapter-2-images/00.Inches-to-centimeters-01.jpg)

Note that if you enter and invalid number, e.g. "_asfd_", the program will crash with an error message \(exception\). We shall learn how to handle exceptions later in the chapter "[**More Complex Loops**](/Content/Chapter-7-1-complex-loops/overview.md)".

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504\#1](https://judge.softuni.bg/Contests/Practice/Index/504#1).

