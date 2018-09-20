### Example: магазин за плодове

Магазин за плодове в **работни дни** продава на следните **цени**:

|Плод|Цена|
|:-----:|:-----:|
|banana<br>apple<br>orange<br>grapefruit<br>kiwi<br>pineapple<br>grapes|2.50<br>1.20<br>0.85<br>1.45<br>2.70<br>5.50<br>3.85|

В почивни дни цените са **по-високи**:

|Плод|Цена|
|:-----:|:-----:|
|banana<br>apple<br>orange<br>grapefruit<br>kiwi<br>pineapple<br>grapes|2.70<br>1.25<br>0.90<br>1.60<br>3.00<br>5.60<br>4.20|

Напишете програма, която **чете** от конзолата **плод** (banana / apple / …), **ден от седмицата** (Monday / Tuesday / …) и **количество (десетично число)** и **пресмята цената** според цените от таблиците по-горе. Резултатът да се отпечата **закръглен с 2 цифри след десетичния знак**. При **невалиден ден** от седмицата или **невалидно име** на плод да се отпечата **“error”**.

#### Sample Input and Output

| Input | Output | Input | Output |
|----|----|----|----|
|orange<br>Sunday<br>3|2.70|kiwi<br>Monday<br>2.5|6.75|

| Input | Output | Input | Output |
|----|----|----|----|
|grapes<br>Saturday<br>0.5|2.10|tomato<br>Monday<br>0.5|error|