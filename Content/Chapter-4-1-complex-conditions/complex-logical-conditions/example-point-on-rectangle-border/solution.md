#### Solution

The point lies on any of the sides of the rectangle if:
* **x** coincides with **x1** or **x2** and at the same time **y** is between **y1** and **y2** or
* **y** coincides with **y1** or **y2** and at the same time **x** is between **x1** and **x2**.

![](/assets/chapter-4-images/06.Point-on-rectangle-border-02.png)

The previous evaluation might be simplified by the following way:

![](/assets/chapter-4-images/06.Point-on-rectangle-border-03.png)

The second way with the additional boolean variables is longer, but much more understandable than th first one, isn't it? We recommend to you when you write boolean conditions, to make them **easy to read and uderstand**, and not short. If you need to, use additional variables with meaningful names. The names of the boolean variables have to hint what the value that is kept in them represents.

It is left to finish writing the code to print “**Inside / Outside**”, if the point is not onto any of the sides of the rectangle.

#### Testing in the Judge System

After you finish writing the solution, you can test it here: [https://judge.softuni.bg/Contests/Practice/Index/508#5](https://judge.softuni.bg/Contests/Practice/Index/508#5).