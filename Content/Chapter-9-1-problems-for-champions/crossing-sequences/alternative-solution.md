#### Alternative Solution

The previous solution to the problem uses arrays to keep the values. Arrays are not needed to solve the problem. There is an **alternative solution** that generates the numbers and works directly with them instead of keep them in an array. On **every step** we can check that **the numbers in the two sequences match**. If this is the case, we will print the number on the console and terminate the execution of our program. Otherwise, we will see the current number of **which sequence is less and we will generate the next where we are "lagging"**. The idea is that **we will generate numbers from the sequence that is "backwards"** until we skip the current number of the other sequence and then vice versa, and if we find a match in the meantime, we will terminate the execution.

![](/assets/chapter-9-images/01.Crossing-sequences-07.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/518#0](https://judge.softuni.bg/Contests/Practice/Index/518#0).
