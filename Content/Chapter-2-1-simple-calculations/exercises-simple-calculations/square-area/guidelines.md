#### Hints and Guideliness

We create a **new project** in the existing Visual Studio solution. In the **Solution Explorer** click the right button of the mouse on **Solution 'Simple-Calculations'**. Choose [**Add**] -> [**New Project…**]:

![](/assets/chapter-2-images/01.Square-area-01.png)

**A dialogue window** is going to be opened for a choice of **project type** for creation. We choose **C# console application** with name “Square-Area”:

![](/assets/chapter-2-images/01.Square-area-02.png)

We already have a solution with one console application in it. It is left to write the **code for solving this problem**.  For this purpose we go to the main method's body **`Main(string[] args)`** and write the following code:

![](/assets/chapter-2-images/01.Square-area-03.png)

The code enters a whole number through **`a = int.Parse(Console.ReadLine())`**, afterwards it calculates  **`area = a * a`** and finally prints the value of the variable **`area`**. **We start** the program with [**Ctrl+F5**] and **test** it with different input values: 

![](/assets/chapter-2-images/01.Square-area-04.png)