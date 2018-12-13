### Example: Greatest Common Divisor (GCD)

Enter **integers** **a** and **b** and find **GCD(a, b)**.

We will solve the problem through **Euclid's algorithm**:

   * We create variables **`a`** and **`b`** to which we assign **integer** values taken from the console input.
   * For a loop condition, we put an expression that is **`true`** if the number **`b`** **is different** from **0**.
   * In **the body of the loop** we follow the instructions from the pseudo code:
      * We create a temporary variable to which we assign **the current** value of **`b`**.
      * We assign a new value to **`b`**, which is the remainder of the division of **`a`** and **`b`**.
      * On the variable **`a`** we assign **the previous** value of the variable **`b`**.
   * Once the loop is complete and we have established the GCD, we print it on the screen.

![](/assets/chapter-7-images/07.GCD-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#6](https://judge.softuni.bg/Contests/Practice/Index/514#6).
