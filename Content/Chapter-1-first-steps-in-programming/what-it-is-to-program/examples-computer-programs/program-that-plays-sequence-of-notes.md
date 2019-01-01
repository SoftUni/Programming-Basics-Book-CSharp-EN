#### Example: A Program That Plays a Sequence of Musical Notes

We can complicate the previous program by giving for execution repeating commands in a loop for playing a sequence of notes with rising height:

```csharp
for (i = 200; i <= 4000; i += 200)
{
    Console.Beep(i, 100);
}
```

In the example above we made the computer play one after another for a very short time (100 miliseconds) all of the notes with height 200, 400, 600 etc. Hz until they reach 4000 Hz. The result of the program is playing something like a melody.

How do iterations (cycles) work in programming? We will learn that in the **chapter "[Loops](chapter-05-loops.md)"**, but for now just accept that we repeat some command many times.
