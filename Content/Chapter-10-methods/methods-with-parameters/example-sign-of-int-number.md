### Example: знак на цяло число

Да се създаде метод, който печата знака на цяло число n.

#### Sample Input and Output

| Input | Output |
| --- | --- |
|2|The number 2 is positive.|
|-5|The number -5 is negative.|
|0|The number 0 is zero.|

#### Hints and Guidelines

Първата ни стъпка е **създаването** на метод и даването му на описателно име, например **`PrintSign`**. Този метод ще има само един параметър от тип **`int`**. 

![](/assets/chapter-10-images/06.Print-sign-01.png)

Следващата ни стъпка е **имплементирането** на логиката, по която програмата ни ще проверява какъв точно е знакът на числото. От примерите виждаме, че има три случая - числото е по-голямо от нула, равно на нула или по-малко от нула, което означава, че ще направим три проверки в тялото на метода. 

Следващата ни стъпка е да прочетем входното число и да извикаме новия метод от тялото на **`Main`** метода.

![](/assets/chapter-10-images/06.Print-sign-02.png)

#### Testing in the Judge System

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/594#1](https://judge.softuni.bg/Contests/Practice/Index/594#1).