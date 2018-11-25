#### Checking for 0

Let's create and initialize the variables needed for the logic and calculations. In one variable we will store **the calculations output**, and the other one we will use for the **final output** of the program.

![](/assets/chapter-4-2-images/03.Operations-02.jpg)

When carefully reading the requirements, we understand that there are cases where we don't need to do **any** calculations, and simply display a result.

Therefore, we can first check if the second number is **`0`** (zero), as well as whether the operation is **division** or **modular division**, and then initialize the output.

![](/assets/chapter-4-2-images/03.Operations-03.jpg)

Let's place the output as a value upon initializing the **`output`** parameter. This way we can apply **only one condition** - whether it is needed to **recalculate** or **replace** this output. 

Based on the approach that we choose, our next condition will be either a simple **`else`** or a single **`if`**. In the body of this condition, using additional conditions regarding the manner of calculating the output based on the passed operator, we can separate the logic based on the **structure** of the expected **output**. 
