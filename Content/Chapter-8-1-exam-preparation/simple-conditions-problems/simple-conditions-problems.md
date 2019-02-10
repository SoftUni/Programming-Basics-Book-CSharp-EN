# Simple Conditions – Problems

**The second** problem of the "Programming Basics" Practical Exam covers **conditional statements and simple calculations**. Let's see a few examples.


## Problem: Point on a Segment

**A horizontal segment** is placed on a horizontal line, set with the **x** coordinates of both ends: **first** and **second**. **A point** is located **on** the same horizontal line and is set with its **x coordinate**. Write a program that checks whether the point is **inside or outside the segment** and calculates **the distance to the nearest end** of the segment.

### Input

The console reads **3 integer numbers** (one per line):
- On the first line the number "first" is read – **one end of the segment**.
- On the second line the number "second" is read – **the other end of the segment**.
- On the third line the number "point" is read – **the location of the point**.

All input numbers are integers in the range [**-1000 … 1000**].

### Output

Print the result on the console:
- On the first line, print "**in**" or "**out**" – whether the point is inside or outside the segment.
- On the second line, print the distance from the point to the nearest end of the segment.

### Sample Input and Output

| Input | Output | Visualization |
| --- | --- | --- |
|10<br>5<br>7|in<br>2|![](/assets/chapter-8-1-images/03.Point-on-segment-01.png)|

| Input | Output | Visualization |
| --- | --- | --- |
|8<br>10<br>5|out<br>3|![](/assets/chapter-8-1-images/03.Point-on-segment-02.png)|

| Input | Output | Visualization |
| --- | --- | --- |
|1<br>-2<br>3|out<br>2|![](/assets/chapter-8-1-images/03.Point-on-segment-03.png)|

### Video: Point on a Segment

Watch the video lesson about solving the "Point on a Segment" problem: https://youtu.be/isrSHqLvV90.

### Reading the Input Data

We read the input from the console.

![](/assets/chapter-8-1-images/03.Point-on-segment-04.png)

### Calculate the Minimum Distance to the Closest End of the Segment

Since we do not know which **point** is on the left and which is on the right, we will create two variables to mark this. Since the **left point** is always the one with the smaller **x coordinate**, we will use **`Math.Min(…)`** to find it. Accordingly, **the right one** is always the one with a larger **x coordinate** and we will use **`Math.Max(…)`**. We will also find the distance from **point x** to **the two points**. Because we do not know their position relative to each other, we will use **`Math.Abs(…)`** to get a positive result.

![](/assets/chapter-8-1-images/03.Point-on-segment-05.png)

The shorter of the two **distances** we can found using **`Math.Min(…)`**.

![](/assets/chapter-8-1-images/03.Point-on-segment-06.png)

### Determining if Point is In or Out the Segment and Printing the Result

What remains is to find whether **the point** is on or out of the line. The point will be **on the line** whenever it **matches** one of the other two points or its x coordinate lies **between them**. Otherwise, the point is **outside the line**. After checking, we display one of the two messages, depending on which condition is satisfied.

![](/assets/chapter-8-1-images/03.Point-on-segment-07.png)

Finally, we print **the distance** previously found.

![](/assets/chapter-8-1-images/03.Point-on-segment-08.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/516#2](https://judge.softuni.org/Contests/Practice/Index/516#2).


## Problem: Point in a Figure

Write a program that checks whether a point (with coordinates **x** and **y**) is **inside** or **outside** the following figure:
 
![](/assets/chapter-8-1-images/04.Point-in-figure-01.png)

### Input

The console reads **two integers** (one per line): **x** and **y**.

All input numbers are integers in the range **[-1000 … 1000]**.

### Output

Print on the console "**in**" or "**out**" – whether the point is **inside** or **outside** the figure (the outline is inside).

### Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|8<br>-5|in|6<br>-3|in|

| Input | Output | Input | Output |
|----|----|----|----|
|11<br>-5|out|11<br>2|out|

### Video: Point in a Figure

Watch the video lesson about solving the "Point in a Figure" problem: https://youtu.be/SzxHyZVdhEo.

### Hints and Guidelines

To find out if the **point** is in the figure, we will divide **the figure** into 2 rectangles:

![](/assets/chapter-8-1-images/04.Point-in-figure-02.png)
![](/assets/chapter-8-1-images/04.Point-in-figure-03.png)

A sufficient condition is **the point** to be located in one of them, in order to be in **the figure**.

### Determining Point Location

We read the input data from the console:

![](/assets/chapter-8-1-images/04.Point-in-figure-04.png)

We will initialize two variables that will mark whether **the point** is in one of the rectangles.

![](/assets/chapter-8-1-images/04.Point-in-figure-05.png)

When printing the message, we will check whether any of the variables has accepted a value of **`true`**. It is enough **only one** of them to be **`true`**, so that the point is in the figure.

![](/assets/chapter-8-1-images/04.Point-in-figure-06.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/516#3](https://judge.softuni.org/Contests/Practice/Index/516#3).
