#### Events and Event Handlers

We define the following **event handlers** in the controls:

![](/assets/chapter-2-images/13.Currency-converter-07.png)

After this we catch the following events:
- **``FormConverter.Load``** (by double-clicking with the mouse)
- **``numericUpDownAmount.ValueChanged``** (by double-clicking on **``NumericUpDown``** control)
- **``numericUpDownAmount.KeyUp``** (we choose **``Events``** from the dashboard **``Properties``** and double-click on **``KeyUp``**)

The event **`Form.Load`** is executed when the program is started, before the window of the application is shown. The event **`NumericUpDown.ValueChanged`** is executed when a change in the value inside the field for entering a number occurs. The event **`NumericUpDown.KeyUp`** is executed after pressing a key in the field that enters a number. On the occurrence of each of these events, we will recalculate the result.

To **catch an event** we use the events icon (Events) in the **Properties** window in Visual Studio:

![](/assets/chapter-2-images/13.Currency-converter-01.png)
