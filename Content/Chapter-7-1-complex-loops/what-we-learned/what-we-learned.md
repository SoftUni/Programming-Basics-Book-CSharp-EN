## What We Learned in This Chapter?

We can use **`for`** with **a step**:

```csharp
for (var i = 1; i <= n; i+=3)
{
   Console.WriteLine(i);
}
```

The loops **`while`** / **`do-while`** are repeated while a **condition** is in effect:

```csharp
int num = 1;
while (num <= n)
{
   Console.WriteLine(num++);
}
```

If we have to **interrupt** the loop execution, we do it with the operator **`break`**:

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

We already know how to catch **errors** during our program execution:

```csharp
try
{
   Console.Write("Enter even number: ");
   n = int.Parse(Console.ReadLine());
}  
catch 
   Console.WriteLine("Invalid number."); 
}
// Ако int.Parse(…) гръмне, ще се изпълни catch { … } блокът
```
