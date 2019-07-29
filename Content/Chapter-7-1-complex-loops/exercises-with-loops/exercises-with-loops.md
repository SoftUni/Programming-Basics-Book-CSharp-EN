# Exercises: More Complex Loops

In this chapter, we got familiar with some new types of loops that can perform repetitions with more complex programming logic. Let's solve a few **practical problems** using these new constructs.

## Video: Chapter Summary

Watch this video to review what we learned in this chapter: [https://youtu.be/6Wrna8Q0LFA](https://youtu.be/6Wrna8Q0LFA).

## What We Learned in This Chapter?

First, let's recall what we have learned.

We can use `for` loop with **a step**:

```csharp
for (var i = 1; i <= n; i+=3)
{
   Console.WriteLine(i);
}
```

The `while` / `do-while` loops are repeated while a **condition is true**:

```csharp
int num = 1;
while (num <= n)
{
   Console.WriteLine(num++);
}
```

If we have to **interrupt** the loop execution, we do it with the operator `break`:

```csharp
var n = 0;
while (true)
{
   n = int.Parse(Console.ReadLine());
   if (n % 2 == 0)
   {
      break; // even number -> exit from the loop
   }
   Console.WriteLine("The number is not even.");
}
Console.WriteLine("Even number entered: {0}", n);
```

We can catch **errors** during the program execution:

```csharp
try
{
   Console.Write("Enter even number: ");
   n = int.Parse(Console.ReadLine());
}  
catch 
   Console.WriteLine("Invalid number."); 
}
// If int.Parse(…) fails, the catch { … } block will execute
```

## The Exercises

We will work on the following exercises to practice the new loops from this chapter:

* [Problem: Fibonacci Numbers](/Content/Chapter-7-1-complex-loops/exercises-with-loops/fibonacci-numbers/fibonacci-numbers.md)
* [Problem: Numbers Pyramid](/Content/Chapter-7-1-complex-loops/exercises-with-loops/number-pyramid/number-pyramid.md)
* [Problem: Numbers Table](/Content/Chapter-7-1-complex-loops/exercises-with-loops/number-table/number-table.md)
