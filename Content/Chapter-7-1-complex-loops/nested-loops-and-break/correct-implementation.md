#### Correct Implementation

What is **the right solution**? One way to solve this problem is by declaring a **`bool` variable** to keep track if the loop rotation has to continue. If you need to exit (exit from all nested loops), we set the variable to **`true`** and exit the inner loop with a **`break`**, and in the next check we exit the outer loop. Here is an example implementation of this idea:

![](/assets/chapter-7-images/00.Nested-and-break-undesired-result-02.png)

Thus, when **`i + j = 2`**, the program will set the **`hasToEnd = true`** and exit the inner loop. Upon the next rotation of the outer loop, through the check, the program will not be able to reach the inner loop and will interrupt its execution.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/514#11](https://judge.softuni.bg/Contests/Practice/Index/514#11).
