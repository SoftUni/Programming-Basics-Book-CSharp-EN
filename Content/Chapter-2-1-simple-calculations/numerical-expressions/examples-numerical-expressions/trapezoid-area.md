### Example: Calculating Trapezoid Area

Let's write a program that inputs the lengths of the two bases of a trapezoid and its height (one floating point number per row) and calculates the **area of the trapezoid** by the standard math formula: 

```csharp
var b1 = double.Parse(Console.ReadLine());
var b2 = double.Parse(Console.ReadLine());
var h = double.Parse(Console.ReadLine());
var area = (b1 + b2) * h / 2.0;
Console.WriteLine("Trapezoid area = " + area);
```

If we start the program and enter values for the sides: 3, 4 and 5, we will receive the following result:
```
3
4
5
Trapezoid area = 17.5
```

#### Testing in the Judge System

Test your solution here : [https://judge.softuni.bg/Contests/Practice/Index/504#4](https://judge.softuni.bg/Contests/Practice/Index/504#4).


