# More Complex Conditions

Let's take a look at how we can create more complex logical conditions. We can use the logical "**AND**" (**`&&`**), logical "**OR**" (**`||`**), logical **negation** (**`!`**) and **brackets** (**`()`**).

## Logical "AND"

As we saw, in some tasks we have to make **many checks at once**. But what happens when in order to execute some code **more** conditions have to be executed and we **don't want to** make a **negation** (**`else`**) for each one of them? The option with nested **`if` blocks** is valid, but the code would look very **unordered** and for sure – **hard** to read and maintain.  

The logical "**AND**" (operator **`&&`**) means a few conditions have to be **fulfilled simultaneously**. The following table of truthfulness is applicable:

|a|b|a && b|
|-----|-----|-----|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>false<br>false<br>false|

### Video: Logical "AND"

Watch this video to learn how to use logical "AND" in programming: https://youtu.be/V86_z8GWarM.

### How the && Operator Works?

The **`&&`** operator accepts **a couple of Boolean** (conditional) statements, which have a **`true`** or **`false`** value, and returns **one** bool statement as a **result**. Using it **instead** of a couple of nested **`if`** blocks, makes the code **more readable**, **ordered** and **easy** to maintain. But how does it **work**, when we put a **few** conditions one after another? As we saw above, the logical **"AND"** returns **`true`**, **only** when it accepts as **arguments statements** with value **`true`**. Respectively, when we have a **sequence** of arguments, the logical "AND" **checks** either until one of the arguments is **over**, or until it **meets** an argument with value **`false`**. 

**Example**:

```csharp
bool a = true;
bool b = true;
bool c = false;
bool d = true;
bool result = a && b && c && d;
// false (as d is not being checked)
```

The program will run in the **following** way: **It starts** the check form **`a`**, **reads** it and accepts that it has a **`true`** value, after which it **checks** **`b`**. After it has **accepted** that **`a`** and **`b`** return **`true`**, **it checks the next** argument. It gets to **`c`** and sees that the variable has a **`false`** value. After the program accepts that the argument **`c`** has a **`false`** value, it calculates the expression **before `c`**, **independent** of what the value of **`d`** is. That is why the evaluation of **`d`** is being **skipped** and the whole expression is calculated as **`false`**.

![](/assets/chapter-4-images/00.Logical-and-01.png)

### Example: Point in a Rectangle

Checks whether **point {x, y}** is placed **inside the rectangle {x1, y1} – {x2, y2}**. The input data is read from the console and consists of 6 lines: the decimal numbers **x1**, **y1**, **x2**, **y2**, **x** and **y** (as it is guaranteed that **x1 < x2** and **y1 < y2**).

#### Sample Input and Output

| Input | Output | Visualization |
|-----|------|:------:|
|2<br>-3<br>12<br>3<br>8<br>-1|Inside|![shop](/assets/chapter-4-images/03.Point-in-rectangle-01.png)|

#### Solution

A point is internal for a given polygon, if the following four conditions are applied **at the same time**:

* The point is placed to the right from the left side of the rectangle.
* The point is placed to the left from the right side of the rectangle.
* The point is placed downwards from the upper side of the rectangle.
* The point is placed upwards from the down side of the rectangle.

![](/assets/chapter-4-images/03.Point-in-rectangle-03.PNG)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/508#2](https://judge.softuni.bg/Contests/Practice/Index/508#2).

## Logical "OR"

The logical **"OR"** (operator **`||`**) means that **at least one** among a few conditions is fulfilled. Similar to the operator **`&&`**, the logical **"OR"** accepts a few arguments of **bool** (conditional) type and returns **`true`** or **`false`**. We can easily guess that we **obtain** a value **`true`** every time when at least **one** of the arguments has a **`true`** value. Typical example of the logic of this operator is the following:

At school the teacher says: "John or Peter should clean the board". To fulfill this condition (to clean the board), it is possible either just for John to clean it, or just for Peter to clean it, or both of them to do it.

|a|b|a &#124;&#124; b|
|:-----:|:-----:|:-----:|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>true<br>true<br>false|

### Video: Logical "OR"

Watch this video to learn how to use logical "OR" in programming: https://youtu.be/e6i-2E66RNU.

### How the || Operator Works?

We have already learned what the logical**"OR" represents**. But how is it actually being achieved? Just like with the logical **"AND"**, the program **checks** from left to right **the arguments** that are given. In order to obtain **`true`** from the expression, it is necessary for **just one** argument to have a **`true`** value. Respectively, the checking **continues** until an **argument** with **such** value is met or until the arguments **are over**.

Here is one **example** of the **`||`** operator in action:

```csharp
bool a = false;
bool b = true;
bool c = false;
bool d = true;
bool result = a || b || c || d;
// true (as c and d are not being checked)
```

The programs **checks `a`**, accepts that it has a value **`false`** and continues. Reaching **`b`**, it understands that it has a **`true`** value and the whole **expression** is calculated as **`true`**, **without** having to check **`c`** or **`d`**, because their values **wouldn't change** the result of the expression.

### Example: Fruit or Vegetable

Let's check whether a given **product** is **a fruit** or **a vegetable**. The "**fruits**" are: **banana**, **apple**, **kiwi**, **cherry**, **lemon** and **grapes**. The "**vegetables**" are: **tomato**, **cucumber**, **pepper** and **carrot**. Everything else is "**unknown**".

#### Sample Input and Output

| Input | Output |
|----|----|
|banana<br>tomato<br>java|fruit<br>vegetable<br>unknown|

#### Solution

We have to use a few conditional statements with logical "**OR**" (**`||`**):

![](/assets/chapter-4-images/04.Fruit-or-vegetable-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/508#3](https://judge.softuni.bg/Contests/Practice/Index/508#3).

## Logical Negation (NOT)

**Logical negation** (operator **`!`**) means a given condition is **is not fulfilled**.

|a|!a|
|:----:|:----:|
|true|false|

The operator **`!`** accepts as an **argument** a bool variable and **returns** its value.

### Video: Logical "NOT"

Watch this video to learn how to use logical "NOT" in programming: https://youtu.be/4U7w2ZSAAW4.

### Example: Invalid Number

A given **number is valid** if it is in the range [**100 … 200**] or it is **0**. Do a validation for an **invalid** number.

#### Sample Input and Output

| Input | Output |
|----|----|
|75|invalid|
|150| (no output)|
|220|invalid|

#### Solution

![](/assets/chapter-4-images/05.Invalid-number-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/508#4](https://judge.softuni.bg/Contests/Practice/Index/508#4).

## The Parenthesis `()` Operator

Like the rest of the operators in programming, the operators **`&&`** and **`||`** have a priority, as in the case **`&&`** is with higher priority than **`||`**. The operator **`()`** serves for **changing the priority of operators** and is being calculated first, just like in mathematics. Using parentheses also gives the code better readability and is considered a good practice. 

Example of checking whether a variable belongs to certain ranges:
```csharp
if (x < 0) || ((x >= 5) && (x <= 10)) || (x > 20)
{
    ...
}
```
