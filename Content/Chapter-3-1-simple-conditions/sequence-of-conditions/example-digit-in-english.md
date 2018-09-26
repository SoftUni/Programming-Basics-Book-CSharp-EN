### Example: digit in english

Print the digits in the range of 1 to 9 (the digit is read from the console). We can read the digit and then, through a **sequence of conditions** we print the relevant english word:
```csharp
int num = int.Parse(Console.ReadLine());

if (num == 1)
{
    Console.WriteLine("one");
}
else if (num == 2)
{
    Console.WriteLine("two");
}
else if (…) 
{
    …
} 
else if (num == 9)
{
    Console.WriteLine("nine");
} 
else 
{
    Console.WriteLine("number too big");
}
```

The program logic from the above example **sequentially compares** the input digit from the console with the numbers from 1 to 9, as **each sequent comparison being performed only if the previous comparison is not true**. Eventually, if none of the **`if`** conditions are not executed, the last **`else`** **clause`** is.

#### Testing in the Judge System

Test your solution from the example here: [https://judge.softuni.bg/Contests/Practice/Index/506#4](https://judge.softuni.bg/Contests/Practice/Index/506#4).