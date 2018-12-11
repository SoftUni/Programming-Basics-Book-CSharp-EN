#### Determining Increasing Sequence

We begin to rotate the numbers and check if the present number **`a`** is larger than the previous **`aPrev`**. If this is true, then the row **is growing** and we need to increase its number by **1**. This is preserved in the variable that tracks the length of the sequence we are currently in - **`countCurrentLongest`**. If the number **`a`** is **not greater** than the previous one, it means that **a new sequence** starts and we have to start the count from **1**. Finally, after all the checks, **`aPrev`** becomes **the number** we are **currently** using and we start the loop from the beginning with **the next** entered **`a`**.

Here is a sample implementation of the algorithm described:

![](/assets/chapter-8-1-images/08.Increasing-numbers-02.png)
