### Problem: * точка във фигурата

Фигура се състои от **6 блокчета с размер h \* h**, разположени като на фигурата. Долният ляв ъгъл на сградата е на позиция {0, 0}. Горният десен ъгъл на фигурата е на позиция {**2\*h**, **4\*h**}. На фигурата координатите са дадени при **h = 2**:

![](/assets/chapter-4-images/13.Point-in-the-figure-01.png)

Да се напише програма, която въвежда цяло число **h** и координатите на дадена **точка {x, y}** (цели числа) и отпечатва дали точката е вътре във фигурата (**inside**), вън от фигурата (**outside**) или на някоя от стените на фигурата (**border**).

#### Sample Input and Output

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|2<br>3<br>10|outside|2<br>3<br>1|inside|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|2<br>2<br>2|border|2<br>6<br>0|border|

| Input | Output | Input | Output |
|----|-----|-----|-----|
|2<br>0<br>6|outside|15<br>13<br>55|outside|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|15<br>29<br>37|inside|15<br>37<br>18|outside|

| Input | Output | Input | Output |
|-----|-----|-----|-----|
|15<br>-4<br>7|outside|15<br>30<br>0|border|