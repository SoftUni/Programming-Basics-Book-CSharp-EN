# Problem: Perfect Diamond

The next sample exam problem is about using nested loops and calculations to print on the console a diamond of given size, like the ones shown below in the examples.

## Video: Perfect Diamond

Watch the video lesson about solving the "Perfect Diamond" problem: https://youtu.be/UqQFpM_cgbY.

## Problem Description

Write a program that reads an integer **n** from the console and draws **a perfect diamond** with size **n** as in the examples below.

## Input

The input is an integer **n** within the range [**1 … 1000**].

## Output

The diamond should be printed on the console as in the examples below.

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|2|<code>&nbsp;&#42;&nbsp;</code><br><code>&#42;-&#42;</code><br><code>&nbsp;&#42;&nbsp;</code>|3|<code>&nbsp;&nbsp;&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;&nbsp;&nbsp;</code><br>|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4|<code>&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;</code><br>|5|<code>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;-&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;-&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;&nbsp;</code><br>|

## Hints and Guidelines

In tasks for drawing figures, the most important thing to consider is **the sequence** in which we will draw. Which items are **repeated** and with what **steps**? We can clearly see that **the top and bottom** parts of the diamond are the **same**. The easiest way to solve the problem is by creating **a loop** that draws the **upper part**, and then **another loop** that draws the **bottom part** (opposite to the top one).

## Reading the Input Data

We will read the number **n** from the console.

![](/assets/chapter-8-1-images/09.Perfect-diamond-01.png)

## Printing the Top Part of the Diamond

We start painting **the top half** of the diamond. We clearly see that **each row** starts with a **few empty spaces and <code>*</code>**. If we take a closer look, we will notice that **the empty spaces** are always equal to **`n` – the number of lines** (the first row is n-1, the second – n-2, etc.). We will start by drawing the number of **empty spaces**, and the **first asterisk**. Let's not forget to use **`Console.Write(…)`** instead of **`Console.WriteLine(…)`** to stay on **the same line**. At the end of the line we write **`Console.WriteLine(…)`** to go to **a new line**. Notice that we start counting from **1, not from 0**. Next, we will only add a few times **`-*`** to **finish the line**.

Here is part of the code for the **top of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-02.png)

What remains is to **complete each line** with the required number of **`-*`** elements. On each row we have to add **`i-1`** such **items** (on the first 1-1 -> 0, the second -> 1, etc.)

Here is the complete code for drawing **the top of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-03.png)

## Printing the Bottom Part of the Diamond

To draw the **bottom part** of the diamond, we have to reverse **the upper part**. We will count from **`n-1`**, because if we start from **`n`**, we will draw the middle row twice. Do not forget to change **the step** from **`++` to `--`**.

Here is the code for drawing **the bottom part of the diamond**:

![](/assets/chapter-8-1-images/09.Perfect-diamond-04.png)

What remains is **to assemble the whole program** by first reading the input, printing the top part of the diamond and then the bottom part of the diamond.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/516#8](https://judge.softuni.org/Contests/Practice/Index/516#8).
