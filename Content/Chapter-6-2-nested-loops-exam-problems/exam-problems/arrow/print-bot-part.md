#### Printing the Lower Part of the Arrow

In order to draw **the lower part of the arrow**, we need to give new values to **the variables** **`outerDots`** and **`innerDots`**.

![](/assets/chapter-6-2-images/04.Arrow-07.png)

Because **`new string`** ca't join a symbol 0 times, **the loop** we are going to make must recur **`n - 2`** times and we need to print the last row of the figure separately. At each iteration **`outerDots`** increases by 1, and **`innerDots`** decreases by 2.

![](/assets/chapter-6-2-images/04.Arrow-08.png)
		
**The last row** of our figure is made of a beginning **`.`**, a middle **`#`** and an end **`.`**. The number of **`.`** equals **`outerDots`**.
   
![](/assets/chapter-6-2-images/04.Arrow-09.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/513#3](https://judge.softuni.bg/Contests/Practice/Index/513#3).