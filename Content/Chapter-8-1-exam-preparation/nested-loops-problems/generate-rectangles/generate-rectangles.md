### Problem: Generate Rectangles

By a given number **n** and **a minimum area m**, all rectangles with whole coordinates in the range [**-n…n**] with an area of at least **m** are generated. Generated rectangles must be print in the following format:

**(left, top) (right, bottom) -> area**

Rectangles are set using the top left and bottom right corner. The following inequalities are in effect:
-	**-n ≤ left < right ≤ n**
-	**-n ≤ top < bottom ≤ n**

#### Input

Two numbers, one per line, are entered from the console:

- An integer **n** in the range [**1 … 100**] - sets the minimum and maximum coordinates of a peak.
- An integer **m** in the range [**0 … 50 000**] - sets the minimum area of the generated rectangles.

#### Output

- The described rectangles should be printed on the console in a format such as in the examples below.
- If there are no rectangles for the **n** and **m**, then "**No**" is displayed.
- The order of rectangles is irrelevant.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|1<br>2|(-1, -1) (0, 1) -> 2<br>(-1, -1) (1, 0) -> 2<br>(-1, -1) (1, 1) -> 4<br>(-1, 0) (1, 1) -> 2<br>(0, -1) (1, 1) -> 2|2<br>17|No|

| Input | Output |
| --- | --- |
|3<br>36|(-3, -3) (3, 3) -> 36|
