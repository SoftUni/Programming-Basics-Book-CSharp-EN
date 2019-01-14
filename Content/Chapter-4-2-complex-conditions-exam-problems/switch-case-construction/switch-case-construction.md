## Switch-case Conditions

When the program operation does not depend on the value of a variable, instead of doing consecutive checks with multiple `if-else` blocks, we can use the `switch-case` conditional statement.

```csharp
switch (selector)
{
    case value1
        statement;
        break;
    case value2
        statement;
        break;
    default
        statement;
        break;
}
```

The structure consists of
 а Selector - an expression that calculates a particular value. The selector type can be an integer, string or enum.
 Multiple `case` labels followed by commands, ending in a `break`.
