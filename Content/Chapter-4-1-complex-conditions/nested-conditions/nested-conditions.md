# Nested Conditions

Pretty often the program logic requires the use of **`if`** or **`if-else`** statements, which are contained one inside another. They are called **nested** **`if`** or **`if-else`** statements. As implied by the title **"nested"**, these are **`if`** or **`if-else`** statements that are placed inside other **`if`** or **`else`** statements.

```csharp
if (condition1)
{
    if (condition2)
    {
        // body; 
    }
    else
    {
        // body;
    }
}
```

## Video: Nested Conditional Statements

Watch a video lesson about the nested if-conditions: https://youtu.be/4ugMAlkQAMo.

## Deep Nesting

Nesting of **more than three conditional statements** inside each other is not considered a good practice and **has to be avoided**, mostly through optimization of the structure/the algorithm of the code and/or by using another type of conditional statement, which we are going to examine below in this chapter.

## Example: Titles According to Age and Sex

Depending on **age** (decimal number and **gender** (**m** / **f**), print a personal title:
* “**Mr.**” – a man (gender “**m**”) – 16 or more years old.
* “**Master**” – a boy (gender “**m**”) under 16 years.
* “**Ms.**” – a woman (gender “**f**”) – 16 or more years old.
* “**Miss**” – a girl (gender “**f**”) under 16 years.

### Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|12<br>f|Miss|17<br>m|Mr.|

| Input | Output | Input | Output |
|----|----|----|----|
|25<br>f|Ms.|13.5<br>m|Master|

### Solution

We should notice that the **output** of the program **depends on a few things**. **First** we have to check what is the entered **gender** and **then** check the **age**. Respectively, we are going to use **a few** **`if-else`** blocks. These blocks will be **nested**, meaning from **the result** of the first, we are going to **define** which one of the **others** to execute.

![](/assets/chapter-4-images/01.Personal-titles-01.jpg)

After reading the input data from the console, the following program logic should be executed:

![](/assets/chapter-4-images/01.Personal-titles-02.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/508#0](https://judge.softuni.bg/Contests/Practice/Index/508#0).

## Example: Small Shop

A Bulgarian entrepreneur opens **small shops** in **a few cities** with different **prices** for the following **products**:

|product / city|Sofia|Plovdiv|Varna|
|:-------:|:-------:|:-------:|:-------:|
|coffee<br>water<br>beer<br>sweets<br>peanuts|0.50<br>0.80<br>1.20<br>1.45<br>1.60<br>|0.40<br>0.70<br>1.15<br>1.30<br>1.50<br>|0.45<br>0.70<br>1.10<br>1.35<br>1.55|

Calculate the price by the given **city** (string), **product** (string) and **quantity** (decimal number).

### Sample Input and Output

| Input | Output | Input | Output |
|-------|-------|-------|-------|
|coffee<br>Varna<br>2|0.9|peanuts<br>Plovdiv<br>1|1.5|

| Input | Output | Input | Output |
|-------|-------|-------|-------|
|beer<br>Sofia<br>6|7.2|water<br>Plovdiv<br>3|2.1|

### Solution

We **convert** all of the letters into **lower register** using the function **`.ToLower()`**, in order to compare products and cities **no matter** what the letters are – small or capital ones.

![](/assets/chapter-4-images/02.Small-shop-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/508#1](https://judge.softuni.bg/Contests/Practice/Index/508#1).
