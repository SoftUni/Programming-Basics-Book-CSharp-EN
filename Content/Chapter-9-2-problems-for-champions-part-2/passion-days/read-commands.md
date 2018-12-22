#### Reading the Commands

The algorithm for solving the problem is a direct one - we continue **reading commands** from the console, **until the command "mall.Exit" is passed**. In the meantime, we **process** each symbol (**`char`**) of each one of the commands according to the rules specified in the task requirements, and at the same time we **modify the amount** that Lina has, and **store the number of purchases**.

Let's examine the first two problems for our algorithm. The first problem concerns the way we read the commands until we reach the **"mall.Exit"** command. The solution that we previously saw uses a **`while-loop`**. The second problem for the task is to **access each symbol** of the command passed. Keeping in mind that the input data with the commands representмайки предвид, че входните данни с командите представляват са от тип **`string`**, то най-лесният начин да достъпим всеки знак в тях е чрез **`foreach` цикъл**.

Ето как би изглеждало използване на два такива цикъла:

![](/assets/chapter-9-2-images/01.Passion-days-03.png)
