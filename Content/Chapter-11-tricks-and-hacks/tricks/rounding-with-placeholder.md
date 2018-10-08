### Rounding With a Placeholder

```cs
var num = 5.432424;
Console.WriteLine("{0:f2}", num);
```

In this case after the number we add **`:f2`**, which will limit the number to 2 decimal places and will work like **`Math.Round(…)`**. You should keep in mind that the number after the letter **`f`** means to how many decimal places the number is rounded (i.e. it can be **`f3`** or **`f5`**).