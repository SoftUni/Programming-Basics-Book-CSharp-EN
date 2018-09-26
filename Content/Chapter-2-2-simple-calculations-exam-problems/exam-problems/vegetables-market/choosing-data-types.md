#### Choosing Data Types

After we have a clear idea on how to solve the task, we can continue with choosing appropriate data types. Let' s go through the **input**: we have **two integers** for total kilograms of vegetables and fruits, therefore, the variables we declare to store their values will be of type **`int`**. The prices of the fruits and vegetables are said to be floating-point numbers, therefore, the variables will be of type **`double`**.

We can also declare two variables to store the income from the fruits and vegetables separately. As we are multiplying a variable of type **`int`** (total kilograms) with one of type **`double`** (price), the result should also be of type **`double`**. Let' s clarify that: generally, **operators work with arguments of the same type**. Therefore, in order to multiply values from different data types, we have to convert them to the same type. When there are types of different scopes in one expression, the one with the highest scope is the one the other types are converted to, in this case, **`double`**. As there isn' t danger of data loss, **the conversion is implicit** and is automatically done by the compiler. 

The **output** should also be a **floating-point number**, therefore, the result will be stored in a variable of type **`double`**.
