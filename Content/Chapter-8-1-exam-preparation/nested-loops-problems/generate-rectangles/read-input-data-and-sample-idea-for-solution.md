#### Reading the Input Data and Sample Idea for the Solution

Read the input data from the console. We will also create a **counter**, which will keep the number of rectangles found.

![](/assets/chapter-8-1-images/12.Generating-rectangles-01.png)

It is very important to be able to imagine the problem before we begin to solve it. In our case it is required to search for rectangles in a coordinate system. The thing we know is that the **left point** will always have the coordinate **`x`, smaller** than **the right**. Accordingly, **the upper one** will always have a smaller **`у`** coordinate than **the lower one**. To find all the rectangles, we'll have to make **a loop** similar to the previous problem, but this time, **not every next loop** will start from **the next number** because some of **the coordinates** can be equal (for example **`left`** and **`top`**).

![](/assets/chapter-8-1-images/12.Generating-rectangles-02.png)

With the variables **`left`** and **`right`** we will follow the coordinates **horizontally** and with **`top`** and **`bottom`** - **vertically**.
