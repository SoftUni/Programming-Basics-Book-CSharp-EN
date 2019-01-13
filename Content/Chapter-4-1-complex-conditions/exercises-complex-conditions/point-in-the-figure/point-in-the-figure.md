### Problem: * Point in the Figure

The figure consists of **6 blocks with size h \* h**, placed as in the figure below. The lower left angle of the building is on position {0, 0}. The upper right angle of the figure is on position {**2\*h**, **4\*h**}. The coordinates given in the figure are for **h = 2**:

![](/assets/chapter-4-images/13.Point-in-the-figure-01.png)

Write a program that enters an integer **h** and the coordinates of a given **point {x, y}** (integers) and prints whether the point is inside the figure (**inside**), outside of the figure (**outside**) or on any of the borders of the figure (**border**).

#### Sample Input and Output

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|2<br>3<br>10|outside|2<br>3<br>1|inside|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|2<br>2<br>2|border|2<br>6<br>0|border|

| Input | Output | Input | Output |
|----|-----|-----|-----|
|2<br>0<br>6|outside|15<br>13<br>55|outside|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|15<br>29<br>37|inside|15<br>37<br>18|outside|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|15<br>-4<br>7|outside|15<br>30<br>0|border|
