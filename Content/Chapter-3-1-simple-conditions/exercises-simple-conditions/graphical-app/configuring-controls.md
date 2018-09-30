#### Configuring the controls

We set the **configuring controls**:

* **For the main form** (**`Form`**), that contains all the controls:
  * **`(name)`** = **`FormConverter`**
  * **`Text`** = "**`Currency Converter`**"
  * **`Font.Size`** = **`12`**
  * **`MaximizeBox`** = **`False`**
  * **`MinimizeBox`** = **`False`**
  * **`FormBorderStyle`** = **`FixedSingle`**
<br>

* For the **field for entering a number** (**`NumericUpDown`**):
  * **`(name)`** = **`numericUpDownAmount`**
  * **`Value`** = **`1`**
  * **`Minimum`** = **`0`**
  * **`Maximum`** = **`1000000`**
  * **`TextAlign`** = **`Right`**
  * **`DecimalPlaces`** = **`2`**
<br>  

* For the **drop-down list with currencies** (**`ComboBox`**):
  * **`(name)`** = **`comboBoxCurrency`**
  * **`DropDownStyle`** = **`DropDownList`**
  * **`Items`** =
    * **EUR**
    * **USD**
    * **GBP**
<br> 

* For the **result text block** (**`Label`**):
  * **`(name)`** = **`labelResult`**
  * **`AutoSize`** = **`False`**
  * **`BackColor`** = **`PaleGreen`**
  * **`TextAlign`** = **`MiddleCenter`**
  * **`Font.Size`** = **`14`**
  * **`Font.Bold`** = **`True`**