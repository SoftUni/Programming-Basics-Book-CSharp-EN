#### Hints and Guidelines

Създаваме **нов проект** в съществуващото Visual Studio решение. В **Solution Explorer** кликнете с десен бутон на мишката върху **Solution 'Simple-Calculations'**. Изберете [**Add**] -> [**New Project…**]:

![](/assets/chapter-2-images/01.Square-area-01.png)

Ще се отвори **диалогов прозорец** за избор на **тип проект** за създаване. Избираме **C# конзолно приложение** с име “Square-Area”:

![](/assets/chapter-2-images/01.Square-area-02.png)

Вече имаме solution с едно конзолно приложение в него. Остава да напишем **кода за решаване на задачата**. За целта отиваме в тялото на метода **`Main(string[] args)`** и пишем следния код:

![](/assets/chapter-2-images/01.Square-area-03.png)

Кодът въвежда цяло число чрез **`a = int.Parse(Console.ReadLine())`**, след това изчислява **`area = a * a`** и накрая печата стойността на променливата **`area`**. **Стартираме** програмата с [**Ctrl+F5**] и я **тестваме** с различни входни стойности:

![](/assets/chapter-2-images/01.Square-area-04.png)