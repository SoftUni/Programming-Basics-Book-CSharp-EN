Let us look at a few examples for **floating division**. When we divide floating-point numbers, the result is always a **real number** and the division never fails and works correct with the special values **+&#8734;** and **-&#8734;**:

```csharp
var a = 15;
Console.WriteLine(a / 2.0);   // Float result: 7.5
Console.WriteLine(a / 0.0);   // Result: Infinity
Console.WriteLine(-a / 0.0);   // Result: -Infinity
Console.WriteLine(0.0 / 0.0); // Result: NaN (Not a Number), e.g. the result
                              // from the operation is not a valid numeric value
```

When printing the values  **&#8734;** and **-&#8734;**, the console output may be `?`, because the console in Windows does not work correctly with Unicode and breaks most of the non-standart symbols, letters and special signs. The example above would most probably give the following result:
```
7.5
?
-?
NaN
```
