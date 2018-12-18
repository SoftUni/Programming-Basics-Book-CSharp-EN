#### Remove Repetitive Letters

Once we have the finished string, we have to remove all the repeating symbols. We will do this by adding **the letters from left to right in a new string and each time before adding a letter, we will check if it already exists** - if it is, we will skip it and if it is not, we will add it. To begin with, we will add the first letter to the starting string.

![](/assets/chapter-9-images/03.Five-special-letters-05.png)

Then we will do the same with the other 4, checking each time with the following condition and the **`.IndexOf(…)`** method. This can be done with a loop by **`fullWord`** (leaving it to the reader for exercise), and it can be done in the lazy way with copy-paste.

![](/assets/chapter-9-images/03.Five-special-letters-06.png)

The **`.IndexOf(…)`** method returns **the index of the particular element if it is found or `-1` if the item is not found**. Therefore, every time we receive **`-1`**, it means that we still do not have this letter in the new string with unique letters and we can add it, and if we get a value other than **`-1`** , will mean we already have the letter and will not add it.
