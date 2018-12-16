## Problem: Distance

Write a program that calculates **what is the distance passed by a car (in kilometers)**, if we know **the initial speed** \(km/h\), **the initial time frame** in minutes, then the **speed is increased by 10%**, **the second time frame**, then the **speed is decreased by 5%**, and the **time until the end** of the trip. In order to calculate the distance, you need to **convert the minutes into hours** \(for example 70 minutes = 1.1666 hours\).

### Input Data

**4 rows** are read from the console:
* **The initial speed in km/h** – an integer within the range [**1 … 300**].
* **The first time frame in minutes** – an integer within the range [**1 … 1000**].
* **The second time frame in minutes** – an integer within the range [**1 … 1000**].
* **The third time frame in minutes** – an integer within the range [**1 … 1000**].

### Output Data

Print a number in the console: **the kilometers passed**, formatted up to the **second symbol after the decimal point**.

### Sample Input and Output

| Input | Output | Comments |
|-----|-----|-----|
|90<br>60<br>70<br>80|330.90|**Distance with initial speed**: 90 km/h \* 1 hr (60 min) = **90 km**<br>**After speed increase**: 90 + 10% = 99.00 km/h \* 1.166 hr (70 min) = **115.50 km**<br>**After speed decrease**: 99 - 5% = 94.05 km/h \* 1.33 hr (80 min) = **125.40 km**<br>**Total number of km passed**: **330.9 km**|

| Input | Output | Comments |
|-----|-----|-----|
|140<br>112<br>75<br>190|917.12|**Distance with initial speed**: 140 km/h \* 1.86 hr (112 min) = **261.33 km**<br>**After speed increase**: 140 + 10% = 154.00 km/h \* 1.25 hr (75 min) = **192.5 km**<br>**After speed decrease**: 154.00 - 5% = 146.29 km/h \* 3.16 hr (190 min) = **463.28 km**<br>**Total number of km passed**: **917.1166 km**|
