### Example: Printing a Triangle

Create a method which prints a triangle as in the examples.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3|1<br>1 2<br>1 2 3<br>1 2<br>1|4|1<br>1 2<br>1 2 3<br>1 2 3 4 <br>1 2 3<br>1 2<br>1|

#### Hints and Guidelines

Before creating a method to print a row with a given beginning and an end, we must read the input number from the console. After that we choose a meaningful name, which describes its purpose, e.g. **`PrintLine`**, and implement it.

![](/assets/chapter-10-images/08.Print-triangle-01.png)

From the drawing exercises we can remember, that it is good practice **to divide the figure into several parts**. to make it easier we will divide the triangle into three parts - upper, middle and lower.

The next step is to print **the upper half** of the triangle using a loop:

![](/assets/chapter-10-images/08.Print-triangle-02.png)

Then we print **the middle line**:

![](/assets/chapter-10-images/08.Print-triangle-03.png)

In the end we print **the lower part** of the triangle, but this time the loop step decreases.

![](/assets/chapter-10-images/08.Print-triangle-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/594#2](https://judge.softuni.bg/Contests/Practice/Index/594#2).