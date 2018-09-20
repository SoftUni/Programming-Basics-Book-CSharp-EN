### Example: рисуване на запълнен квадрат

Да се нарисува на конзолата запълнен квадрат със страна n, както е показно в примерите.

#### Sample Input and Output

| Input | Output | Input | Output |
| --- | --- | --- | --- |
|4|<code>--------</code><br><code>-\\/\\/\\/-</code><br><code>-\\/\\/\\/-</code><br><code>--------</code>|5|<code>----------</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>----------</code>|

#### Hints and Guidelines

Първата ни стъпка е да прочетем входа от конзолата. След това трябва да създадем метод, който ще принтира първия и последен ред, тъй като те са еднакви. Нека не забравяме, че трябва да му дадем **описателно име** и да му зададем като **параметър** дължината на страната. Ще използваме конструктора **`new string`**. 

![](/assets/chapter-10-images/09.Draw-filled-square-01.png)

Следващата ни стъпка е да създадем метод, който ще рисува на конзолата средните редове. Отново задаваме описателно име, например **`PrintMiddleRow`**.

![](/assets/chapter-10-images/09.Draw-filled-square-02.png)

Накрая извикваме създадените методи в главния метод **`Main()`** на програмата, за да нарисуваме целия квадрат:

![](/assets/chapter-10-images/09.Draw-filled-square-03.png)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/594#3](https://judge.softuni.bg/Contests/Practice/Index/594#3).