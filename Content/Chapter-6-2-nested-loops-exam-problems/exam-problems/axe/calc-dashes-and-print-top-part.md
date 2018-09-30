#### Counting the Number of Dashes and Printing the Upper Part of the Axe

In order to solve the problem we first need to calculate **the dashes in the left**, **the middle dashes**, **the dashes in the right** and the whole length of the figure.

![](/assets/chapter-6-2-images/05.Axe-01.png)

After we have declared and initialized **the variables**, we can begin drawing the figure by starting with **the upper part**. We can see from the examples what the structure of **the first row** is and we can create a loop, which recurs **`n`** times. At each iteration of the loop **the middle dashes** increase by 1, and **the right dashes** decrease by 1.

![](/assets/chapter-6-2-images/05.Axe-02.png)

In order to use **the variables** we created again to draw the handle of the axe, we need to decrease **the middle dashes** by 1, and we need to increase **the left dashed** by 1.

![](/assets/chapter-6-2-images/05.Axe-03.png)