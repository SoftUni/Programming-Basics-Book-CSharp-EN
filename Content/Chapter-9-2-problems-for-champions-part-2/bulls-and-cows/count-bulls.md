#### Counting the Bulls

What logic can we use? The easiest way to check how many cows and bulls there are inside a number is via a **sequence of `if-else` conditions**. Yes, this is not the most optimal way, but in order to stick to what is covered in the current book, we will use this approach.

What conditions do we need?

The bulls condition is very simple - we check whether the **first digit** of the generated number matches the **same digit** in the secret number. We remove the digits that are already checked in order to avoid repetitions of bulls and cows.

![](/assets/chapter-9-2-images/03.Bulls-and-cows-09.png)

We repeat the action for the second, third and fourth digit. 
