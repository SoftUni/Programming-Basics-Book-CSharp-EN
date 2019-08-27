# Problem: Arrow

Write a program that takes from the console **an integer n** and draws **a vertical arrow** with size as in the examples below.

## Input Data

The input is **an odd integer n** within the range [**3 … 79**].

## Output Data

Print a vertical arrow on the console, in which "**`#`**" (number sign) marks the outline of the arrow, and "**`.`**" – the rest.

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|3|<code>.###.</code><br><code>.#.#.</code><br><code>##.##</code><br><code>.#.#.</code><br><code>..#..</code><br>|5|<code>..#####..</code><br><code>..#...#..</code><br><code>..#...#..</code><br><code>..#...#..</code><br><code>###...###</code><br><code>.#.....#.</code><br><code>..#...#..</code><br><code>...#.#...</code><br><code>....#....</code><br>|

| Input | Output |
| --- | --- |
|9|<code>....#########....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>#####.......#####</code><br><code>.#.............#.</code><br><code>..#...........#..</code><br><code>...#.........#...</code><br><code>....#.......#....</code><br><code>.....#.....#.....</code><br><code>......#...#......</code><br><code>.......#.#.......</code><br><code>........#........</code><br>|

## Hints and Guidelines

From the explanation we see that **the input data** will be read from one input line only, which will contain **an integer** within the range [**3 … 1000**]. This is why we will use **a variable** of **`int`** type.

![](/assets/chapter-6-2-images/04.Arrow-01.png)

### Divide the Figure into Parts
		
We can divide the figure into **3 parts** – upper, middle and lower one. **The upper part** contains two sub-parts – a first row and a body of the arrow. We can see from the examples that the count of **the outer dots** on the first row and in the body of the arrow is **`(n - 1) / 2`**. We can write this value in **a variable** **`outerDots`**. 

![](/assets/chapter-6-2-images/04.Arrow-02.png)
		
The number of **the inside dots** in the body of the arrow is **`(n - 2)`**. We must create **a variable** named **`innerDots`**, which will store this value.

![](/assets/chapter-6-2-images/04.Arrow-03.png)
		
We can see from the examples the structure of the first row. We must use the declared and initialized **variables** **`outerDots`** and **`n`**, in order to print **the first row**.

![](/assets/chapter-6-2-images/04.Arrow-04.png)

### Printing the Body and the Middle Row of the Arrow

In order to draw **the body of the arrow**, we need to create **a loop**, which runs **`n - 2`** times.

![](/assets/chapter-6-2-images/04.Arrow-05.png)

**The middle of the figure** is made of a beginning **`#`**, a middle **`.`** and an end **`#`**. The number of **`#`** is equal to **`outerDots`** and that's why we can use the same **variable** again.

![](/assets/chapter-6-2-images/04.Arrow-06.png)

### Printing the Lower Part of the Arrow

In order to draw **the lower part of the arrow**, we need to assign new values to **the variables** **`outerDots`** and **`innerDots`**.

![](/assets/chapter-6-2-images/04.Arrow-07.png)

Because **`new string`** can't join a symbol 0 times, **the loop** we are going to make must recur **`n - 2`** times and we need to print the last row of the figure separately. At each iteration **`outerDots`** increases by 1, and **`innerDots`** decreases by 2.

![](/assets/chapter-6-2-images/04.Arrow-08.png)
		
**The last row** of our figure is made of a beginning **`.`**, a middle **`#`** and an end **`.`**. The number of **`.`** equals **`outerDots`**.
   
![](/assets/chapter-6-2-images/04.Arrow-09.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/513#3](https://judge.softuni.org/Contests/Practice/Index/513#3).
