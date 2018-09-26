#### Calculating the length of the roof

In order to draw **the roof**, we write down how many **stars** we start with in a variable called **`stars`**:
* If **`n`** i **an even** number, there will be 2 stars.
* If it is **odd**, there will be 1.

![](/assets/chapter-6-images/09.House-03.png)

We calculate the length of **the roof**. It equals half of **`n`**. We write the result in the variable  **`roofLength`**.

![](/assets/chapter-6-images/09.House-04.png)

It is important to note that when **`n`** is an odd number, the length of the roof is one row more than that of the **base**. In **C#** when you divide two numbers with a remainder, the result will be the number without remainder.

Example:

```csharp
int result = 3 / 2; // result 1
```

If we want to round up, we need to use the method **`Math.Ceiling(…)`**:
**`int result = (int)Math.Ceiling(3 / 2f);`**
In this example the division isn't between two integers. "`f`" after a number shows that this number is of type **`float`** (a floating point number). The result of **`3 / 2f`** is **`1.5f`**. **`Math.Ceiling(…)`** rounds the division up. In this case **`1.5f`** will become 2. **`(int)`** is used so that we can transfer the type back to **`int`**.
