### Example: Circle Area and Perimeter

Let's write a program that calculates **a circle area and perimeter** by reading its **radius r** .

Formulas:
- Area = π \* r \* r
- Perimeter = 2 \* π \* r
- π ≈ 3.14159265358979323846…

```csharp
Console.Write("Enter circle radius. r = ");
var r = double.Parse(Console.ReadLine());
Console.WriteLine("Area = " + Math.PI * r * r); 
  // Math.PI - built in constant for π in C#
Console.WriteLine("Perimeter = " + 2 * Math.PI * r);
```
Let's test the program with **radius `r = 10`**:

![](/assets/chapter-2-images/00.Circle-area-01.jpg)

#### Testing in the Judge System

Test your solution here:[https://judge.softuni.bg/Contests/Practice/Index/504#5](https://judge.softuni.bg/Contests/Practice/Index/504#5).
