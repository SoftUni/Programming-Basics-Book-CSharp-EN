# If-Else Conditions

The **`if`** construction may also contain an **`else`** clause to give a specific action in case the Boolean expression (which is set at the beginning **`if (bool expression)`** ) returns a negative result (**`false`**). Built this way, **the conditional statement** is called **`if-else`** and its behavior is as follows: if the result of the condition is **positive** (**`true`**) – we perform some actions, when it is **negative** (**`false`**) – others. The format of the construction is:

```csharp
if (condition)
{
    // condition body;
}
else
{
    // else construction body;
}
```

## Example: Excellent Grade or Not

Like the example above, we read the grade from the console and check if it's excellent, but this time we should **output the result in both cases**.

![](/assets/chapter-3-images/02.Excellent-or-not-01.png)

### Testing in Judge System

Test your solution from the example here: [https://judge.softuni.bg/Contests/Practice/Index/506#1](https://judge.softuni.bg/Contests/Practice/Index/506#1).

## About the Curly Braces {} After If / Else

When we have **only one command** in the body of the ** if construction**, we can **skip the curly brackets**, indicating the conditional operator body. When we want to execute **block of code** (group of commands), curly brackets are **required**. In case we drop them, **only the first line** after the **if clause** will be executed.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>It's a good practice to <strong>always put curly braces,</strong> because it makes our code more readable and clean.</td>
</tr></table>

Here is an example where dropping curly braces leads to confusion:

![](/assets/chapter-3-images/00.Brackets-tip-01.png)

Executing the above code will output the following console result:

![](/assets/chapter-3-images/00.Brackets-tip-03.png)

With curly braces:

![](/assets/chapter-3-images/00.Brackets-tip-02.png)

The following output will be printed on the console:

![](/assets/chapter-3-images/00.Brackets-tip-04.png)

## Example: Even or Odd Number

Write a program that checks whether an integer is **even** or **odd**.

We can solve the problem with one **`if-else`** statement and the operator **`%`**, which returns a **remainder by dividing** two numbers.

![](/assets/chapter-3-images/03.Even-or-odd-02.png)

### Testing in the Judge System

Test your solution here:
[https://judge.softuni.bg/Contests/Practice/Index/506#2](https://judge.softuni.bg/Contests/Practice/Index/506#2).

## Example: The Larger Number

Write a program that reads from the console two integers and takes the larger of them.

Our first task is to **read** the two numbers from the console. Then, with a simple **`if-else`** statement, combined with the **operator for greater than** (**`>`**), we do check. Part of the code is deliberately blurred, so you can test what you learned so far.

![](/assets/chapter-3-images/04.Greater-number-02.png)

### Testing in the Judge System

Test your solution here:
[https://judge.softuni.bg/Contests/Practice/Index/506#3](https://judge.softuni.bg/Contests/Practice/Index/506#3).
