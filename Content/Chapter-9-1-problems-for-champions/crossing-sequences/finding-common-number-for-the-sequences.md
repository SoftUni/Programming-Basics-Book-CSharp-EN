#### Finding Common Number for the Sequences

Once we have generated the numbers in both sequences, we can proceed to unite them and build the final solution. How will it look? For **each of the numbers** in the first sequence (starting from the less) we will check if it exists in the other. The first number that meets this criterion will be **the answer** to the problem.

The searching in the second array we will do it **linear**, and for the more curious we will let it optimize it using the technique called **binary search** because the second array is generated sorted, i.e. it meets the requirement to apply this type of search. The code for finding our solution will look like this:

![](/assets/chapter-9-images/01.Crossing-sequences-06.png)
