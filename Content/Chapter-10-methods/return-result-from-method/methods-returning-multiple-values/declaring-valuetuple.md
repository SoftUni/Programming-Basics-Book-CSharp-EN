#### Declaring ValueTuple

Let's look at an example declaring of a variable of type **`ValueTuple`**:

```csharp
var personInfo = (name: "Steeve", age: 27, "Bulgaria");
```

To make it easier when declaring we use the keyword **`var`**, and in the brackets we list **the names of the values we want**, followed by **the values themselves**. Let's see what the variable **`personInfo`** contains in debug mode:

![](/assets/chapter-10-images/15.Tuples-01.jpg)

We can see that it contains several **fields with names and values**, which were given when initializing the variable. We can see that the last variable is called **`Item3`**. This is so because when initializing we haven't named the variable, which contains the value **"Bulgaria"**. In this case the naming is **by default**, i.e. the variables are named **`Item1`**, **`Item2`**, **`Item3`** etc.