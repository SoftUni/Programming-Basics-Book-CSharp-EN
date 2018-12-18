#### Preparing the Output

Whether a word needs to be printed is determined by its weight. We need a condition to determine if **the current weight is in the range** [**start … end**] passed to the input at the start of the program. If this is the case, we print the **full** word (**`fullWord`**).

**Be careful** not to print the word with unique letters. It was only needed to calculate the weight!

The words are **separated with an interval** and will accumulate them in an intermediate variable **`result`**, which is defined as an empty string at the beginning.

![](/assets/chapter-9-images/03.Five-special-letters-09.png)
