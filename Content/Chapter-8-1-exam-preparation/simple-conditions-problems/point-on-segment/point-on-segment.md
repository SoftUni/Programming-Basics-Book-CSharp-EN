### Problem: Point on Segment

**A horizontal segment** is set on a horizontal line, set with the **x** coordinates of both ends: **first** and **second**. **A point** is located **on** the same horizontal line and is set with its **x coordinate**. Write a program that checks whether the point is **inside or outside the segment** and calculates **the distance to the nearest end** of the segment.

#### Input

The console reads **3 integer numbers** (one per line):
- On the first line stands the number first - **one end of the segment**.
- On the second line stands the number second – **the other end of the segment**.
- On the third line stands the number point – **the location of the point**.

All input numbers are integers in the range [**-1000 … 1000**].

#### Output

Print the result on the console:
- On the first line print "**in**" or "**out**" - whether the point is inside or outside the segment.
- On the second line print the distance from the point to the nearest end of the segment.

#### Sample Input and Output

| Input | Output | Visualization |
| --- | --- | --- |
|10<br>5<br>7|in<br>2|![](/assets/chapter-8-1-images/03.Point-on-segment-01.png)|

| Input | Output | Visualization |
| --- | --- | --- |
|8<br>10<br>5|out<br>3|![](/assets/chapter-8-1-images/03.Point-on-segment-02.png)|

| Input | Output | Visualization |
| --- | --- | --- |
|1<br>-2<br>3|out<br>2|![](/assets/chapter-8-1-images/03.Point-on-segment-03.png)|
