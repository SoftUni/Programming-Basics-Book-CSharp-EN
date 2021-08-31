# Problem: Stupid Passwords Generator

Write a program that enters two integers **n** and **l** and generates in alphabetical order all possible  **"stupid" passwords** that consist of the following **5 characters**:
-	Character 1: a digit from **1** to **n**.
-	Character 2: a digit from **1** to **n**.
-	Character 3: a small letter among the first **l** letters of the Latin alphabet.
-	Character 4: a small letter among the first **l** letters of the Latin alphabet.
-	Character 5: a digit from **1** to **n, greater than first 2 digits**.

## Input

The input is read from the console and consists of **two integers: n** and **l** within the range [**1 … 9**], each on a single line.

## Output

Print on the console **all "stupid" passwords in alphabetical order**, separated by **space**.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|2<br>4|11aa2 11ab2 11ac2 11ad2 11ba2 11bb2 11bc2 11bd2 11ca2 11cb2 11cc2 11cd2 11da2 11db2 11dc2 11dd2|3<br>1|11aa2 11aa3 12aa3 21aa3 22aa3|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3<br>2|11aa2 11aa3 11ab2 11ab3 11ba2 11ba3 11bb2 11bb3 12aa3 12ab3 12ba3 12bb3 21aa3 21ab3 21ba3 21bb3 22aa3 22ab3 22ba3 22bb3|4<br>2|11aa2 11aa3 11aa4 11ab2 11ab3 11ab4 11ba2 11ba3 11ba4 11bb2 11bb3 11bb4 12aa3 12aa4 12ab3 12ab4 12ba3 12ba4 12bb3 12bb4 13aa4 13ab4 13ba4 13bb4 21aa3 21aa4 21ab3 21ab4 21ba3 21ba4 21bb3 21bb4 22aa3 22aa4 22ab3 22ab4 22ba3 22ba4 22bb3 22bb4 23aa4 23ab4 23ba4 23bb4 31aa4 31ab4 31ba4 31bb4 32aa4 32ab4 32ba4 32bb4 33aa4 33ab4 33ba4 33bb4|

## Hints and Guidelines

We can split the solution of the problem into 3 parts:

* **Read the input** – for the current problem this consists of reading two numbers **`n`** and **`l`**, each on a single line.
* **Process the input** – use nested loops to iterate through every possible symbol for each of the five password symbols.
* **Print the result** – print every "stupid" password that meets the  requirements.

### Read the Input

To **read** the **input** we will declare two integer variables **`int`**: **`n`** and **`l`**.

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-1.png)

Let's declare and initialize the **variables** that will store the **characters** of the password: type **`int`** for the **numeric** characters – **`d1`**, **`d2`**, **`d3`**, and type **`char`** for the **letters** – **`l1`**, **`l2`**. To make it easier, we will skip explicit specification of the type by replacing it with the keyword **`var`**.

### Process the Input and Print the Output

We have to create **five** nested **`for`** loops, one for each variable. To ensure that the last digit **d3** is **greater** than the first two, we will use the built-in function **`Math.Max (...)`**. 

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-2.png)

## Test the code in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/515#0](https://judge.softuni.org/Contests/Practice/Index/515#0).

## Did you Know That…?

* In C# we can **define a `for`** loop with a variable of **`char`** type:

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-3.png)

* We can **read** a variable of type **`char`** from the console by using the following structure:

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-4.png)
    
* We can convert a **Capital** char **into a small** one, using a built-in C# function:
    
![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-5.png)
    
* When reading the chars from the console, we can directly convert uppercase letters to lowercase letters **by combining the two lines above**:

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-6.png)
