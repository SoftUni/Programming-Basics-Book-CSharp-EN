#### Installing Turtle Graphics NuGet Package

Install the **NuGet** package **"Nakov.TurtleGraphics"** to your new Windows Forms project. From Visual Studio you can add **external libraries** (packages) to an existing C# project. Те добавят допълнителна функционалност към нашите приложения. Официалното хранилище (repository) за C# библиотеки се поддържа от Microsoft и се нарича **NuGet** ([http://www.nuget.org/](http://www.nuget.org)).

Кликаме с десен бутон на мишката върху проекта в **Solution Explorer** и избираме [**Manage NuGet Packages…**]:
 
![](/assets/chapter-5-images/13.Turtle-graphics-03.png)

Ще се отвори прозорец за търсене и инсталиране на **NuGet** пакети. Нека потърсим пакети по ключова дума **`nakov`**. Ще излязат няколко пакета. От тях избираме пакет **`Nakov.TurtleGraphics`**. Натискаме [**Install**], за да го инсталираме към нашия C# проект:
 
![](/assets/chapter-5-images/13.Turtle-graphics-04.png)

Към нашия C# проект вече е включена външната библиотека **`Nakov.TurtleGraphics`**. Тя дефинира клас **`Turtle`**, който представлява **костенурка за рисуване**. За да го използваме, трябва да добавим в C# кода за нашата форма (**`Form1.cs`**). Добавяме следния код, най-отгоре в началото на файла:
  
![](assets/chapter-5-images/13.Turtle-graphics-05.png)
