### Example: converting inches to centimeters

Let us write a program, which reads a floating-point number in inches and converts it to centimeters:

```csharp
Console.Write("Inches = ");              
var inches = double.Parse(Console.ReadLine());
var centimeters = inches * 2.54;
Console.Write("Centimeters = ");
Console.WriteLine(centimeters);
```

Let us start the program and make sure that when a value in inches is entered, we receive a correct answer in centimeters:

![](assets/chapter-2-images/00.Inches-to-centimeters-01.jpg)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/504#1](https://judge.softuni.bg/Contests/Practice/Index/504#1).