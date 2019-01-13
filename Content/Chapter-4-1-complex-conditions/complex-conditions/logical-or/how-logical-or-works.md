### How the || Operator Works?

We have already learned what the logical**"OR" represents**. But how is it actually being achieved? Just like with the logical **"AND"**, the program **checks** from left to right **the arguments** that are given. In order ro receive **`true`** from the expression, it is necessary fоr **just one** argument to have a **`true`** value. Respectively, the checking **continues** until an **argument** with **such** value is met or until the arguments **are over**.

Here is one **example** of the **`||`** operator in action:

```csharp
bool a = false;
bool b = true;
bool c = false;
bool d = true;
bool result = a || b || c || d;
// true (as c and d are not being checked)
```

The programs **checks `а`**, accepts that it has a value **`false`** and continues. Reaching **`b`**, it understands that it has a **`true`** value and the whole **expression** receives a value **`true`**, **without** having to check **`c`** or **`d`**, because their values **wouldn't change** the result of the expression.
