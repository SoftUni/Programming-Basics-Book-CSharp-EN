# Chapter 6.2. Nested Loops – Exam Problems

In the previous chapter we introduced **nested loops** and how to use them to **draw** different kinds of **figures on the console**. Now we shall solve a few exam problems to gain more experience.

## Nested Loops – Quick Review

We learned how to print figures with different sizes, thinking of an appropriate logic to construct them using **single and nested** `for` loops in combination with various calculations and program logic:

```csharp
for (var r = 1; r <= 5; r++)
{
   Console.Write("*");
   for (var c = 1; c < 5; c++)
      Console.Write(" *");
   Console.WriteLine();
}
```

We also learned about the `new string` **constructor**, which lets you print **a character** a **number of times** defined by us:

```csharp
string printMe = new string('*', 5);
```

## Exam Problems

Let's solve several **exam problems** related to nested loops to practice what we learned and to further develop our algorithmic thinking:
* [Problem: Drawing a Fortress](/Content/Chapter-6-2-nested-loops-exam-problems/exam-problems/draw-fort/draw-fort.md)
* [Problem: Butterfly](/Content/Chapter-6-2-nested-loops-exam-problems/exam-problems/butterfly/butterfly.md)
* [Problem: "Stop" Sign](/Content/Chapter-6-2-nested-loops-exam-problems/exam-problems/stop/stop.md)
* [Problem: Arrow](/Content/Chapter-6-2-nested-loops-exam-problems/exam-problems/arrow/arrow.md)
* [Problem: Axe](/Content/Chapter-6-2-nested-loops-exam-problems/exam-problems/axe/axe.md)
