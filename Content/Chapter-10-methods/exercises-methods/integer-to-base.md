# Problem: Integer to Base

Write a method **`IntegerToBase(number, toBase)`**, which takes as parameters an integer and a base of a numeral system and returns the integer converted to the given numeral system. After this the result should be printed on the console. The input number will always be in decimal numeral system, and the base parameter will be between 2 and 10.

## Sample Input and Output

| Input | Output | Input | Output | Input | Output |
| --- |----| --- | --- | --- | --- |
|3<br>2|11|4<br>4|10|9<br>7|12|

## Hints and Guidelines

In order to solve the problem, we will declare a string, in which we will keep the result. After this we need to do the following calculations to convert the number.
* Calculate **the remainder** of the number, divided by the base.
* **Insert the remainder** in the beginning of the string.
* **Divide** the number to the base.
* **Repeat** the algorithm, until the input integer equals 0.

Write the missing logic in the method below:

```csharp
static string IntegerToBase(int number, int toBase) {
    string result = "";
    while (number != 0) {
        // Implement the missing conversion logic
    }
    return result;
}
```

## Testing in the Judge System 

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594#11](https://judge.softuni.org/Contests/Practice/Index/594#11).