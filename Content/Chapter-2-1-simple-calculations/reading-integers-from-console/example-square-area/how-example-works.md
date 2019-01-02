#### How Does the Example Work?

The first row **`Console.Write("a = ");`** prints an informative message, which invites the user to enter the side of the square  **a**. After the output is printed, the cursor stays on the same row. Staying on the same row is more convenient for the user, visually. We use **`Console.Write(…)`**, and not **`Console.WriteLine(…)`** and this way the cursor stays on the same row.

The next row **`var a = int.Parse(Console.ReadLine());`** reads an integer from the console. Actually, it first reads a text (string) using **`Console.ReadLine()`** and after that it gets converted to an integer (it is parsed) using **`int.Parse(…)`**. The result is kept in a variable with name **`a`**.

The next command **`var area = a * a;`** keeps in a new variable **`area`** the result of the multiplication of **`a`** by **`a`**.

The next command **`Console.Write("Square area = ");`** prints the given text without going to the next line. Again, use  **`Console.Write(…)`**, and not **`Console.WriteLine(…)`**, and this way the cursor stays on the same row in order to print the calculated area of the square afterwards. 

The last command **`Console.WriteLine(area);`** prints the calculated value of the variable  **`area`**.
