## Switch-case construction

The construction **`switch-case`** works as a sequence of **`if-else`** blocks. Whenever the work of our program depends on the value of **one variable**, instead of making consecutive conditions with **`if-else`** blocks, we can **use** the conditional **`switch`** statement. It is being used for a **choice between a list of possibilities**. The statement compares a given value with defined constants and depending on the result, takes an action.

We put **the variable**, which we want to **compare**, inside the **brackets after the operator `switch`** and it is called a "**selector**". Here **the type must be comparable** (numbers, strings). **Consecutively** begins the **comparing** of each **value**, which **is found** after the **`case` labels**. On a match, the execution of the code from the respective place begins and continues until it reaches the operator **`break`**. In some programming languages (like C and C++) **`break`** might be skipped, in order to execute a code from other **`case`** construction, until it reaches another operator. In C# though, the presence of **`break`** is **mandatory** for **every `case`**, which contains a program logic. When **no matches** are **found**, the **`default`** construction is being executed, **if** such **exists**.

```csharp
switch (selector)
{
    case value1:
        construction;
        break;
    case value2:
        construction;
        break;
    case value3:
        construction;
        break;
    …
    default:
        construction;
        break;
}
```