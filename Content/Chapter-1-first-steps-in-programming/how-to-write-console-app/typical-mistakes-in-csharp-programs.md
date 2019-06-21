# Typical Mistakes in C\# Programs

Now we will review the **typical mistakes in the C\# programs** of the beginners, like missing semicolon, missing quotations mark, missing parenthesis, wrong letter capitalization, etc.

## Video: Typical Mistakes in C\# Programs

Watch a video lesson about the typical mistakes in the C\# programs of the beginners: [https://youtu.be/8XwM2AVC0wU](https://youtu.be/8XwM2AVC0wU).

## Writing Outside if the Main Method

One of the common mistakes with beginners is **writing outside the body of the **`Main()`** method**, because the integrated environment or the compiler can't read the given commands in the program correctly. Here is an example for an incorrectly written program:

```csharp
static void Main(string[] args)
{
}
Console.WriteLine("Hello C#");
```

## Wrong Letter Capitalization

Another mistake is switching **capital and small letters**, and these matter for calling the commands and their correct functioning. Here is an example of such a mistake:

```csharp
static void Main(string[] args)
{
    Console.Writeline("Hello C#");
}
```

In the example above `Writeline` is written wrong and has to be fixed to `WriteLine`.

## Missing Semicolon

The absence of **a semicolon** \(`;`\) in the end of the commands is one of the eternal problems of the beginner programmer. Skipping this sign leads to **incorrect functioning of the program** and **often the problem stays unnoticed**. Here is an example of a mistaken code:

```csharp
static void Main(string[] args)
{
    Console.Writeline("Hello C#")
}
```

## Missing or Wrong Quotation Mark or Parenthesis

Missing **quotation mark** or **the absence of opening or closing parentheses** can also turn out to be a problem. Same as the semicolon, here also the problem leads to **incorrect functioning of the program** or overall to its failure. This mistake is hardly noticeable in a larger code. Here is an example of a program with errors:

```csharp
static void Main(string[] args)
{
    Console.WriteLine("Hello C#);
}
```

This program will throw **a compile time error** and the build is going to fail, and even before that the code will become underlined, in order to point the programmer to the mistake that they'd made \(the missing closing quotation mark\):

![](/assets/chapter-1-images/01.Hello-csharp-08.png)

Another example is missing `{` or `}`. It may produce unexpected error messages, not always easy to understand.

```csharp
class Example
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello C#);
}
```



