## Typical mistakes in C# programs

One of the common mistakes with beginners is **writing outside the body of the ``Main()`` method**, because the integrated environment or the compiler can't read the given commands in the program correctly. Here is an example for an incorrectly written program  :

```csharp
static void Main(string[] args)
{
}
Console.WriteLine("Hello C#");
```

Other mistake is switching **capital and small letters**, and it matters for calling the commands and their correct functioning. Here is an example of such mistake:

```csharp
static void Main(string[] args)
{
    Console.Writeline("Hello C#");
}
```

In the example above **`Writeline`** is written wrong and has to be fixed to **`WriteLine`**.

The absence of **a point and comma** (**`;`**) in the end of the commands is one of the eternal problems of the beginner programmer. Skipping this sign leads to **incorrect functioning of the program** and **often the problem stays unnoticed**. Here is an example of a mistaken code:

```csharp
static void Main(string[] args)
{
    Console.Writeline("Hello C#")
}
```

The missing **quotation mark** or **the absence of openning or closing parentheses** can also turn out to be problems. The same as the point and the comma, here also the problem leads to **incorrect functioning of the program** or overall to its failure. This mistake is hardly noticeble with a bigger code. Here is an example of  a program with errors:

```csharp
static void Main(string[] args)
{
    Console.WriteLine("Hello C#);
}
```

This program will throw **a compile time error** and the build is going to fail and even before that, the code will become underlined, in order to point the programmer to the mistake that he made (the missing closing quotation mark):

![](/assets/chapter-1-images/01.Hello-csharp-08.png)
