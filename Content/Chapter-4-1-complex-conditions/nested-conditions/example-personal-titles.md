# Example: Personal Titles

Depending on **age** (decimal number and **gender** (**m** / **f**), print a personal title:
* “**Mr.**” – a man (gender “**m**”) – 16 or more years old.
* “**Master**” – a boy (gender “**m**”) under 16 years.
* “**Ms.**” – a woman (gender “**f**”) – 16 or more years old.
* “**Miss**” – a girl (gender “**f**”) under 16 years.

## Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|12<br>f|Miss|17<br>m|Mr.|

| Input | Output | Input | Output |
|----|----|----|----|
|25<br>f|Ms.|13.5<br>m|Master|

## Video: Personal Titles

Watch this video to learn how to solve this problem: https://youtu.be/7WiBbMOAc7Q.

## Solution

We should notice that the **output** of the program **depends on a few things**. **First**, we have to check what is the entered **gender** and **then** check the **age**. Respectively, we are going to use **a few** **`if-else`** blocks. These blocks will be **nested**, meaning from **the result** of the first, we are going to **define** which one of the **others** to execute.

The diagram below illustrates the process in detail:

![](/assets/chapter-4-images/01.Personal-titles-01.jpg)

After reading the input data from the console, the following program logic should be executed:

![](/assets/chapter-4-images/01.Personal-titles-02.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/508#0](https://judge.softuni.org/Contests/Practice/Index/508#0).
