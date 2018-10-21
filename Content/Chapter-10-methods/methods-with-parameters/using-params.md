### Using Parameters in Methods

As we observed above, **the parameters can be zero, one or more**. When declaring them you should divide them with a comma. They can be of every type (**`int`**, **`string`** etc.), and there is an example below to show how they can be used by the method.

**Declaring** the method and its **list** of **parameters**, after which writing the code, which the method executes.

![](/assets/chapter-10-images/05.Method-parameters-01.png)

After that **invoke** the method and **give it set values**:

![](/assets/chapter-10-images/05.Method-parameters-02.png)

When **declaring parameters** we can use **different** types of variables, and we should be careful that every parameter has **type** and **name**. It is important to note that when invoking the method we must feed it **values** for the parameters in **the order**, in which they are **declared**. If the parameters are first **`int`** and after that **`string`**, when invoking the method we can't give it firs a **`string`** and then **`int`**. We can only change places of given parameters if we writh the name of the parameter beforehand, as you will see below in one of the examples. This is generally not good practice!

Let's look at the example for declaring a method, which has several parameters of different types.

![](/assets/chapter-10-images/05.Method-parameters-03.png)