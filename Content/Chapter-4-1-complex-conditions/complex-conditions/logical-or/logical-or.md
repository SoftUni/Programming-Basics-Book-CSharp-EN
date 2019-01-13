## Logical "OR"

The logical **"OR"** (operator **`||`**) means that **at least one** among a few conditions is fulfilled. Similar to the operator **`&&`**, the logical **"OR"** accepts a few arguments of **boolean** (conditional) type and returns **`true`** or **`false`**. We can easily guess that we **receive** a value **`true`** every time when at least **one** of the arguments has a **`true`** value. Typical example of the logic of this operator is the following:

At school the teacher says: "John or Peter should clean the board". To fulfill this condition (to clean the board), it is possible either just for John to clean it, or just for Peter to clean it, or both of them to do it.

|a|b|a &#124;&#124; b|
|:-----:|:-----:|:-----:|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>true<br>true<br>false|
