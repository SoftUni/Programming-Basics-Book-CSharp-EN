## Nested conditions

Pretty often the program logic inflicts the use of **`if`** or **`if-else`** statements, which are contained one inside the other. They are called **nested** **`if`** or **`if-else`** statements. As it implied from the title **"nested"**, these are **`if`** or **`if-else`** statements, which are placed inside other **`if`** or **`else`** statements.

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

The nesting of more than three conditional statements inside each other is not considered a good practice and has to be avoided, mostly through optimization of the structure/the algorithm of the code and/or through using another type of conditional statement, which we are going to see below in this chapter.