# More Complex Conditions

Let's take a look at how we can create more complex logical conditions. We can use the logical "**AND**" \(`&&`\), logical "**OR**" \(`||`\), logical **negation** \(`!`\) and **brackets** \(`()`\).

## 

## The Parenthesis `()` Operator

Like the rest of the operators in programming, the operators `&&` and `||` have a priority, as in the case `&&` is with higher priority than `||`. The operator `()` serves for **changing the priority of operators** and is being calculated first, just like in mathematics. Using parentheses also gives the code better readability and is considered a good practice.

Example of checking whether a variable belongs to certain ranges:

```csharp
if (x < 0) || ((x >= 5) && (x <= 10)) || (x > 20)
{
    ...
}
```



