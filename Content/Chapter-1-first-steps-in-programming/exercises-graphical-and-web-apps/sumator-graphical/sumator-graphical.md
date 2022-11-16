# Lab: Graphical Application "Summator" (Calculator)

Write a **graphical \(GUI\) application**, which **calculates the sum of two numbers**:

![](/assets/chapter-1-images/07.Numbers-sum-01.png)

By entering two numbers in the first two fields and pressing the button \[**Calculate**\] their sum is being calculated and the result is shown in the third text field. For our application we will use **the Windows Forms technology**, which allows the creation of **graphical applications for Windows**, in the development environment **Visual Studio** and with programming **language** **C\#**.

## Creating a New C\# Project

In Visual Studio we create **a new C\# project of type “Windows Forms Application”**:

![](/assets/chapter-1-images/07.Numbers-sum-02.png)

When creating a Windows Forms application **an editor for user interface** will be shown, in which **different visual elements** could be put \(for example text boxes and buttons\):

![](/assets/chapter-1-images/07.Numbers-sum-03.png)

## Adding Text Fields and a Button

We download from the bar on the left \(Toolbox\) **three text boxes** \(`TextBox`\), **two labels** \(`Label`\) and **a button** \(`Button`\), afterwards we arrange them in the window of the application. Then we **change the names of each of the controls**. This is done from **the window “Properties”** on the right, by changing the field \(`Name`\):

![](/assets/chapter-1-images/07.Numbers-sum-04.png)

* Names of the text boxes: `textBox1`, `textBox2`, `textBoxSum`
* Name of the button: `buttonCalculate`
* Name of the form: `FormCalculate`

**We change the headings** \(the `Text` property\) of the controls:

* `buttonCalculate` -&gt; `Calculate`
* `label1` -&gt; `+`
* `label2` -&gt; `=`
* `Form1` -&gt; `Summator`

![](/assets/chapter-1-images/07.Numbers-sum-05.png)

## Resizing the Controls and Starting the Application

**We resize and arrange the controls**, to make them look better:

![](/assets/chapter-1-images/07.Numbers-sum-06.png)

We try to run the application \[**Ctrl+F5**\]. It should start, but it should **not function completely**, because we haven't written what happens when we click the button yet.

![](/assets/chapter-1-images/07.Numbers-sum-07.png)

## Writing the Program Code

Now it is time to write the code, which **sums the numbers** from the first two fields and **shows the result** in the third field. For this purpose, we double click **the \[Calculate\] button**. The place, in which we write what is going to happen by clicking the button will be shown:

![](/assets/chapter-1-images/07.Numbers-sum-08.png)

We write the following C\# code between the opening and the closing brackets `{ }`, where the cursor is:

![](/assets/chapter-1-images/07.Numbers-sum-09.png)

This code **takes the first number** from the field `textBox1` and keeps it **in the variable **`num1`, keeps **the second number** from the field `textBox2` in **the variable **`num2`, afterwards it **sums **`num1`** and **`num2`** in the variable **`sum` and in the end **takes the text value of the variable **`sum` in the field `textBoxSum`.

## Testing the Application

We start the program again with \[**Ctrl+F5**\] and we check whether it works correctly. We try to calculate **4 + 5**, and afterwards **-12.5 + 1.3**:

![](/assets/chapter-1-images/07.Numbers-sum-10.png) ![](/assets/chapter-1-images/07.Numbers-sum-11.png)

We try with **invalid numbers**, for example: “**aaa**” and “**bbb**”. It seems there is a problem:

![](/assets/chapter-1-images/07.Numbers-sum-12.png) ![](/assets/chapter-1-images/07.Numbers-sum-13.png)

## Fixing the Bug and Retesting the Application

The problem comes from **the conversion of the text field into a number**. If the value inside the field **is not a number, the program throws an exception**. We can rewrite the code in order to fix this problem:

![](/assets/chapter-1-images/07.Numbers-sum-14.png)

The code above **catches the errors when working with numbers** \(it catches exceptions\) and in case of an error **it gives a value **`error` in the field with the result. We start the program again with \[**Ctrl+F5**\] and try if it works. This time **by entering a wrong number the result is **`error` and the program doesn't break:

![](/assets/chapter-1-images/07.Numbers-sum-15.png) ![](/assets/chapter-1-images/07.Numbers-sum-16.png)

Is it complicated? It is normal to seem complex, of course. We are just beginning to get into programming. The example above requires much more knowledge and skills, which we are going to develop through this book and even afterwards. Just allow yourself to have some fun with desktop programming. If something doesn't work, feel free to ask for help in the SoftUni official **discussion forum** (https://www.reddit.com/r/softuni) or in the SoftUni official **Facebook page** (https://fb.com/softuni.org). Or move on bravely forward to the next example or to the next chapter of the book. A time will come when it is going to be easy for you, but you really have to put **an effort and be persistent**. Learning programming is a slow process with lots and lots of practice.
