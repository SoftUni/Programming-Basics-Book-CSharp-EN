#### Hints and Guidelines

An idea to solve the problem:

   * We create **a variable `n`** to which we assign an integer value from the console input.
   * We create the variables **`f0`** and **`f1`** to which we assign a value of **1**, since the sequence starts.
   * We create a **`for`** loop with condition **the current value `i < n - 1`**.
   * In **the body of the loop**:
      * We create **a temporary** variable **`fNext`**, to which we assign the next number in the Fibonacci sequence.
      * At **`f0`** we assign the current value of **`f1`**.
      * At **`f1`** we assign the value of the temporary variable **`fNext`**.
   * Out of the loop we print the n-th number of Fibonacci.

Example implementation:

![](/assets/chapter-7-images/12.Fibonacci-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#13](https://judge.softuni.bg/Contests/Practice/Index/514#13).
