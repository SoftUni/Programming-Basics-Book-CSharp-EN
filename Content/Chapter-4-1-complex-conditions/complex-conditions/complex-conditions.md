# More Complex Conditions

Let's take a look at how we can create more **complex logical conditions** in programming. We can use the logical "**AND**" \(`&&`\), logical "**OR**" \(`||`\), logical **negation** \(`!`\) and **brackets** \(`()`\).

## Logical "AND", "OR" and "NOT"

This is a short example that demonstrates the power of logical "**AND**", logical "**OR**" and logical "**NOT**":

```csharp
var animal = "horse";
int speed = 45;

if ((animal == "horse" || animal == "donkey") && (speed > 40))
    Console.WriteLine("Run fast")
else if ((animal == "shark" || animal == "dolphin") && (speed > 45))
    Console.WriteLine("Swim fast")
else if (!(speed > 30 || animal == "turtle"))
    Console.WriteLine("Slow move")
```

We shall explain the logical **AND **\(`||`\), the logical **OR **\(`||`\), and the logical **NOT **\(`!`\) in the next few sections, along with examples and exercises:

* [Logical "AND"](/Content/Chapter-4-1-complex-conditions/complex-conditions/complex-conditions/logical-and.md)
* [Logical "OR"](/Content/Chapter-4-1-complex-conditions/complex-conditions/complex-conditions/logical-or.md)
* [Logical "NOT"](/Content/Chapter-4-1-complex-conditions/complex-conditions/complex-conditions/logical-not.md)

## The Parenthesis `()` Operator

Like the rest of the operators in programming, the operators `&&` and `||` have a priority, as in the case `&&` is with higher priority than `||`. The operator `()` serves for **changing the priority of operators** and is being calculated first, just like in mathematics. Using parentheses also gives the code better readability and is considered a good practice.

Example of checking whether a variable belongs to certain ranges:

```csharp
if (x < 0) || ((x >= 5) && (x <= 10)) || (x > 20)
{
    ...
}
```
