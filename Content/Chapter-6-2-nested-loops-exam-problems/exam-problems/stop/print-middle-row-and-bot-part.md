#### Printing the Middle Row and the Lower Part of the Sign

**The middle part** of the figure begins with **`//`** + **`_`**, middle **`STOP!`** and an end **`_`** + **`\\`**. The count of the underscores **`_`** is **`(underscopes - 5) / 2`**.

![](/assets/chapter-6-2-images/03.Stop-07.png)
		
**The lower part** of the figure, in which the width of the sign **decreases**, can be done by making another **loop**, which recurs **`n`** times. The structure of a rowis - beginning **`.`** + **`\\`**, middle **`_`** and end **`//`** + **`.`**. The number of **the points** in the first iteration should be 0 and in each following one it **increases** by one. Therefore we can say that the size of **the points in the lower part of the figure** equals **`i`**.

![](/assets/chapter-6-2-images/03.Stop-08.png)
		
In order for our program to work properly, in each iteration of **the loop** we need to **decrease** the number og **`_`** with **2**.

![](/assets/chapter-6-2-images/03.Stop-09.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/513#2](https://judge.softuni.bg/Contests/Practice/Index/513#2).