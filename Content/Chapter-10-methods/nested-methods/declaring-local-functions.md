### Declaring Local Functions

Let's look again the above example.

![](/assets/chapter-10-images/19.Local-functions-01.png)

In this example the **`Result()`** method is a local function, because it is nested in the **`Main()`** method, i.e. **`Result()`** is local for **`Main()`**. This means that the **`Result()`** method can only be used in the **`Main()`** method, because it's declared inside it. The only difference between nested and normal methods is that nested methods can't be **`static`**. Because the definition for **`static`** will be seen later, we will say for the moment that whendeclaring a local function we write only the return value type, the name of the method and its list of patameters. In this case this is **`double Result(double a, double b)`**.

Local functions can access variables, which are in the method containing them. The next example demonstrates how this is happening.

![](/assets/chapter-10-images/19.Local-functions-02.png)

This feature of nested methods makes them very helpful when solving a problem. They save time and code, which we would otherwise lose to give them parameters and variables, which we can already use in nested methods.
