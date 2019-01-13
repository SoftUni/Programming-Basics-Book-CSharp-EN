## Nested Conditions

Pretty often the program logic requires the use of **`if`** or **`if-else`** statements, which are contained one inside another. They are called **nested** **`if`** or **`if-else`** statements. As implied by the title **"nested"**, these are **`if`** or **`if-else`** statements that are placed inside other **`if`** or **`else`** statements.

```csharp
if (condition1)
{
    if (condition2)
    {
        // body; 
    }
    else
    {
        // body;
    }
}
```

Nesting of more than three conditional statements inside each other is not considered a good practice and has to be avoided, mostly through optimization of the structure/the algorithm of the code and/or by using another type of conditional statement, which we are going to examine below in this chapter.
