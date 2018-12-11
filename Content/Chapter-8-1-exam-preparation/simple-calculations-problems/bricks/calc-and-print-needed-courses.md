#### Calculate and Print needed Courses

By dividing the total number of **bricks transferred for 1 course**, we will receive the number of **courses** required to carry them. We have to consider that when dividing whole numbers the remainder is neglected and rounded down always. To avoid this, we will convert the right side of the equation to **`double`** and use the **`Math.Ceiling(…)`** function to round the result always up. When the bricks can be transferred with **an exact number of courses**, the division will return a whole number and there will be nothing to round. Accordingly, if not, the result of the division will be **the number of exact courses** but a decimal fraction. The decimal part will be rounded up and we will get the required **1 course** for the remaining bricks.

![](/assets/chapter-8-1-images/02.Bricks-03.png)

Finally, we print the result on the console.

![](/assets/chapter-8-1-images/02.Bricks-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#1](https://judge.softuni.bg/Contests/Practice/Index/516#1).
