#### Hints and Guidelines

What we know from the problem explanation is that the diamond is with size **`n` x `n`**.

From the example input and output we can conclude that all rows contain exactly **`n`** symbols, and all the rows, with the exception of the top and bottom ones, have **2 stars**. We can mentally divide the diamond into 2 parts:
* **Upper** part. It starts from the upper tip down to the middle.
* **Lower** part. It starts from the row below the middle one and goes down to the lower tip (inclusive).

##### Upper Part
* If **n** is an **odd** number, it starts with **1 star**.
* If **n** is an **even** number, it starts with **2 stars**.
* With each row down, the stars get further away from each other.
* The space between, before and after **the stars** is filled up with **dashes**.

##### Lower Part
* With each row down, the stars get closer to each other. This means that the space (**the dashes**) between them is getting smaller and the space (**the dashes**) on the left and on the right is getting larger.
* The bottom-most part has 1 or 2 **stars**, depending on whether **n** is an even or odd number.

##### Upper and Lower Parts of the Diamond
* On each row, except the middle one, the stars are surrounded by inner and outer **dashes**.
* On each row there is space between the two **stars**, except on the first and the last row (sometimes **the star is 1**).
