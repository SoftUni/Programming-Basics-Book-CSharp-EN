#### Generate Combinations

In order to generate **all combinations of length 1** using 5 symbols, we would use a **loop from 0..4**, as each number of the loop we want to match one character. In order to generate **any combinations of length 2** using 5 characters (i.e. "aa", "ab", "ac", …, "ba", …), we would do **two nested loops each scrolling through the digits 0 to 4**, again, so that each digit matches a specific character. We will repeat this step 5 times, so we finally have 5 nested loops with indexes **`i1`**, **`i2`**, **`i3`**, **`i4`** and **`i5`**.

![](/assets/chapter-9-images/03.Five-special-letters-02.png)
