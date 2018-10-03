#### Calculating the price of the transport

After having done that, now we can start calculating **the price of the transport**. The constraints in the task refer to **the distance** that the student wants to travel. This is why, we will use an **`if-else`** construction that will help us find **the price** of the transport, depending on the given kilometers. 

![](/assets/chapter-3-2-images/01.Transport-price-05.png)

First, we check whether the kilometers are **less than 20**, as the task specifies that the student can only use **a taxi** for **less than 20 kilometers**. If the condition is **`true`** (returns **`true`**), the variable that is created to store the value of the price of the transport (**`price`**), will **store** the corresponding value. This value equals to **the starting fee** that we sum with its **rate**, **multiplied** by **the distance**, which the student has to travel. 

If the condition of the variable **is not true** (returns **`false`**), the next step of our program is to check whether the kilometers are **less than 100**. We do that because the task specifies that in this range, **a bus** can be used as well. **The price** per kilometer of a bus **is cheaper** than a taxi one. Therefore, if the result of the condition is **true**, we store **a value**, equal to the result of the **multiplication** of **the rate** of the bus by **the distance** to the variable for the **`price`** of the transport in the **`else if`** construction body.  

If this condition **does not return `true`** as a result, we have to store **a value**, equal to **the result** of **the multiplication** of **the distance** by the train **rate** to the price variable in the **`else`** body. This is done because the train is **the cheapest** transport for the given distance. 