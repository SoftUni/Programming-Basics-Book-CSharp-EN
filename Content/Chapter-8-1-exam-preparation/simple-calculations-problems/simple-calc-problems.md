# Simple Calculations – Problems

**The first** problem of the "Programming Basics" Practical Exam covers **simple calculations without checks and loops**. Let's take a few examples.


## Problem: Triangle Area

<table>
   <tr>
      <td width="60%">
        <b>Triangle in the plane</b> is set by the coordinates of its three vertices. First is set the vertice <b>(x1, y1)</b>. Then the other two vertices are set: <b>(x2, y2)</b> and <b>(x3, y3)</b>, which <b>lie on a common horizontal line</b> (ie have the same Y coordinates). Write a program that calculates <b>the area of the triangle</b> by the coordinates of its three vertices.
      </td>
      <td>
         <img src="/assets/chapter-8-1-images/01.Triangle-area-01.png"/>
      </td>
   </tr>
</table>

### Input
The console reads **6 integers** (one per line):
**x1, y1, x2, y2, x3, y3.**
-	All input numbers are in range [**-1000 … 1000**].
-	It is guaranteed that **y2 = y3**.

### Output
Print on the console **the area of the triangle**.

### Sample Input and Output

| Input | Output | Visualization | Comments |
|----|----|----|----|
|5<br>-2<br>6<br>1<br>1<br>1|7.5|![](/assets/chapter-8-1-images/01.Triangle-area-01.png)|The side of the triangle **а** = 6 - 1 = **5**<br>The height of the triangle **h** = 1 - (-2) = **3**<br>Triangle area **S** = a \* h / 2 = 5 \* 3 / 2 = **7.5**|

| Input | Output | Visualization | Comments |
|----|----|----|----|
|4<br>1<br>-1<br>-3<br>3<br>-3|8|![](/assets/chapter-8-1-images/01.Triangle-area-02.png)|The side of the triangle **а** = 3 - (-1) = **4**<br>The height of the triangle **h** = 1 - (-3) = **4**<br>Triangle area **S** = a \* h / 2 = 4 \* 4 / 2 = **8**|

### Reading the Input Data

It is important in such types of assignments where some coordinates are given to pay attention to **the order** in which they are submitted, and to properly understand which of the coordinates we will use and how. In this case, the input is in order **x1, y1, x2, y2, x3, y3**. If we do not follow this sequence, the solution becomes wrong. First we write the code that reads the input data:

![](/assets/chapter-8-1-images/01.Triangle-area-03.png)

### Calculate Triangle Side and Height

We have to calculate **the side** and **the height** of the triangle. From the pictures, as well as the condition **`y2 = y3`**, we notice that the one **side** is always parallel to the horizontal axis. This means that its **length** is equal to the length of the segment between its coordinates **`x2` and `x3`**, which is equal to the difference between the larger and the smaller coordinates. Similarly, we can calculate **the height**. It will always be equal to the difference between **`y1` and `y2`** (or **`y3`**, as they are equal). Since we do not know if **`x2`** is greater than **`x3`**, or **`y1`** will be below or above the triangle side, we will use **the absolute values** of the difference to always get positive numbers, because one segment can not have a negative length.

![](/assets/chapter-8-1-images/01.Triangle-area-04.png)

### Calculate and Print Triangle Area

By our familiar formula of finding an **area of a triangle** we will calculate it. An important thing to keep in mind is that although we get only integers at the input, **the area** will not always be an integer. That's why we use a variable of type **`double`** for the area. We have to convert the right side of the equation, because if we give whole numbers as equation parameters, our result will also be an integer.

![](/assets/chapter-8-1-images/01.Triangle-area-05.png)

The only thing left is to print the area on the console.

![](/assets/chapter-8-1-images/01.Triangle-area-06.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#0](https://judge.softuni.bg/Contests/Practice/Index/516#0).


## Problem: Bricks

Construction workers have to transfer a total of **x bricks**. **Workers** are **w** and work simultaneously. They transport the bricks in trolleys, each with a **capacity of m** bricks. Write a program that reads the integers **x**, **w**, and **m**, and calculates **how much less courses** the workers need to do to transport the bricks.

### Input

The console reads **3 integers** (one per line):
- **The number of bricks x** is read from the first row.
- **The number of workers w** is read from the second row
- **The capacity of the trolley m** is read from the third row.

All input numbers are integers in the range [**1 … 1000**].

### Output

Print on the console **the minimum number of courses** needed to transport the bricks.

### Sample Input and Output

| Input | Output | Comments |
|----|----|----|
|120<br>2<br>30|2|We have **2** workers, each riding on **30** bricks per course. In total, workers are riding **60** bricks per course. To transport **120** bricks, exactly **2** courses are needed.|

| Input | Output | Comments |
|----|----|----|
|355<br>3<br>10|12|We have **3** workers, each riding on **10** bricks per course. In total, workers are riding **30** bricks per course. To transport **355** bricks, exactly **12** courses are needed: **11** complete courses carry **330** bricks and the last **12th** course carries the last **25** bricks.|

| Input | Output | Comments |
|----|----|----|
|5<br>12<br>30|1|We have **5** workers, each riding on **30** bricks per course. In total, workers are riding **150** bricks per course. In order to transport **5** bricks, only **1** course is sufficient (although incomplete, with only 5 bricks).|

### Reading the Input Data and Calculate Bricks per Course

The input is standard, and we only need to be careful about the sequence in which we read the data.

![](/assets/chapter-8-1-images/02.Bricks-01.png)

We calculate how many **bricks** carry workers on a course.

![](/assets/chapter-8-1-images/02.Bricks-02.png)

### Calculate and Print needed Courses

By dividing the total number of **bricks transferred for 1 course**, we will receive the number of **courses** required to carry them. We have to consider that when dividing whole numbers the remainder is neglected and rounded down always. To avoid this, we will convert the right side of the equation to **`double`** and use the **`Math.Ceiling(…)`** function to round the result always up. When the bricks can be transferred with **an exact number of courses**, the division will return a whole number and there will be nothing to round. Accordingly, if not, the result of the division will be **the number of exact courses** but a decimal fraction. The decimal part will be rounded up and we will get the required **1 course** for the remaining bricks.

![](/assets/chapter-8-1-images/02.Bricks-03.png)

Finally, we print the result on the console.

![](/assets/chapter-8-1-images/02.Bricks-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#1](https://judge.softuni.bg/Contests/Practice/Index/516#1).
