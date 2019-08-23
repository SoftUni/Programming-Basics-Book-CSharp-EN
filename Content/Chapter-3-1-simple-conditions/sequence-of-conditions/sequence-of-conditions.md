# Sequence of If-Else Conditions

Sometimes we need to do a sequence of conditions before we decide what actions our program will execute. In such cases, we can apply the construction `if-else if ... -else` **in series**. For this purpose, we use the following “chained if-else” format:

```csharp
if (condition)
{
    // condition body;
}
else if (second condition)
{
    // condition body;
}
else if (third condition)
{
    // condition body;
}
…
else
{
    // else construction body;
}
```

## Video: Series of If-Else Checks

Watch the video lesson about the if-else checks: [https://youtu.be/PUvf7gtKSz4](https://youtu.be/PUvf7gtKSz4).

## Example: Digits in English

Print the digits in the range of 1 to 9 \(digits are read from the console\) in English. We can read the digit and then, through a **sequence of conditions** we print the relevant English word:

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

The program logic from the above example **sequentially compares** the input number from the console with the digits from 1 to 9, when **each following comparison is being performed only in case the previous comparison is not true**. Eventually, if none of the `if` statements are true, the last `else` **clause** is performed.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/506\#4](https://judge.softuni.org/Contests/Practice/Index/506#4).

