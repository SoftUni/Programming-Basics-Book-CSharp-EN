#### Events

We have to catch the following **events** to write the C# code that will be executed upon their occurence:

*	The event **`Click`** the button **`buttonDraw`** (it is called upon pressing the button).
*	The event **`ValueChanged`** of the controls for entering numbers **`numericUpDownX1`**, **`numericUpDownY1`**, **`numericUpDownX2`**, **`numericUpDownY2`**, **`numericUpDownX`** и **`numericUpDownY`** (it is called upon changing the value in the control that enters a number).
*	The event **`Load`** of the form **`FormPointAndRectangle`** (it is called upon starting the application, before the main form is shown on the dispaly).
*	The event **`Resize`** of the form **`FormPointAndRectangle`** (it is called upon changing the size of the main form).

All of the above mentioned events will execute the same action - **`Draw()`**, which will visualize the rectangle and the point and show whether it's inside, outside or onto one of the sides. The code must look like this: 

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
