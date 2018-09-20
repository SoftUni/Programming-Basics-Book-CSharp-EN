### Problem: известия

Да се напише програма, която прочита цяло число **`n`** и на следващите редове въвежда **`n`** **съобщения** (като за всяко съобщение се прочитат по няколко реда). Всяко съобщение започва с **`messageType`**: **`success`**, **`warning`** или **`error`**:
   - Когато **`messageType`** е **`success`** да се четат **`operation`** + **`message`** (всяко на отделен ред).
   - Когато **`messageType`** е **`warning`** да се чете само **`message`**.
   - Когато **`messageType`** е **`error`** да се четат **`operation`** + **`message`** + **`errorCode`** (всяко на отделен ред).

На конзолата да се отпечата **всяко прочетено съобщение**, форматирано в зависимост от неговия **`messageType`**. Като след заглавния ред за всяко съобщение да се отпечатат толкова на брой символа **`=`**, **колкото е дълъг** съответният **заглавен ред** и да се сложи по един **празен ред** след всяко съобщение (за по-детайлно разбиране погледнете примерите). 

Задачата да се реши с дефиниране на четири метода: **`ShowSuccessMessage()`**, **`ShowWarningMessage()`**, **`ShowErrorMessage()`** и **`ReadAndProcessMessage()`**, като само последният метод да се извиква от главния **`Main()`** метод:

![](/assets/chapter-10-images/23.Notifications-01.png)

#### Sample Input and Output

| Input | Output |
| --- | --- |
|4<br>error<br>credit card purchase<br>Invalid customer address<br>500<br>warning<br>Email not confirmed<br>success<br>user registration<br>User registered successfully<br>warning<br>Customer has not email assigned|<code>Error: Failed to execute credit card purchase.</code><br><code>==============================================</code><br><code>Reason: Invalid customer address.</code><br><code>Error code: 500.</code><br><br><code>Warning: Email not confirmed.</code><br><code>=============================</code><br><br><code>Successfully executed user registration.</code><br><code>========================================</code><br><code>User registered successfully.</code><br><br><code>Warning: Customer has not email assigned.</code><br><code>=========================================</code>|

#### Hints and Guidelines

Дефинирайте и имплементирайте посочените четири метода.

В **`ReadAndProcessMessage()`** прочетете типа съобщение от конзолата и според прочетения тип прочетете останалите данни (още един два или три реда). След това извикайте съответния метод за печатане на съответния тип съобщение.

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/594#12](https://judge.softuni.bg/Contests/Practice/Index/594#12).