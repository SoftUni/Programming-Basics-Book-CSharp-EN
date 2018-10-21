### Return Value Types

Up until now wesaw some examples, in which when declaring methods we used the keyword **`void`**, which shows that the method **does not** return a result, but just executes a certain action.

![](/assets/chapter-10-images/10.Return-types-01.png)

If we **replace** **`void`** with **a type** of some variable, this will tell the program that the method should return a value of the said type. This returned value could be of any type – **`int`**, **`string`**, **`double`** etc. 

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>In order for a method to return <strong>a result</strong> we need to write in the type of the return value we want when declaring the method, in the place of <code>void</code>.</td></tr>
</table>

![](/assets/chapter-10-images/10.Return-types-02.png)

We should note that **the result** returned by the method can be of **a type, compatible with the type of the return value** of the method. For example if the declared type of the return value is **`double`**, we can return a value of type **`int`**.
