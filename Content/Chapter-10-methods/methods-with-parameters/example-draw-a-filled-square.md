### Example: Draw a Filled Square

Print on the comsole a filled square with side n, As in the examples.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4|<code>--------</code><br><code>-\\/\\/\\/-</code><br><code>-\\/\\/\\/-</code><br><code>--------</code>|5|<code>----------</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>----------</code>|

#### Hints and Guidelines

The first step is to read the input from the console. After that we need to create a method, which will print the firs and the last rows because they are the same. Let's remember that we must give it **a descriptive name** and give it as **a parameter** the length of the side. We will use the constructor **`new string`**. 

![](/assets/chapter-10-images/09.Draw-filled-square-01.png)

Our next step is to create a method, which will draw the middle rows in the console. Again give it a descriptive name i.e. **`PrintMiddleRow`**.

![](/assets/chapter-10-images/09.Draw-filled-square-02.png)

In the end invoke the methods in the **`Main()`** method of the program in order to draw the whole square:

![](/assets/chapter-10-images/09.Draw-filled-square-03.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/594#3](https://judge.softuni.bg/Contests/Practice/Index/594#3).