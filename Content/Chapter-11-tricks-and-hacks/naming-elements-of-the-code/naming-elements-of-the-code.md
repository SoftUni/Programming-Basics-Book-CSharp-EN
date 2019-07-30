# Naming Code Elements

In this section we will focus on **the accepted conventions for naming projects, files and variables**, defined by Microsoft.

## Naming Projects and Files

It is recommended to use a descriptive name **for naming projects and files**, which suggests **the role** of the respective file / project and at the same time the **`PascalCase` convention** is also recommended. This is a **convention for naming** elements, in which each word, including the first one, starts with **an uppercase character**, for example **`ExpressionCalculator`**.

Example: this course starts with a **First steps in coding** lecture, therefore an exemplary name for the solution for this lecture can be **`FirstStepsInCoding`**. The same convention applies for the files in a project. If we take for example the first problem in the **First steps in coding** lecture, it is called **Hello World**, therefore our file in the project will be called **`HelloWorld`**.

## Naming Variables

In programming variables keep data, and for the code to be more understandable, the name of a variable should **suggest its purpose**. Here are some recommendations for naming variables:

* The name should be **short and descriptive** and to explain what the variable serves for.
* The name should only contain the letters **a-z**, **A-Z**, **the numbers 0-9**, and **the symbol '\_'**.
* It is accepted in C# for the variables to always **begin** **with a lowercase letter** and to **contain lowercase letters**, and **each next word** in them should **start with an uppercase letter** (this naming is also known as **`camelCase`** convention).
* You should be careful about uppercase and lowercase letters, because C# distinguishes them. For example, **`age`** and **`Age`** are different variables.
* The names of the variables cannot coincide with keywords in the C# language, for example **`int`** is an invalid name for a variable.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Although using the symbol <code><b>_</b></code> in the names of variables is allowed, in C# it is not recommended and is considered a bad style of naming.</td>
</tr></table>

## Naming – Examples

Here are some examples for **well named** variables:

* **`firstName`**
* **`age`**
* **`startIndex`**
* **`lastNegativeNumberIndex`**

Here are some examples for **badly named variables**, even though the names are correct according to the C# compiler:

* **`_firstName`** (starts with '`_`')
* **`last_name`** (contains '`_`')
* **`AGE`** (written in uppercase)
* **`Start_Index`** (starts with an uppercase letter and contains '`_`')
* **`lastNegativeNumber_Index`** (contains '`_`')

At a first look all these rules can seem meaningless and unnecessary, but with time passed and experience gaining you will see the need for **conventions for writing quality code** in order to be able to work more easily and faster in a team. You will understand that the work with a code, which is written without complying with any rules for code quality, is annoying.
