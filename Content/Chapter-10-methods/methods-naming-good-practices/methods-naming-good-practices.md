# Naming Methods and Good Practices for Using Methods

In this part we will show you some **established practices** when working with methods, connected with the naming, the arrangement and the structure of the code.

## Naming Methods

When you name a method it is good to use **meaningful names**. Because every method **answers** for a part of our problem, when naming it we should keep in mind **the action it does**, i.e. it is a good practice for **the name to describe what the method does**.

The name must start with **uppercase** and should be made of a verb or a couple: verb + noun. The name is formatted by following the **Upper Case Camel** convention, i.e. **each word, including the first, starts with uppercase**. The brackets **`( `** and **`)`** always follow the name. 

Each method must do one task and its name should describe what its function is. 

A few examples for **correctly** naming our methods:
* **`FindStudent`**
*	**`LoadReport`**
*	**`Sine`**

A few examples for **incorrectly** naming our methods:
*	**`Method1`**
*	**`DoSomething`**
*	**`HandleStuff`**
*	**`SampleMethod`**
*	**`DirtyHack`**

If you can not think of a good name then the method most probably solves more than one task or doesn't have a clearly defined purpose and in this case you have to think how to divide it in several simpler methods.

## Naming Method Parameters 

When naming **the parameters** of a method you can apply almost the same rules as with the methods themselves. The difference here is that it is good for the names of the parameters to use a noun or a couple of an adjective and a noun, and when naming the parameters we use the **`lowerCamelCase`** convention, i.e. **each word except for the first one starts with uppercase**. We should note that it is good practice that the name of the parameter **shows** what **unit**is used when working with it.

A few examples for **correctly** named parameters:
* **`firstName`**
*	**`report`**
*	**`speedKmH`**
*	**`usersList`**
*	**`fontSizeInPixels`**
*	**`font`**

A few examples for **incorrectly** named parameters:
*	**`p`**
*	**`p1`**
*	**`p2`**
* **`populate`**
* **`LastName`**
* **`last_name`**

## Good Practices When Working with Methods

Let us remind you that a method should do **only one** defined **task**. If this can not be done you must think how to **divide** the method into a few, smaller ones. As we already said the name of the method should be clear and should describe its purpose. Another good practice in programming is to **avoid** methods, which are longer than our screen (approximately). If the code still becomes large it is recommended to **divide** it into several, shorter methods, as in the example below.

![](/assets/chapter-10-images/20.Good-practice-01.png)

## Code Structure and Formatting

When writing methods we should be careful to do correct **indentation** (moving blocks of the code to the right).

Example for **correctly** formatted C# code:

![](/assets/chapter-10-images/20.Good-practice-02.png)

Example for **incorrectly** formatted C# code:

![](/assets/chapter-10-images/20.Good-practice-03.png)

When the title line of the method is **too long**, it is recommended to divide it into several lines, as each line after the first is two tabulations to the right of the first (for better readability):

![](/assets/chapter-10-images/13.Calculate-triangle-area-01.png)

Another good practice when writing code is **to leave an empty row** between the methods, after loops and conditional statements. Also try to **abstain** from writing **long lines and complicated expressions**. In time you will see that this makes the readability better and saves time. 

It is also recommended to always **use curly brackets for the bodies of conditional statements and loops**. The brackets not only improve readability, but also reduce the possibility to make a mistake and the program to run incorrectly.
