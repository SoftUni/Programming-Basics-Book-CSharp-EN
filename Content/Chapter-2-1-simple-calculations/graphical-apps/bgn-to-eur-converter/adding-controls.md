#### Adding controls

We arrange the following UI controls in the format: 

* **`NumericUpDown`** with name **`numericUpDownAmount`** – it will enter the amount for conversion
*	**`Label`** with name **`labelResult`** – it will show the result after conversion
*	Two more **`Label`** components, serving only for static representation of a text

The graphical editor for user interface might look similar to this:

![](/assets/chapter-2-images/13.Currency-converter-03.png)

We set the following settings of the format and the separate controls:

|                                             Setting                                                 | Picture|
|:-----------------------------------------------------------------------------------------------------:|:-----:|
|**``FormConverter``**:<br>Text = "BGN to EUR",<br>Font.Size = 12,<br>MaximizeBox = False,<br>MinimizeBox = False,<br>FormBorderStyle = FixedSingle | <img alt="formConverter" src ="/assets/chapter-2-images/13.Currency-converter-04.png" /> |
|**``numericUpDownAmount``**:<br>Value = 1,<br>Minimum = 0,<br>Maximum = 10000000,<br>TextAlign = Right,<br>DecimalPlaces = 2 | <img alt="numUpDown" src ="/assets/chapter-2-images/13.Currency-converter-05.png" /> |
|**``labelResult``**:<br>AutoSize = False,<br>BackColor = PaleGreen,<br>TextAlign = MiddleCenter,<br>Font.Size = 14,<br>Font.Bold = True| <img alt="labelResult" src ="/assets/chapter-2-images/13.Currency-converter-06.png" /> |