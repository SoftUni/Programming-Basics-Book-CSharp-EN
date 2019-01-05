### Example: Rectangle Area in a Coordinate Plane

A rectangle is set with the **coordinates of two of its opposite angles**. Calculate its **area and perimeter**:

<img alt="rectangleArea" src="/assets/chapter-2-images/00.Rectangle-area-01.png" width="250" height="200" />

In this task, we have to consider that if we subtract the smaller `x` from the bigger `x`, we will receive the length of the rectangle. Identically, if we subtract the smaller `y` from the bigger `y`, we will receive the height of the rectangle. What is left is to multiply both sides. Here is an example of an implementation of the described logic: 

```csharp
var x1 = double.Parse(Console.ReadLine());
var y1 = double.Parse(Console.ReadLine());
var x2 = double.Parse(Console.ReadLine());
var y2 = double.Parse(Console.ReadLine());

// Calculating the sides of the rectangle:
var width = Math.Max(x1, x2) - Math.Min(x1, x2);
var height = Math.Max(y1, y2) - Math.Min(y1, y2);

Console.WriteLine("Area = " + width * height);
Console.WriteLine("Perimeter = " + 2 * (width + height));
```

We use **`Math.Max(a, b)`**, to find the higher value from **`a`** and **`b`** and identically **`Math.Min(a, b)`** to find the lower of both values. 

When the program is executed with the values from the coordinate system given in the condition, we receive the following result:

![](/assets/chapter-2-images/00.Rectangle-area-02.jpg)

#### Testing in the Judge System

Test your solution here:[https://judge.softuni.bg/Contests/Practice/Index/504#6](https://judge.softuni.bg/Contests/Practice/Index/504#6).
