#### Printing Combination of Three Symbols

We use a **loop** that runs through **all symbols** from the starting to the end letter (included). In **each iteration** of the **first** loop, we run a **second** one with the same parameters (but **only if** the letter of the first loop is valid, i.e. does not match the one that we must exclude, by requirements). In each iteration of the **second** loop, we run **one** more with the **same parameters** and the same **condition**. This way we have three nested loops, as we will print the symbols in the body of the **latter**.

![](/assets/chapter-8-2-images/06.Letters-03.png)

Let's not forget that we also need to print the **total number of valid combinations** that we have found, and they must be printed on the **same row**, separated by an interval.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/517#5](https://judge.softuni.bg/Contests/Practice/Index/517#5).
