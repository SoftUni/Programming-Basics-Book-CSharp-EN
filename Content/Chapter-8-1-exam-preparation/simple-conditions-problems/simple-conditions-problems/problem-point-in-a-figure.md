# Problem: Point in a Figure

The next sample exam problem is about checking whether given point stays inside or outside given figure (see the image below).

## Video: Point in a Figure

Watch the video lesson about solving the "Point in a Figure" problem: https://youtu.be/SzxHyZVdhEo.

## Problem Description

Write a program that checks whether a point (with coordinates **x** and **y**) is **inside** or **outside** the following figure:
 
![](/assets/chapter-8-1-images/04.Point-in-figure-01.png)

## Input

The console reads **two integers** (one per line): **x** and **y**.

All input numbers are integers in the range **[-1000 … 1000]**.

## Output

Print on the console "**in**" or "**out**" – whether the point is **inside** or **outside** the figure (the outline is inside).

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|8<br>-5|in|6<br>-3|in|

| Input | Output | Input | Output |
|----|----|----|----|
|11<br>-5|out|11<br>2|out|

## Hints and Guidelines

To find out if the **point** is in the figure, we will divide **the figure** into 2 rectangles:

![](/assets/chapter-8-1-images/04.Point-in-figure-02.png)
![](/assets/chapter-8-1-images/04.Point-in-figure-03.png)

A sufficient condition is **the point** to be located in one of them, in order to be in **the figure**.

## Determining the Point Location

We read the input data from the console:

![](/assets/chapter-8-1-images/04.Point-in-figure-04.png)

We will initialize two variables that will mark whether **the point** is in one of the rectangles.

![](/assets/chapter-8-1-images/04.Point-in-figure-05.png)

When printing the message, we will check whether any of the variables has accepted a value of **`true`**. It is enough **only one** of them to be **`true`**, so that the point is in the figure.

![](/assets/chapter-8-1-images/04.Point-in-figure-06.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/516#3](https://judge.softuni.org/Contests/Practice/Index/516#3).
