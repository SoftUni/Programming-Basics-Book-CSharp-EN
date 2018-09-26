### Hints and Guidelines

Let' s first think of the way we can solve the task again, before having started to write code.

#### Idea for Solution

We see that the **number of bitcoins** and the **number of Chinese yuans** will be given in the input. The **output** should be in **euro**. The exchange rates that we have to work with, are specified in the task. We notice that we can only exchange the sum in lev to euro, therefore, we **first have to calculate the whole sum that Pesho has in lev**, and **then calculate the output**.

As we have information for the exhange rate of bitcoins to levs, we can directly exchange them. On the other hand, in order to get the value of **Chinese yuans in levs**, first we have to **exchange them in dollars**, and then **the dollars to levs**. Finally, we will **sum the two values** and calculate how much euro that is. 

Only the final step is left: **calculating the commission** and subtracting the new sum from the total one. We will receive **an integer** for the commission, which will be a particular **percent from the total sum**. Let' s divide it by 100, so as to calculate its **percentage value** and then multiply it by the sum in euro. We will divide the result from the same sum and print the final sum on the console. 