### Euclidean Algorithm

In the next problem we will use one of the first published algorithms for finding the GCD - **Euclid's algorithm**.

**Until** we reach remainder 0:

   * We divide the greater number by the smaller one.
   * We take the remainder of the division.

Euclid's algorithm **pseudo-code**:

```csharp
while b ≠ 0
  var oldB = b;
  b = a % b;
  a = oldB;
print а;
```
