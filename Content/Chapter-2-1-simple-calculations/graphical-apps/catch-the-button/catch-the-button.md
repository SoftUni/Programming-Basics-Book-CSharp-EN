### Graphical application: \*\*\* Catch the button!

Create a fun graphical application **„catch the button“**: a form consisting of one button. By moving the mouse cursor onto the button, it moves on random position. This way it creates the impression that **„the button runs form the mouse and it is hard to catch"**. When the button gets „caught“, a congratulations message is shown.

![](/assets/chapter-2-images/14.Catch-the-button-01.png)

**Hint**: write an eventhandler **``Button.MouseEnter``** and move the button on random position. Use the generator for random numbers **``Random``**. The position of the button is set from the property **``Location``**. To make sure the new position of the button is in the form's borders, you can make calculations based on the size of the form, which is available from the **``ClientSize``** property. You may use the following sample code:

```csharp
private void buttonCatchMe_MouseEnter(object sender, EventArgs e)
{
    Random rand = new Random();
    var maxWidth = this.ClientSize.Width - buttonCatchMe.ClientSize.Width;
    var maxHeight = this.ClientSize.Height - buttonCatchMe.ClientSize.Height;
    this.buttonCatchMe.Location = new Point(
        rand.Next(maxWidth), rand.Next(maxHeight));
}
```