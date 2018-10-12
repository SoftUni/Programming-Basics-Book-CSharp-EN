### Keyboard Shortcuts in Visual Studio

For your comfort there are **keyboard shortcuts in Visual Studio**, which we will explain later in this chapter, but for now we are interested in 2 specific combinations. One of the combinations is for formatting **the code in the whole document**, and the other one - ofr formatting **a part of the code**. If we want to format **the whole code**we need to predd [**CTRL + K + D**]. In case we need to format only **a part of the code**, we need to **mark this part with the mouse** and press [**CTRL + K + F**].

Let's use **the wrong example** from earlier:

```csharp
for(int i=0;i<5;i++){
Console.WriteLine(i);
}
```
If we press [**CTRL + K + D**], which is the combination to format **the whole document**, we will have a code, formatted according to **the accepted conventions for C#**, which will look as follows:

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```
This key kombination can help us if we found a badly formatted code.