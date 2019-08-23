# Chapter 4.2. More Complex Conditions – Exam Problems

The previous chapter introduced you to **nested conditions** in C#. Via nested conditions, the program logic in a particular application can be represented using **`if` conditional statements** that are nested one into another. We also explained the **`switch-case`** conditional statement that allows selecting from a list of options.

Now we are going to solve some **practical exercises** and make sure we have in-depth understanding of the material, by discussing a number of more complex problems that had been given to students on exams.

## More Complex Conditions – Quick Review

Before moving to the problems, let's first recall what **nested conditions** are.

### Nested Conditions

```csharp
if (condition1)
{
    if (condition2)
        // body; 
    else
        // body;
}
```

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Remember that it is <b>not a good practice</b> to write <b>deeply nested conditional statements</b> (with more than three levels of nesting). Avoid nesting of more than three conditional statements inside one another. This complicates the code and makes its reading and understanding difficult.</td>
</tr></table>

### Switch-Case Conditions

When the program operation depends on the value of a variable, instead of doing consecutive checks with multiple `if-else` blocks, we can use the `switch-case` conditional statement.

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

The structure consists of a `selector` (an expression that calculates a particular value) + multiple `case` labels followed by commands, ending in a `break`. The selector type can be an integer, string or enumeration (enum).

## Exam Problems

Now, after we refreshed our knowledge on how to **use and nest conditional statements** in order to implement more complex conditions and program logic, let's solve some **exam problems**:
 * [Problem: On Time for the Exam](/Content/Chapter-4-2-complex-conditions-exam-problems/exam-problems/on-time-for-the-exam/on-time-for-the-exam.md)
 * [Problem: Trip](/Content/Chapter-4-2-complex-conditions-exam-problems/exam-problems/trip/trip.md)
 * [Problem: Operations with Numbers](/Content/Chapter-4-2-complex-conditions-exam-problems/exam-problems/operations/operations.md)
 * [Problem: Game Tickets](/Content/Chapter-4-2-complex-conditions-exam-problems/exam-problems/match-tickets/match-tickets.md)
 * [Problem: Hotel Room](/Content/Chapter-4-2-complex-conditions-exam-problems/exam-problems/hotel-room/hotel-room.md)
