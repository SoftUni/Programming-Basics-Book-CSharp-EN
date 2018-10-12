### Inserting Variables in Strings

```csharp
var text = "some text";
Console.WriteLine("{0}", text);
// This will print on the console "some text"
```

In this case we are using a **placeholder** - **`{x}`**, where **x** is a number (larger than or equal to 0), corresponding to the position on which we have placed our variable. Therefore if we insert two variables, we will have one placeholder, which will be **`{0}`** and it will keep the value of **the first variable** and another one - **`{1}`**, which will keep the value of на **the second variable**. For example:

```csharp
var text = "some text";
var number = 5;
Console.WriteLine("{0} {1} {0}", text, number);
// This will print "some text 5 some text"
```

In this example we can see that we can insert **not only text variables**. We can also use a given variable **several times** and for this we put the number which **corresponds with the position of the variable** in the placeholder. In this case on position zero is the variable **`text`**, and at first position is the variable **`number`**. In the begining the numbering can be confusing, but you need to remember that in programming **counting starts from 0**.