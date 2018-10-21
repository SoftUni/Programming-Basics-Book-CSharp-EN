### Declaring Methods
In C# you can **declare** methods inside a class, i.e. between the opening **`{`** and closing **`}`** brackets of the class. Declaring is registering the method in the program, so that it can be recognized in the rest of it. The best known example is the **`Main(…)`** method, which we use in every program that we write.

![](/assets/chapter-10-images/02.Declaring-methods-01.png)

With the next example we will look at the obligatory elements in the declaration of a method.

![](/assets/chapter-10-images/02.Declaring-methods-02.png)

* **Type of the return value**. In this case the type is **`double`**, which means that the method will **return a result**, which is of type **`double`**. The return value can be **`int`**, **`double`**, **`string`** **etc.**, and also **`void`**. If the type is **`void`**, this means that the method **doesn't return** a result, but only **does a given task**.
* **Method name**. The name of the method is **defined by us**, but we shouldn't forget that it has to **describe the function**, which is executed by the code in its body. In the example the name is **`GetSquare`**, which tells us that this method is made to find the area of a square.
* **Parameter list**. It is declared between the parentheses **`(`** and **`)`**, which we write after its name. This is where we list all the **parameters**, which the method will use. There can be **only one** parameter, **multiple** ones or it could be an **empty** list. If there aren't any parameters, we will write only the parentheses **`()`**. In this example we declare the parameter **`double num`**.
* **`static`** declaration in the method description. For the moment you can accept that we write **`static`** always when you declare a method, and later when we meet object oriented programming (OOP), you will learn about the difference between **static methods** (shared for the whole class) and **methods of an object**, which work on the data of a certain instance of the class (object).

When declaring methods you must follow the **sequence** of its base elements - first **type of the return value**, then **method name** and in the end **list of parameters**, surrounded by parentheses **`()`**.

After we have declared a method, its **implementation (body)** follows. In the body of the method we write down **the algorithm**, by which it solves a problem, i.e. the body contains the code (program block), which realizes the methods **logic**. In the shown example we are calculating the area of a square, which is **`num * num`**. 

When declaring a variable in the body of a method, it is called **local** variable of the method. The area where this variable exist and can be used starts from the row where we have declared it and reaches the closing curly bracket `}` of the body of the method. This area is called **variable scope**. 