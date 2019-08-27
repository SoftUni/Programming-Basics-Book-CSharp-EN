# Problem: Dumb Passwords Generator

Write a program that enters two integers **n** and **l** and generates in alphabetical order all possible  **"dumb" passwords** that consist of the following **5 characters**:
-	Character 1: digit from **1** to **n**.
-	Character 2: digit from **1** to **n**.
-	Character 3: small letter among the first **l** letters of the Latin alphabet.
-	Character 4: small letter among the first **l** letters of the Latin alphabet.
-	Character 5: digit from **1** to **n, bigger than first 2 digits**.

## Input Data

The input is read from the console and consists of **two integers: n** and **l** within the range [**1 … 9**], each on a single line.

## Output Data

Print on the console **all "dumb" passwords in alphabetical order**, separated by **space**.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|2<br>4|11aa2 11ab2 11ac2 11ad2 11ba2 11bb2 11bc2 11bd2 11ca2 11cb2 11cc2 11cd2 11da2 11db2 11dc2 11dd2|3<br>1|11aa2 11aa3 12aa3 21aa3 22aa3|

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|3<br>2|11aa2 11aa3 11ab2 11ab3 11ba2 11ba3 11bb2 11bb3 12aa3 12ab3 12ba3 12bb3 21aa3 21ab3 21ba3 21bb3 22aa3 22ab3 22ba3 22bb3|4<br>2|11aa2 11aa3 11aa4 11ab2 11ab3 11ab4 11ba2 11ba3 11ba4 11bb2 11bb3 11bb4 12aa3 12aa4 12ab3 12ab4 12ba3 12ba4 12bb3 12bb4 13aa4 13ab4 13ba4 13bb4 21aa3 21aa4 21ab3 21ab4 21ba3 21ba4 21bb3 21bb4 22aa3 22aa4 22ab3 22ab4 22ba3 22ba4 22bb3 22bb4 23aa4 23ab4 23ba4 23bb4 31aa4 31ab4 31ba4 31bb4 32aa4 32ab4 32ba4 32bb4 33aa4 33ab4 33ba4 33bb4|

## Hints and Guidelines

We can split the solution of the problem into 3 parts:

* **Reading the input** – in the current problem this includes reading two numbers **`n`** and **`l`**, each on a single line.
* **Processing the input data** – using of nested loops to iterate through every possible symbol for each of the five password symbols.
* **Printing the output** – printing every "dumb" password that meets the  requirements.

### Reading the Input Data

For **reading** of **input** data we will declare two integer variables **`int`**: **`n`** and **`l`**.

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-1.png)

Let's declare and initialize the **variables** that will store the **characters** of the password: for the characters of **digit** type – **`int`** – **`d1`**, **`d2`**, **`d3`**, and for the **letters** – of **`char`** type – **`l1`**, **`l2`**. To make it easier we will skip explicit specification of the type by replacing it with the keyword **`var`**.

### Processing the Input Data and Printing Output

We need to create **five** **`for`** nested loops, one for each variable. To ensure that the last digit **d3** is **greater** than the first two, we will use the built-in function **`Math.Max (...)`**. 

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-2.png)

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/515#0](https://judge.softuni.org/Contests/Practice/Index/515#0).

## Did you Know That…?

* In C# we can **define a `for`** loop with variable of **`char`** type:

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-3.png)

* We can **read** variable of **`char`** type from the console with the following structure:

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-4.png)
    
* We can convert a **Capital** char **into small** one, using a built-in C# function:
    
![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-5.png)
    
* By reading the chars from the console, we can directly convert upper to lowercase letters, **by combining the above two lines**:

![](/assets/chapter-7-exam-preparation-images/01.stupid-password-generator-6.png)
