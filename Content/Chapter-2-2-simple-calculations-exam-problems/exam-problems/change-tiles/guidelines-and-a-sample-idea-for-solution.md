### Tips and Tricks

Let's make a draft to clear the task requirements. It can look the following way: 

![](/assets/chapter-2-2-images/03.Change-tiles-01.png)

#### Idea for Solution

It is required to calculate **the number of tiles** that have to be changed, as well as **the total time for replacing them**. In order to find the **number of tiles**, we have to calculate the **area that needs to be covered** and **divide it by the area per tile**.The ground is square, therefore, we find the total area by multiplying its side by its value **`N * N`**. After that, we calculate **the area that the bench takes up** by multiplying its two sides as well **`M * O`**. After subtracting the area of the bench by the area of the whole ground, we receive the area that needs to be repaired.

We calculcate the area of a single tile by **multiplying its two sides with one another** **`W * L`**. As we already stated, now we have to **divide the area for covering by the area of a single tile**. This way, we find the number of necessary tiles which we multiply by **0.2** (the time needed for changing a tile). Now, we have the wanted output. ****
