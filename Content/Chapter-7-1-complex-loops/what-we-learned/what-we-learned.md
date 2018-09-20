## What We Learned in This Chapter?

Можем да използваме **`for`** цикли със **стъпка**:

```csharp
for (var i = 1; i <= n; i+=3)
{
   Console.WriteLine(i);
}
```

Циклите **`while`** / **`do-while`** се повтарят докато е в сила дадено **условие**:

```csharp
int num = 1;
while (num <= n)
{
   Console.WriteLine(num++);
}
```

Ако се наложи да **прекъснем** изпълнението на цикъл, го правим с оператора **`break`**:

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

Вече знаем как да прихващаме **грешки** по време на изпълнението на програмата ни:

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