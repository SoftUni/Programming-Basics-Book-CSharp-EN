# Logical "OR"

The logical **"OR"** (operator **`||`**) means that **at least one** among a few conditions is fulfilled. Similar to the operator **`&&`**, the logical **"OR"** accepts a few arguments of **bool** (conditional) type and returns **`true`** or **`false`**. We can easily guess that we **obtain** a value **`true`** every time when at least **one** of the arguments has a **`true`** value. This is shown at the truth table below:

|a|b|a &#124;&#124; b|
|:-----:|:-----:|:-----:|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>true<br>true<br>false|

Typical example of the logic of this operator is the following: At school the teacher says: "John or Peter should clean the board". To fulfill this condition (to clean the board), it is possible either just for John to clean it, or just for Peter to clean it, or both of them to do it together.

## Video: Logical "OR"

Watch this video to learn how to use logical "OR" in programming: https://youtu.be/e6i-2E66RNU.

## How the || Operator Works?

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

## Example: Fruit or Vegetable

Let's check whether a given **product** is **a fruit** or **a vegetable**. The "**fruits**" are: **banana**, **apple**, **kiwi**, **cherry**, **lemon** and **grapes**. The "**vegetables**" are: **tomato**, **cucumber**, **pepper** and **carrot**. Everything else is "**unknown**".

### Sample Input and Output

| Input | Output |
|----|----|
|banana<br>tomato<br>java|fruit<br>vegetable<br>unknown|

### Solution

We have to use a few conditional statements with logical "**OR**" (**`||`**):

![](/assets/chapter-4-images/04.Fruit-or-vegetable-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/508#3](https://judge.softuni.org/Contests/Practice/Index/508#3).
