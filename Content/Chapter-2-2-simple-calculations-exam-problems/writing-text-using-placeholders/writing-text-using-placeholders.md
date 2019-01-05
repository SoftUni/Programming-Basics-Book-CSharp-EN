## Writing Text Using Placeholders

**Placeholder** is an expression which is replaced with a particular value while printing an output. The methods **`Console.Write(…)`** / **`WriteLine(…)`** supports printing a string based on a placeholder, where the first argument is the formatted string, followed by the number of arguments, equal to the number of placeholders.

```csharp
Console.WriteLine("You are {0} {1}, a {2}-years old person from {3}.",
  firstName, lastName, age, town);
```
