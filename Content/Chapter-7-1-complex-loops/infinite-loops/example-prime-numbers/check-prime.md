### Example: Check Prime

Check if a number **n** is prime. We will do this by checking if **n** is divided by the numbers between 2 and √n.

Here is an algorithm for checking a prime number, step by step:

   * We create the variable **`n`** to which we assign an integer taken from the console input.
   * We create an **`isPrime`** boolean variable with an initial value **`true`**. We assume that a number is prime until proven otherwise.
   * We create a **`for`** loop in which we set an initial value 2 for the loop variable, for condition **the current value `<= √n`**. The loop step is 1.
   * In **the body of the loop**, we check if **`n`**, divided by **the current value**, has a remainder. If there is **no reminder** from the division, then we change **`isPrime`** to **`false`** and we exit the loop through the **`break`** operator.
   * Depending on the value of **`isPrime`**, we print whether the number is prime (**`true`**) or composite (**`false`**).
