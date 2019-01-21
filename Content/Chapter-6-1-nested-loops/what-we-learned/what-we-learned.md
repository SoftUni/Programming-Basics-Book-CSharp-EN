## What We Learned in This Chapter?

We became acquainted with the **`new string`** constructor:

```csharp
string printMe = new string('*', 5);
```

We learned to draw figures with nested **`for`** loops:

```csharp
for (var r = 1; r <= 5; r++)
{
   Console.Write("*");
   for (var c = 1; c < 5; c++)
      Console.Write(" *");
   Console.WriteLine();
}
```
