## What We Learned in This Chapter?

Let's remind ourselves the new constructions and program techniques, which we have learned in this chapter.

### Nested conditions

```csharp
if (condition1)
{
    if (condition2)
        // body; 
    else
        // body;
}
```

### Complex conditions with &&, ||, ! and ()

```csharp
if ((x == left || x == right) && y >= top && y <= bottom)
    Console.WriteLine(…); 
```

#### Switch-case conditions

```csharp
switch (selector)
{
    case value1:
        construction;
        break;
    case value2:
    case value3:
        construction;
        break;
    …
    default:
        construction;
        break;
}
```