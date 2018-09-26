#### Solution - part II

Second method: As we already know, the operator for division **`/`** operates differently on integers and decimals. **When dividing integer with integer, the result is also an integer**. Therefore, we can search how to convert the real numbers, which we have as values for the heigth and the width, into integers and then divide them. 

In this case, there could be **data loss** after having removed the fractional part, so it is necessary that it is converted **expressly** (explicit typecasting). We use the operator for converting data **`(type)`** by replacing the word **type** with the needed **data type** and place it **before the variable**. (you can learn more about data type conversion here [Svetlin Nakov, Veselin Kolev and team: "Programming Basics with C#", стр. 153-157](http://www.introprogramming.info/intro-csharp-book/read-online/glava3-operatori-i-izrazi/#_Toc298863977)) 

![](/assets/chapter-2-2-images/01.Training-lab-05.png)

With **`Console.WriteLine(…)`** we print the result on the console.

![](/assets/chapter-2-2-images/01.Training-lab-06.png)

### Test in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/505#0](https://judge.softuni.bg/Contests/Practice/Index/505#0).
