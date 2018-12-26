#### Tips and Tricks

What we know from the problem explanation is that the diamond is with size **`n` x `n`**.

From the example input and output we can conclude that all rows contain exactly **`n`** symbols and all the rows, with the exception of the top and bottom, have **2 stars**. We can mentally divide the diamond into 2 parts:
* **Upper** part. It starts from the upper tip down to the middle.
* **Lower** part. It starts from the row below the middle and goes down to the lower tip (inclusive).

##### Upper Part
* If **n** is **odd**, it starts with **1 star**.
* If **n** is **even**, it starts with **2 stars**.
* With each row down the stars get further away from each other.
* The space between, before and after **the stars** is filled with **dashes**.

##### Lower Part
* With each row down the stars get closer to each other. This means that the space (**the dashes**) between them is getting smaller and the space (**the dashes**) in the left and in the right is getting larger.
* The bottom-most part is with 1 or 2 **stars**, depending on if **n** is even or odd.

##### Upper and Lower Parts of the Diamond
* On each row, except the middle row, the stars are surrounded by inner and outer **dashes**.
* On each row there is space between the two **stars**, except on the first and the last row (sometimes **the star is 1**).
