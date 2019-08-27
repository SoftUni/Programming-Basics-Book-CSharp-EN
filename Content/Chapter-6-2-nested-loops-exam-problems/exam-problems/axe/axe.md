# Problem: Axe

Write a program that takes **an integer n** and draws an axe with size as shown below. The width of the axe is **`5 * N`**  columns.

## Input Data

The input is **an integer `n`** within the range [**2...42**].

## Output Data

Print **an axe** on the console just as shown in the examples.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|2|<code>------\*\*--</code><br><code>------\*-\*-</code><br><code>\*\*\*\*\*\*\*-\*-</code><br><code>------\*\*\*-</code><br>|5|<code>---------------\*\*--------</code><br><code>---------------\*-\*-------</code><br><code>---------------\*--\*------</code><br><code>---------------\*---\*-----</code><br><code>---------------\*----\*----</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----\*----</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----\*----</code><br><code>---------------\*----\*----</code><br><code>--------------\*\*\*\*\*\*\*\*---</code><br>|

| Input | Output |
| --- | --- |
|8|<code>------------------------\*\*--------------</code><br><code>------------------------\*-\*-------------</code><br><code>------------------------\*--\*------------</code><br><code>------------------------\*---\*-----------</code><br><code>------------------------\*----\*----------</code><br><code>------------------------\*-----\*---------</code><br><code>------------------------\*------\*--------</code><br><code>------------------------\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>------------------------\*-------\*-------</code><br><code>-----------------------\*---------\*------</code><br><code>----------------------\*-----------\*-----</code><br><code>---------------------\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----</code><br>|

## Hints and Guidelines

In order to solve the problem, we first need to calculate **the dashes in the left**, **the middle dashes**, **the dashes in the right** and the whole length of the figure.

![](/assets/chapter-6-2-images/05.Axe-01.png)

### Divide the Figure into Parts

We divide the figure into 3 parts: upper part, middle part (the handle), down part.

After we have declared and initialized **the variables**, we can begin drawing the figure by starting with **the upper part**. We can see from the examples what the structure of **the first row** is, and we can create a loop, which runs **`n`** times. At each iteration of the loop **the middle dashes** increase by 1, and **the right dashes** decrease by 1.

![](/assets/chapter-6-2-images/05.Axe-02.png)

In order to use again **the variables** that we created in order to draw the handle of the axe, we need to decrease **the middle dashes** by 1, and we need to increase **the left dashes** by 1.

![](/assets/chapter-6-2-images/05.Axe-03.png)

### Printing the Handle 

We can draw **the handle of the axe** by creating a loop, which runs **`n - 2`** times. We can see in the examples what its structure is.

![](/assets/chapter-6-2-images/05.Axe-04.png)

### Printing the Lower Part of the Axe

We need to divide **the lower part** of the figure into two sub-parts – **head of the axe** and **the last row of the figure**. We will print **the head of the axe** on the console by creating a loop that runs **`n / 2 - 1`** times. At each iteration **the left dashes** and **the right dashes** decrease by 1, and **the middle dashes** increase by 2.

![](/assets/chapter-6-2-images/05.Axe-05.png)

For **the last row** of the figure we can use the three declared and initialized variables **`leftDashes`**, **`middleDashes`**, **`rightDashes`** again.

![](/assets/chapter-6-2-images/05.Axe-06.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/513#4](https://judge.softuni.org/Contests/Practice/Index/513#4).
