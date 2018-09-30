### Division of Numbers (operator /)

Dividing numbers is done by the operator **`/`**. It works differently with integers and floating-point numbers.
* When we divide two whole numbers, an **integer divison** is applied and the received output is without its fractional part. Example: 11 / 3 = 3.
* When we divide two numbers and at least one of them is a real number, a **floating division** is applied and the received result is a real number, just as it is in math. Example 11 / 4.0 = 2.75.  When it cannot be done with exact precision, the result is being rounded, for example 11.0 / 3 = 3.66666666666667.
* The integer **division by 0** causes  an **exception** during runtime (runtime exception).
* Real numbers **divided by 0** do not cause an exception and the result is  **+/- infinity** or a special value  **NaN**. Example 5 / 0.0 = &#8734;.

Here are a few examples with the divison operator:

```csharp
var a = 25;
var i = a / 4;      // we are applying an integer division:
                    // the result of this operation will be 6 – the fractional part will be cut, 
                    // because we are dividing integers
var f = a / 4.0;    // 6.25 – floating division. We have set the number 4 to be interpreted 
                    // as a float by adding a decimal separator followed by zero 
var error = a / 0;  // Error: Integer divide by zero
```