# Example: Rectangle Made of 10 x 10 Stars

Print on the console a rectangle made out of **10 x 10** stars.

|Input|Output|
|---|---|
|(none)|<code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code>|

## Video: Rectangle of 10 x 10 Stars

Watch this video lesson to learn how to print a rectangle of 10 x 10 stars on the console using nested for-loops: https://youtu.be/XNsgT4yqw_s.

## Hints and Guidelines

![](/assets/chapter-6-images/01.Rectangle-of-10-x-10-stars-01.png)

How does the example work? We initialize **a loop with a variable `i = 1`**, which increases with each iteration of the loop, while it is **less or equal to 10**. This way the code in the body of the loop is executed **10 times**. In the body of the loop we print a new line on the console **`new string('*', 10)`**, which creates a string of 10 stars.

## Solution using Nested Loops

The above solution uses a trick to avoid nesting loops: it prints 10 stars using the string constructor (instead of printing a star 10 times in a nested loop). Another solution, using **nested for-loops**, might look like this:

![](/assets/chapter-6-images/01.Rectangle-of-10-x-10-stars-nested-loops.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/512#0](https://judge.softuni.org/Contests/Practice/Index/512#0).
