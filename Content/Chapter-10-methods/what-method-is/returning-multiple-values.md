# Methods Returning Multiple Values

There are cases in practice when we need a method to return more than one element as a result. For this to be possible **`ValueTuple`** has been integrated in Visual Studio and C# (onwards from C# 7), and also a literal of type **`ValueTuple`**. The type **`ValueTuple`** represents two values, which allow the temporary containing of **multiple values**. The values are contained in variables (fields - we will earn about them later) of the corresponding types. Although the type **`Tuple`** existed before C# 7, it didn't have good support in the older versions and it's ineffective. That's why in previous versions of C# the elements in one **`Tuple`** were shown as **`Item1`**, **`Item2`** etc. and the names of their variables (the variables in which they are contained) could not be changed. In C# 7 the type (**`ValueTuple`**) is maintained, which allows giving meaningful names to the elements in a **`ValueTuple`**.

## Declaring a ValueTuple

Let's look at an example declaring of a variable of type **`ValueTuple`**:

```csharp
var personInfo = (name: "Steeve", age: 27, "Bulgaria");
```

To make it easier when declaring we use the keyword **`var`**, and in the brackets we list **the names of the values we want**, followed by **the values themselves**. Let's see what the variable **`personInfo`** contains in debug mode:

![](/assets/chapter-10-images/15.Tuples-01.jpg)

We can see that it contains several **fields with names and values**, which were given when initializing the variable. We can see that the last variable is called **`Item3`**. This is so because when initializing we haven't named the variable, which contains the value **"Bulgaria"**. In this case the naming is **by default**, i.e. the variables are named **`Item1`**, **`Item2`**, **`Item3`** etc.

## Method Returning Multiple Values

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

In order to get the results, returned from the method, we apply **point notation to the variable** **`division`**:

![](/assets/chapter-10-images/15.Tuples-02.jpg)
