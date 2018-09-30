# Chapter 6.2. Nested Loops - Exam Problems

In the previous chapter we looked at **nested loops** and how to use them to **draw** different kinds of **figures on the console**. We learned how to print figures with different sizes, thinking of an appropriate logic to construct them using **single and nested `for`** loops in combination with various calculations and program logic:

```csharp
for (var r = 1; r <= 5; r++)
{
   Console.Write("*");
   for (var c = 1; c < 5; c++)
      Console.Write(" *");
   Console.WriteLine();
}
```

We also learned of **the constructor `new string`**, which lets you print **a character a fixed** by us **number of** times:

``` csharp
string printMe = new string('*', 5);
```
