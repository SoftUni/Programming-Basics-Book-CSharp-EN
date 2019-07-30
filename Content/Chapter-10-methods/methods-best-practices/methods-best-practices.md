# Good Practices When Working with Methods

Let's remind you that a method should do **only one** defined **task**. If this cannot be done, you must think how to **split** the method into a few, smaller ones. As we already said the name of the method should be clear and should describe its purpose. Another good practice in programming is to **avoid** methods, which are longer than a typical screen size (approximately). If the code still becomes large it is recommended to **split** it into several, shorter methods, as in the example below.

![](/assets/chapter-10-images/20.Good-practice-01.png)

## Code Structure and Formatting

When writing methods, we should be careful to use correct **indentation** (moving blocks of the code to the right).

Example for **correctly** formatted C# code:

![](/assets/chapter-10-images/20.Good-practice-02.png)

Example for **incorrectly** formatted C# code:

![](/assets/chapter-10-images/20.Good-practice-03.png)

When the declaration line of the method is **too long**, it is recommended to split it into several lines, as each line after the first one is two tabulations to the right of the first one (for better readability):

![](/assets/chapter-10-images/13.Calculate-triangle-area-01.png)

Another good practice when writing code is **to leave an empty line** between the methods, after loops and conditional statements. Also try to **abstain** from writing **long lines and complicated expressions**. With time you will see that this makes the readability better and saves time. 

It is also recommended to always **use curly brackets for the bodies of conditional statements and loops**. The brackets not only improve readability, but also reduce the possibility to make a mistake and the program to run incorrectly.
