# Nested Loops – Problems

**The last** (sixth) problem of the "Programming Basics" Practical Exam requires using of **several nested loops and more complex logic inside them**. The task examines students' ability to think in a algorithmic way and to solve non-trivial problems that require loops. Let's see a few examples of exam problems.


## Problem: Increasing 4 Numbers

For a pair of numbers **a** and **b** generate all four number **n1, n2, n3, n4,** for which **a ≤ n1 <n2 <n3 <n4 ≤ b**.

### Input

The input contains two integers **a** and **b** in the range  [**0 … 1000**], one per line.

### Output

The output contains all **numbers in batches of four**, in ascending order, one per line.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3<br>7|3 4 5 6<br>3 4 5 7<br>3 4 6 7<br>3 5 6 7<br>4 5 6 7|15<br>20|15 16 17 18<br>15 16 17 19<br>15 16 17 20<br>15 16 18 19<br>15 16 18 20<br>15 16 19 20<br>15 17 18 19<br>15 17 18 20<br>15 17 19 20<br>15 18 19 20<br>16 17 18 19<br>16 17 18 20<br>16 17 19 20<br>16 18 19 20<br>17 18 19 20<br>|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|5<br>7|No|10<br>13|10 11 12 13|

### Reading the Input Data

We will read the input data from the console. We also create the additional variable **`count`**, which will keep track of **existing number ranges**.

![](/assets/chapter-8-1-images/11.Increasing-4-numbers-01.png)

### Implementation with 2 Numbers

We will most easily solve the problem if we logically divide it **in parts**. If we are required to draw all the rows from a number between **`a`** and **`b`**, we will do it using **one loop** that takes all the numbers from **`a`** to **`b`**. Let's think how to do this with **series of two numbers**. The answer is easy - we will use **nested loops**.

![](/assets/chapter-8-1-images/11.Increasing-4-numbers-02.png)

We can test the incomplete program to see if it's accurate so far. It must print all pairs of numbers **`i`**, **`j`** for which **`i ≤ j`**.

Since each **next number** of the row must be **greater** than **the previous one**, the second loop will run around **`i + 1`** (the next greater number). Accordingly, if **there is no sequence** of two incremental numbers (**`a`** and **`b`** are equal), the second loop **will not be fulfilled** and nothing will be printed on the console.

### Implementation with 4 Numbers

**Similarly**, what remains is to implement **the nested loops** for **four numbers**. We will add an **increase of the counter** that we initialized in order to know if **there is such a sequence**.

![](/assets/chapter-8-1-images/11.Increasing-4-numbers-03.png)

Finally, we will check if **the counter** is equal to **0** and we will print "**No**" on the console accordingly, if so.

![](/assets/chapter-8-1-images/11.Increasing-4-numbers-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#10](https://judge.softuni.bg/Contests/Practice/Index/516#10).


## Problem: Generating Rectangles

By a given number **n** and **a minimum area m**, all rectangles with whole coordinates in the range [**-n…n**] with an area of at least **m** are generated. Generated rectangles must be printed in the following format:

**(left, top) (right, bottom) -> area**

Rectangles are set using the top left and bottom right corner. The following inequalities are in effect:
-	**-n ≤ left < right ≤ n**
-	**-n ≤ top < bottom ≤ n**

### Input

Two numbers, one per line, are entered from the console:

- An integer **n** in the range [**1 … 100**] - sets the minimum and maximum coordinates of a peak.
- An integer **m** in the range [**0 … 50 000**] - sets the minimum area of the generated rectangles.

### Output

- The described rectangles should be printed on the console in a format such as in the examples below.
- If there are no rectangles for the **n** and **m**, then "**No**" is displayed.
- The order of rectangles is irrelevant.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|1<br>2|(-1, -1) (0, 1) -> 2<br>(-1, -1) (1, 0) -> 2<br>(-1, -1) (1, 1) -> 4<br>(-1, 0) (1, 1) -> 2<br>(0, -1) (1, 1) -> 2|2<br>17|No|

| Input | Output |
| --- | --- |
|3<br>36|(-3, -3) (3, 3) -> 36|

### Reading the Input Data and Sample Idea for the Solution

Read the input data from the console. We will also create a **counter**, which will store the number of rectangles found.

![](/assets/chapter-8-1-images/12.Generating-rectangles-01.png)

It is very important to be able to imagine the problem before we begin to solve it. In our case it is required to search for rectangles in a coordinate system. The thing we know is that the **left point** will always have the coordinate **`x`, smaller** than **the right** one. Accordingly, **the upper one** will always have a smaller **`у`** coordinate than **the lower one**. To find all the rectangles, we'll have to create **a loop** similar to the previous problem, but this time, **not every next loop** will start from **the next number** because some of **the coordinates** can be equal (for example **`left`** and **`top`**).

![](/assets/chapter-8-1-images/12.Generating-rectangles-02.png)

With the variables **`left`** and **`right`** we will follow the coordinates **horizontally** and with **`top`** and **`bottom`** - **vertically**.

### Calculating the Rectangle Area and Printing the Output

The important thing here is knowing the corresponding coordinates so we can correctly calculate the sides of the rectangle. Now we have to find **the area of the rectangle** and check if it is **greater than** or **equal** to **`m`**. One **side** will be **the difference between `left` and `right`** and **the other one - between `top` and `bottom`**. Since the coordinates may be eventually interchanged, we will use **absolute values**. Again, we add **the counter** in the loop, counting **only the rectangles** we write. It is important to note that the writing order is **`left`**, **`top`**, **`right`**, **`bottom`**, as it is set in the problem's description.

![](/assets/chapter-8-1-images/12.Generating-rectangles-03.png)

Finally, we print "**No**" if there are no such rectangles.

![](/assets/chapter-8-1-images/12.Generating-rectangles-04.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#11](https://judge.softuni.bg/Contests/Practice/Index/516#11).
