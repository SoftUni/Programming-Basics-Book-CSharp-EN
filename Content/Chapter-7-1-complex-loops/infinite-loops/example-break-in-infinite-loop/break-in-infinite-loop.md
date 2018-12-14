### Example: Break in Infinite Loop

Write a program that checks if one number **n** is even, and if it is - print it on the screen. For even we consider a number that is divisible by 2 without a remainder. For an invalid number return re-entering and display a message that notifies you that the entered number is not even.

Here is an idea how we can solve the problem:

   * We create a variable **`n`** to which we assign an initial value of **0**.
   * We create an infinite **`while`** loop and for condition we will set **`true`**.
   * In **the body of the loop**:
      * We take an integer value from the console input and assign it to **`n`**.
      * If **the number is even**, we exit the loop by **`break`**.
      * **Otherwise**, we display a message stating that **the number is not even**. The iterations continue until an even number is entered.
   * Print the even number on the screen.
