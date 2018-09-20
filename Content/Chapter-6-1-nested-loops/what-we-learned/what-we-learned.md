## What We Learned in This Chapter?

Запознахме се с конструктора **`new string`**:

```csharp
string printMe = new string('*', 5);
```

Научихме се да чертаем фигури с вложени **`for`** цикли:

```csharp
for (var r = 1; r <= 5; r++)
{
   Console.Write("*");
   for (var c = 1; c < 5; c++)
      Console.Write(" *");
   Console.WriteLine();
}
```