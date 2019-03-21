# Problem: Christmas Hat

Write a program that reads from the console an **integer `n`** and draws a **Christmas hat** with width of **4 \* `n` + 1 columns** and height of **2 \* `n` + 5 rows**, as in the examples below.

## Input Data

The input is read from the console – an **integer `n`** within the range [**3 … 100**].

## Output Data

Print on the console a **Christmas hat**, exactly like in the examples.

## Sample Input and Output

| Input | Output |
|:-----:|:-----:|
|4|<code>......./&#124;\\.......</code><br><code>.......\\&#124;/.......</code><br><code>.......\*\*\*.......</code><br><code>......\*-\*-\*......</code><br><code>.....\*--\*--\*.....</code><br><code>....\*---\*---\*....</code><br><code>...\*----\*----\*...</code><br><code>..\*-----\*-----\*..</code><br><code>.\*------\*------\*.</code><br><code>\*-------\*-------\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code>|

| Input | Output |
|:-----:|:-----:|
|7|<code>............./&#124;\\.............</code><br><code>.............\\&#124;/.............</code><br><code>.............\*\*\*.............</code><br><code>............\*-\*-\*............</code><br><code>...........\*--\*--\*...........</code><br><code>..........\*---\*---\*..........</code><br><code>.........\*----\*----\*.........</code><br><code>........\*-----\*-----\*........</code><br><code>.......\*------\*------\*.......</code><br><code>......\*-------\*-------\*......</code><br><code>.....\*--------\*--------\*.....</code><br><code>....\*---------\*---------\*....</code><br><code>...\*----------\*----------\*...</code><br><code>..\*-----------\*-----------\*..</code><br><code>.\*------------\*------------\*.</code><br><code>\*-------------\*-------------\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br>|

### Problem Analysis

In tasks requiring **drawing** on the console, most often the user inputs **an integer** that is related to the **total size of the figure** that we need to draw. As the task requirements mention how the total length and width of the figure are calculated, we can use them as **starting points**. In the examples it is clear that regardless of the input data, we always have **first two rows** that are almost identical.

<code>......./\|\\.......</code><br><code>.......\\\|/.......</code>

We also notice that the **last three rows** are always present, as **two** of them are completely **the same**.

<code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code>

By these observations we can come up with the **formula** for the **height of the variable part** of the Christmas hat. We use the formula specified in the task to calculate the total height, by subtracting the size of the unchangeable part. We obtain **`(2 * n + 5) – 5`** or **`2 * n`**.

### Guidelines for Drawing the Dynamic Part of the Figure

To **draw** the **dynamic** or the variable part of the figure, we will use a **loop**. The size of the loop will be from **0** to the **width** that we have by requirements, namely **`4 * n + 1`**. Since we will use this formula in **a few places** in the code, it is a good practice to declare it in a **separate variable**. Before running the loop, we should **declare variables** for the **number** of individual symbols that participate in the dynamic part: **dots** and **dashes**. By analyzing examples, we can also prepare formulas for the **starting values** of these variables. Initially, the **dashes** are **0**, but it is clear that we can calculate the number of **dots** by subtracting **3** from the **total width** (the number of symbols that are building the top of the Christmas hat) and then **dividing by 2**, as the number of dots on both sides of the hat is the same.

<code>.......\*\*\*.......</code><br><code>......\*-\*-\*......</code><br><code>.....\*--\*--\*.....</code><br><code>....\*---\*---\*....</code><br><code>...\*----\*----\*...</code><br><code>..\*-----\*-----\*..</code><br><code>.\*------\*------\*.</code><br><code>\*-------\*-------\*</code>

What remains is to execute the body of the loop, as **after each** drawing we **decrease** the number of dots by **1** and **increase the number of dashes** by **1**. Let's not forget to draw one **star** between each of them.
The sequence of drawing in the body of the loop is the following:

* Symbol string of dots
* Star
* Symbol string of dashes
* Star
* Symbol string of dashes
* Star
* Symbol string of dots

In case we have worked properly, we will obtain figures identical to those in the examples.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/517#4](https://judge.softuni.org/Contests/Practice/Index/517#4).
