#### Generate Numerical Spiral

We need to think of **a relation** between numbers in the numerical spiral so we can easily generate every next number without having to look at matrices and crawl them. If we carefully look at the picture from the description, we can notice that **every 2 "turns" in the spiral, the numbers we skip are increased by 1**, i.e. from *5 to 7* and from *7 to 9*, neither 1 number is skipped, but we directly **add with the step** of the sequence. From *9 to 13* and from *13 to 17* we skip a number, i.e. we add the step twice. From *17 to 23* and from *23 to 29* we skip two numbers, i.e. we add the step three times and so on.

Thus, we see that for the first two we have **`the last number + 1 * the step`**, the next two we add with the **`2 * the step`** and so on. Every time we want to get to the next number of the spiral we will have to make such calculations.

![](/assets/chapter-9-images/01.Crossing-sequences-04.png)

What we have to take care of is **for every two numbers, our multiplier** (let's call it "coefficient") **increases with 1** (**` spiralStepMul++`**), which can be achieved with a simple check (**`spiralCount % 2 == 0`**). The whole code from the generation of the spiral in **an array** is given below.

![](/assets/chapter-9-images/01.Crossing-sequences-05.png)
