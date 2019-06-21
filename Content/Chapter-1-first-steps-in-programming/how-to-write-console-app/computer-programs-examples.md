# Computer Programs – Examples

Let's start with a few simple examples of short C\# programs.

## Video: Computer Programs – Examples

Watch a video lesson about the explained below sample computer programs: [https://youtu.be/TIwcDNJFid4](https://youtu.be/TIwcDNJFid4).

## Example: A Program That Plays the Musical Note "A"

Our **first program** is going to be a single **C\# command** that **plays the musical note** "A" \(432 Hz\) with a duration of half a second \(500 milliseconds\):

```csharp
Console.Beep(432, 500);
```

A bit later we will find out how we can execute this command and hear the sound of the note, but for now let's just look at what the commands in programming represent. Let's get to know a couple more examples.

## Example: A Program That Plays a Sequence of Musical Notes

We can complicate the previous program by giving for execution **repeating commands in a loop** for playing a sequence of notes with rising height:

```csharp
for (i = 200; i <= 4000; i += 200)
{
    Console.Beep(i, 100);
}
```

In the example above we made the computer play one after another for a very short time \(100 milliseconds\) all the notes with height 200, 400, 600 etc. Hz until they reach 4000 Hz. The result of the program is playing something like a **melody**.

How do iterations \(cycles\) work in programming? We will learn that in the **chapter "**[**Loops**](/Content/Chapter-5-1-loops/overview.md)**"**, but for now just accept that we repeat some command many times.

## Example: A Program That Converts USD to EUR

Let's look at another simple program that reads from the user some **amount** of money in U.S. Dollars (USD), an integer, converts it into **Euro** (EUR) by **dividing it** by the Euro's rate and **prints** the obtained result. This is a program of 3 consecutive commands:

```csharp
var dollars = int.Parse(Console.ReadLine());
var euro = dollars * 0.883795087;
Console.WriteLine(euro);
```

Run the above code example: [https://repl.it/@nakov/dollars-to-euro-converter-csharp](https://repl.it/@nakov/dollars-to-euro-converter-csharp).

We examined **three examples of computer programs**: a single command, series of commands in a loop and 3 consecutive commands. Now let's get to the more interesting part: how we can write our own programs in **C\#** and how we can compile them and run them.

## How to Write a Console Application?

As a next step, let's pass through **the steps of creating and executing a computer program** that reads and writes its data from and on the **text console** \(a window for entering and printing text\). These programs are called "**console programs**". But before that, we should **install and prepare the development environment**, in which we are going to write and run the C\# programs from this book and the exercises in it.
