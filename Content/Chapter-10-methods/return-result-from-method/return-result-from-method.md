# Returning a Result from a Method

We already examined methods that do a specific task, for example printing some text, a number or a figure on the console. There are also other types of methods that can **return** some kind of **result**. These are the methods we are going to analyze in the next lines.

## Types of Returned Values

Up until now we saw some examples, in which when declaring methods, we used the keyword **`void`**, which shows that the method **does not** return a result, but just executes a certain action.

![](/assets/chapter-10-images/10.Return-types-01.png)

If we **replace** **`void`** by **a type** of some variable, this will tell the program that the method should return a value of the said type. This returned value could be of any type – **`int`**, **`string`**, **`double`** etc. 

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>In order for a method to return <strong>a result</strong> we need to write the type of returned value we expect when declaring the method, in the place of <code>void</code>.</td></tr>
</table>

![](/assets/chapter-10-images/10.Return-types-02.png)

We should note that **the result** returned by the method can be of **a type, compatible with the type of the returned value** of the method. For example, if the declared type of the returned value is **`double`**, we can return a value of **`int`** type.

## The "Return" Operator

In order to obtain a result from the method we need to use the **`return`** operator. It should be **used in the body** of the method and tells the program to **stop its execution** and to **return** the method invoker a certain **value**, which is defined by the expression after the **`return`** operator.

In the example below there is a method that reads two names from the console, concatenates them and returns them as a result. The return value is of **`string`** type:

![](/assets/chapter-10-images/11.Return-operator-01.png)

The **`return`** operator can also be used in **`void`** methods. This way the method will stop its execution without returning a value, and after it there shouldn't be an expression, which should be returned. In this case we use **`return`** only to exit the method.

**There are cases** where **`return`** can be called from multiple places in the method, but only if there are **certain** input conditions.

### The "Return" Operator – Example

We have a method in the example below, which compares two numbers and returns a result respectively **`-1`**, **`0`** or **`1`** depending on if the first argument is smaller, equal or larger than the second argument, given to the function. The method uses the keyword **`return`** in three different places, in order to return three different values according to the logic of comparing the numbers:

![](/assets/chapter-10-images/11.Return-operator-02.png)

We can **invoke** the above method and ensure that it behaves as expected:
 - CompareTo(3, 4) &rarr; -1
 - CompareTo(20, 10) &rarr; 1
 - CompareTo(5, 5) &rarr; 0
 - CompareTo(-5, -7) &rarr; 1
 - CompareTo(-10, -5) &rarr; -1

### The Code After "Return" is Inaccessible

After the **`return`** operator, there **should not** be any more lines of code in the current block, because if there are, Visual Studio will warn you that it has found a piece of code **that is inaccessible**:

![](/assets/chapter-10-images/11.Return-operator-03.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>In programming you <b>can't have the <code><b>return</b></code> operator twice</b>, one after the other (double <code><b>return</b></code>), because executing the first one won't allow the execution of the second one. From time to time programmers joke by saying “<b><i>write</i> <code>return; return;</code> <i>and let's go</i></b>”, in order to explain that the program logic is lost.</td></tr>
</table>

## Using the Returned Value

After a method is executed and returns a value, this value can be used in **multiple** ways.

The first one is **to assign the result as a value of a variable** of a compatible type:

![](/assets/chapter-10-images/12.Return-value-01.png)

The second one is for the result to be used **in an expression**:

![](/assets/chapter-10-images/12.Return-value-02.png)

The third one is to **pass** the result of the method to **another method**:

![](/assets/chapter-10-images/12.Return-value-03.png)

## Example: Calculating Triangle Area

Create a method that calculates the area of a triangle using the given base and height and returns it as a result.

### Sample Input and Output

| Input | Output |
| --- | --- |
|3<br>4|6|

### Hints and Guidelines

The first step is to read the input. After that, **create** a method, but this time be careful when **declaring** to give it the correct **type** of data we want the method to return, which is **`double`**.

![](/assets/chapter-10-images/13.Calculate-triangle-area-01.png)

The next step is to **call the new** method from the **`Main()`** method and to **store the returned value in a suitable variable**.

![](/assets/chapter-10-images/13.Calculate-triangle-area-02.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594#4](https://judge.softuni.org/Contests/Practice/Index/594#4).

## Example: Math Power

Create a method that calculates and returns as result the power of a given number.

### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|2<br>8|256|3<br>4|81|

### Hints and Guidelines

Our first step is to read the input data from the console. The next step is to create a method that will take two parameters (the number and the power) and returns as a result a number of **`double`** type.

![](/assets/chapter-10-images/14.Number-power-01.png)

After we have done the calculations, we have to only print the result in the **`Main()`** method of the program.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594#5](https://judge.softuni.org/Contests/Practice/Index/594#5).
