### Example: Dealing with Invalid Numbers with Try-catch

Write a program that checks if an integer **n** is even and if it is print it on the screen. If **an invalid number** is entered, a message appears that the input you entered is not a valid number and the entry will resume.

Here's how we can solve the problem:

   * We create an infinite **`while`** loop and as a condition we set **`true`**.
   * In the body of the loop:
      * We create a **`try-catch`** construction.
      * In the **`try`** block we write the programming logic for reading the user input, parsing it to a number, and the check for even number.
      * With **an even number**, we print it and go out of the loop (with **`break`**). The program is done and ends.
      * With **an odd number**, we print a message saying that an even number is required without leaving the loop (because we want it to be repeated again).
      * If we **catch an exception** when executing the **`try`** block, we write a message for invalid input number (and the loop is repeated because we do not explicitly go out of it).
