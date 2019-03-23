# Data Types and Variables

In programming, each variable stores a certain **value** of a particular **type**. For example, data types can be: **number**, **letter**, **text** \(string\), **date**, **color**, **image**, **list** and others. Here are some examples of data types:

* **integer**: 1, 2, 3, 4, 5, 20, …
* **float**: 0.5, 3.14, -1.5, …
* **character** \(symbol\): 'a', 'b', 'c', '@', 'X', …
* **text** \(string\): "Hello", "Hi", "How are you?", …
* **day of week**: Monday, Tuesday, …, Sunday
* **date and time**: 14-June-1980 6:30:00, 25-Dec-2017 23:17:22

## Video: Data Types and Variables

Watch a video lesson about declaring variables: https://youtu.be/p4tedmW8dyw.

## Examples: Data Types and Variables

In C\# we can use **data types** to define **variables** as follows:

```csharp
int a = 5;
string str = "Some text";
char letter = 'A';
float f = 4.2;
```

In C\#, once a **variable** is defined, it can **change its value** many times, but it **cannot change its data type** later. Variables may hold only data of their type.

## Declaring and Using Variables

We know that computers are machines that process data. All **data** is stored inside the computer memory \(RAM\) in **variables**. The variables are named areas in the memory, which keep a certain data type, for example a number or a text. Each of the **variables** in C\# has a **name**, a **type** and a **value**. Here is how we would **declare a variable** and **assign it** with a **value** at the same time:

![](/assets/chapter-2-images/00.Declaring-variables-01.png)

### Video: Declaring and using Variables

Watch a video lesson about declaring variables: https://youtu.be/g-dG5GobHg0.

### Examples: Declaring and using Variables

Example of **declaring a variable**:

```csharp
var count = 5;
```

After being processed, data is again stored in variables \(in some place in the memory saved for our program\):

```csharp
count = count + 1;
```

After the above code the variable `count` changes it value and increases by `1`.

