### Return Operator

In order to receive a result from the method we need to use the **`return`** operator. It should be **used in the body** of the method and tells the program to **stop its execution** and to **return** the method invoker a certain **value**, which is defined by the expression after the **`return`** operator.

In the example below there is a method that reads two names from the console, concatenates them and returns them as a result. The return value is of type **`string`**:

![](/assets/chapter-10-images/11.Return-operator-01.png)

The **`return`** operator can also be used in **`void`** methods. This way the method will stop its execution without returning a value, and after it there shouldn't be an expression, which should be returned. In this case we use **`return`** only to exit the method.

**There are cases** where **`return`** can be called from multiple places in the method, but only if there are **certain** input conditions.