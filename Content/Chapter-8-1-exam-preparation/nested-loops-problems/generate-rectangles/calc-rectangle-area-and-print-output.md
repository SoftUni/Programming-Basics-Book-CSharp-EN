#### Calculate the Rectangle Area and Print the Output

The important thing here is knowing which coordinates they are so we can correctly calculate the sides of the rectangle. Now we have to find **the area of the rectangle** and check if it is **greater than** or **equal** to **`m`**. The one **side** will be **the difference between `left` and `right`** and **the other one - between `top` and `bottom`**. Since the coordinates may be eventually interchanged, we will use **absolute values**. Again, we add **the counter** in the loop, counting **only the rectangles** we write. It is important to note that the writing order is **`left`**, **`top`**, **`right`**, **`bottom`**, as it is set in the problem's description.

![](/assets/chapter-8-1-images/12.Generating-rectangles-03.png)

Finally, we print "**No**" if there are no such rectangles.

![](/assets/chapter-8-1-images/12.Generating-rectangles-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/516#11](https://judge.softuni.bg/Contests/Practice/Index/516#11).
