#### Events

We have to catch the following **events** to write the C# code, which will be executed with their occurence:

*	The event **`Click`** on the button **`buttonDraw`** (it is called by pushing the button).
*	The event **`ValueChanged`** of the controls for entering numbersа **`numericUpDownX1`**, **`numericUpDownY1`**, **`numericUpDownX2`**, **`numericUpDownY2`**, **`numericUpDownX`** и **`numericUpDownY`** (it is called by changing the value in the control that enters a number).
*	The event **`Load`** of the form **`FormPointAndRectangle`** (it is called by starting the application, before the main form is shown on the dispaly).
*	The event **`Resize`** of the form **`FormPointAndRectangle`** (it is called by changing the size of the main form).

All of the mentioned above events will execute the same action - **`Draw()`**, which will visualize the rectangle and the point and show whether it's inside, outside or onto one of the sides. The code must look like this: 

```csharp
private void buttonDraw_Click(object sender, EventArgs e)
{
    Draw();
}

private void FormPointAndRectangle_Load(object sender, EventArgs e)
{
    Draw();
}

private void FormPointAndRectangle_Resize(object sender, EventArgs e)
{
    Draw();
}

private void numericUpDownX1_ValueChanged(object sender, EventArgs e)
{
    Draw();
}

 /* TODO: implement in the same way event handlers
    numericUpDownY1_ValueChanged, 
    numericUpDownX2_ValueChanged, 
    numericUpDownY2_ValueChanged, 
    numericUpDownX_ValueChanged and 
    numericUpDownY_ValueChanged */

private void Draw()
{
    // TODO: implement this a bit later …
}
```