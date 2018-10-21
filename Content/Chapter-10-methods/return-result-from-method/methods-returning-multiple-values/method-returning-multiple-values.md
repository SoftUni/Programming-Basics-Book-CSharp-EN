#### Method Returning Multiple Values

The following method takes as parameters two integers (**`x`** and **`y`**) and **returns two values** - the result of integer division and the remainder:

```csharp
static (int result, int reminder) Divide(int x, int y)
{
    int result = x / y;
    int reminder = x % y;

    return (result, reminder);
}
```

This method returns a result of type **`ValueTuple`**, containing two variables (fields) of type **`int`**, named **`result`** and **`reminder`** respectively. Invoking the method is done in the following way:

```csharp
var division = Divide(1, 3);
```

In order to get the results, returnde from the method, we apply **point notation to the variable** **`division`**:

![](/assets/chapter-10-images/15.Tuples-02.jpg)
