## What We Learned in This Chapter?

Да си припомним новите конструкции и програмни техники, с които се запознахме в тази глава.

### Вложени проверки

```csharp
if (condition1)
{
    if (condition2)
        // тяло; 
    else
        // тяло;
}
```

### По-сложни проверки с &&, ||, ! и ()

```csharp
if ((x == left || x == right) && y >= top && y <= bottom)
    Console.WriteLine(…); 
```

#### Switch-case проверки

```csharp
switch (селектор)
{
    case стойност1:
        конструкция;
        break;
    case стойност2:
    case стойност3:
        конструкция;
        break;
    …
    default:
        конструкция;
        break;
}
```