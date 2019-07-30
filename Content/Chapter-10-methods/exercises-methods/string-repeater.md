# Problem: String Repeater

Create a method **`RepeatString(str, count)`**, which takes parameters of type **`string`** and an integer **`n`** and returns the string, repeated **`n`** times. After this print the result on the console.

## Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|str<br>2|strstr|roki<br>6|rokirokirokirokirokiroki|

## Hints and Guidelines

In the method below, inside the loop, append the input string to the result, that you will finally return:

![](/assets/chapter-10-images/21.Repeated-string-01.png)

Keep in mind that **in C# concatenating strings in loops leads to bad performance** and is not recommended. Learn more at: https://docs.microsoft.com/dotnet/api/system.text.stringbuilder#the-string-and-stringbuilder-types.

Look for more effective solutions here: https://stackoverflow.com/questions/411752.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/594#9](https://judge.softuni.org/Contests/Practice/Index/594#9).
