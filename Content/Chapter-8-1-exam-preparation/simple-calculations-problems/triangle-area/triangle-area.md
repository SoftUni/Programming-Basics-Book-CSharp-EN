### Problem: Triangle Area

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

#### Input
The console reads **6 integers** (one per line):
**x1, y1, x2, y2, x3, y3.**
-	All input numbers are in range [**-1000 … 1000**].
-	It is guaranteed that **y2 = y3**.

#### Output
Print on the console **the area of the triangle**.

#### Sample Input and Output

| Input | Output | Visualization | Comments |
|----|----|----|----|
|5<br>-2<br>6<br>1<br>1<br>1|7.5|![](/assets/chapter-8-1-images/01.Triangle-area-01.png)|The side of the triangle **а** = 6 - 1 = **5**<br>The height of the triangle **h** = 1 - (-2) = **3**<br>Triangle area **S** = a \* h / 2 = 5 \* 3 / 2 = **7.5**|

| Input | Output | Visualization | Comments |
|----|----|----|----|
|4<br>1<br>-1<br>-3<br>3<br>-3|8|![](/assets/chapter-8-1-images/01.Triangle-area-02.png)|The side of the triangle **а** = 3 - (-1) = **4**<br>The height of the triangle **h** = 1 - (-3) = **4**<br>Triangle area **S** = a \* h / 2 = 4 \* 4 / 2 = **8**|
