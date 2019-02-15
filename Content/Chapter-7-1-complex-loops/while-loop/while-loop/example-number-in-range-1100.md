# Example: Number in Range \[1…100\]

Enter an integer in the range \[**1 … 100**\]. If the entered number is **invalid**, enter it **again**. In this case, an invalid number will be any number that **is not** within the specified range.

## Video: Numbers in the Range \[1…100\]

Watch this video lesson to learn how to enter a number in the range \[1…100\]: [https://youtu.be/8W-CIbF4cdA](https://youtu.be/8W-CIbF4cdA).

## Hints and Guidelines

To solve the problem, we can use the following algorithm:

* We create a `num` variable to which we assign the integer value obtained from the console input.
* For a loop condition, we put an expression that is `true` if the number of the input **is not** in the range specified in the problem's description.
* In **the body of the loop**: we print a message "**Invalid number!**" on the console, then we assign a new value to `num` from the console input.
* Once we have validated the entered number, we print the value of the number outside the body of the loop.

Here's a sample implementation of the algorithm using a `while`** loop**:

![](/assets/chapter-7-images/06.Numbers-in-range-1..100-01.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/514\#5](https://judge.softuni.org/Contests/Practice/Index/514#5).

