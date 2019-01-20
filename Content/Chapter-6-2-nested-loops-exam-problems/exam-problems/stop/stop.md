# Problem: "Stop" Sign

Write a program which takes **an integer n** from the console and draws **a warning sign STOP** with size as in the examples below.

## Input Data

The input is **an integer N** in the interval [**3 … 1000**].

## Output Data

Print on the console text rows, which depict **the warning sign STOP**, as in the examples.

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|3|<code>....\_\_\_\_\_\_\_....</code><br><code>...//\_\_\_\_\_\\\\...</code><br><code>..//\_\_\_\_\_\_\_\\\\..</code><br><code>.//\_\_\_\_\_\_\_\_\_\\\\.</code><br><code>//\_\_\_STOP!\_\_\_\\\\</code><br><code>\\\\\_\_\_\_\_\_\_\_\_\_\_//</code><br><code>.\\\\\_\_\_\_\_\_\_\_\_//.</code><br><code>..\\\\\_\_\_\_\_\_\_//..</code><br>|6|<code>.......\_\_\_\_\_\_\_\_\_\_\_\_\_.......</code><br><code>......//\_\_\_\_\_\_\_\_\_\_\_\\\\......</code><br><code>.....//\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.....</code><br><code>....//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\....</code><br><code>...//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\...</code><br><code>..//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\..</code><br><code>.//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.</code><br><code>//\_\_\_\_\_\_\_\_\_STOP!\_\_\_\_\_\_\_\_\_\\\\</code><br><code>\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//</code><br><code>.\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//.</code><br><code>..\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//..</code><br><code>...\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//...</code><br><code>....\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//....</code><br><code>.....\\\\_\_\_\_\_\_\_\_\_\_\_\_\_//.....</code><br>|

| Input | Output |
| --- | --- |
|7|<code>........\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_........</code><br><code>.......//\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.......</code><br><code>......//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\......</code><br><code>.....//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.....</code><br><code>....//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\....</code><br><code>...//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\...</code><br><code>..//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\..</code><br><code>.//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.</code><br><code>//\_\_\_\_\_\_\_\_\_\_\_STOP!\_\_\_\_\_\_\_\_\_\_\_\\\\</code><br><code>\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//</code><br><code>.\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//.</code><br><code>..\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//..</code><br><code>...\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//...</code><br><code>....\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//....</code><br><code>.....\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//.....</code><br><code>......\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//......</code><br>|

## Reading the Input Data and Printing the First Row

We can see from the explanation that **the input data** will be taken from only one row which contains **an integer** in the interval [**3 … 1000**]. Therefore we will use **a variable** of type **`int`**.

![](/assets/chapter-6-2-images/03.Stop-01.png)

We can **divide** the figure into **3 parts** - upper, middle and lower. **The upper part** contains two subparts - first row and rows in which the sign widens. **The first row** is made of a beginning **`.`**, middle **`_`** and an end **`.`**. After looking at the examples we can say that the beginning is **`n + 1`** columns wide so it is good to write this **value** in a separate **variable**.

![](/assets/chapter-6-2-images/03.Stop-02.png)
		
We must also create a second **variable**, in which we will keep **the value** of **the middle of the first row**, which is **`2 * n + 1`** columns wide.

![](/assets/chapter-6-2-images/03.Stop-03.png)
		
After we have declared and initialized the two variables we can print the first row on the console.

![](/assets/chapter-6-2-images/03.Stop-04.png)

## Printing the Upper Part of the Sign

In order to draw the rows in which the sign is getting **"wider"**, we need to create **a loop**, which recurs **`n`** times. The structure of a row contains a beginning **`.`**, **`//`** + middle **`_`** + **`\\`** and an end **`.`**. In order to reuse the already created **variables**, we need to decrease **`dots`** by 1 and **`underscores`** with 2, because we have already **printed** the first row, and the dots and underscores in the upper part of the figure are **decreasing**. 

![](/assets/chapter-6-2-images/03.Stop-05.png)
		
In each following iteration **the beginning** and **the end** decrease by 1, and the **middle** increases by 2.

![](/assets/chapter-6-2-images/03.Stop-06.png)

## Printing the Middle Row and the Lower Part of the Sign

**The middle part** of the figure begins with **`//`** + **`_`**, middle **`STOP!`** and an end **`_`** + **`\\`**. The count of the underscores **`_`** is **`(underscores - 5) / 2`**.

![](/assets/chapter-6-2-images/03.Stop-07.png)
		
**The lower part** of the figure, in which the width of the sign **decreases**, can be done by making another **loop**, which recurs **`n`** times. The structure of a rowis - beginning **`.`** + **`\\`**, middle **`_`** and end **`//`** + **`.`**. The number of **the points** in the first iteration should be 0 and in each following one it **increases** by one. Therefore we can say that the size of **the points in the lower part of the figure** equals **`i`**.

![](/assets/chapter-6-2-images/03.Stop-08.png)
		
In order for our program to work properly, in each iteration of **the loop** we need to **decrease** the number of **`_`** with **2**.

![](/assets/chapter-6-2-images/03.Stop-09.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/513#2](https://judge.softuni.bg/Contests/Practice/Index/513#2).
