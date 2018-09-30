### Example: area of a rectangle on a coordinate plane

There is a given rectangle with the **coordinates of two of its opposite angles**. Calculate the  **area and its perimeter**:

<img alt="rectangleArea" src="/assets/chapter-2-images/00.Rectangle-area-01.png" width="250" height="200" />

In this task, we have to consider that if we substract the smaller `x` from the bigger `x`, we will receive the length of the rectangle. Analogically, if we substract the smaller `y` from the bigger `y` , we will receive the height of the rectangle. What is left is to multiply both sides. Here is an example of an implementation of the described logic: 

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

We use **`Math.Max(a, b)`**, to find the bigger value **`a`** and **`b`** and analogically **`Math.Min(a, b)`** to find the smaller of both values. 

When the program is executed with the values from the coordinate system given in the condition, we receive the following result:

![](/assets/chapter-2-images/00.Rectangle-area-02.jpg)

#### Testing in the Judge System

Test your solution here:[https://judge.softuni.bg/Contests/Practice/Index/504#6](https://judge.softuni.bg/Contests/Practice/Index/504#6).
