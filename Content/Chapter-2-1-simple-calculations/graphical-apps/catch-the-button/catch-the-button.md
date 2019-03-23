# Graphical Application: _\*_ Catch the Button!

Create a fun graphical application **“catch the button”**: a form consisting of one button. Upon moving the mouse cursor onto the button, it moves to a random position. This way it creates the impression that "**the button runs form the mouse and it is hard to catch**". When the button gets “caught”, a congratulations message is shown.

![](/assets/chapter-2-images/14.Catch-the-button-01.png)

## Hints and Guidelines

Write an event handler `Button.MouseEnter` and move the button to a random position. Use the random numbers generator `Random`. The position of the button is set using the `Location` property. To make sure the new position of the button is within the form's borders, you can make calculations based on the size of the form, which is available from the `ClientSize` property.

You may use the following **sample code**:

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
Be active, be curious, experiment, play, learn, enjoy!