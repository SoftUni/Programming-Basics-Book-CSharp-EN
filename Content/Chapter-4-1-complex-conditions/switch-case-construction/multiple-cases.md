### Multiple Switch-cases

In **C#** we have the possibility to **use multiple `case`** labels, when they have to execute **the same code**. This way, when our **program** finds a **match**, it will execute the **next** code, because **after** the respective **`case`** label **there is no code** for execution and a **`break`** operator.

```csharp
switch (selector)
{
    case value1:
    case value2:
    case value3:
        construction;
        break;
    case value4:
    case value5:
        construction;
        break;
    …
    default:
        construction;
        break;
}
```
