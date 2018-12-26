#### Counting the Cows

We will apply the following condition for the cows - first we will check whether the **first digit** of the generated number **matches the second one**, the **third one** or the **fourth digit** of the secret number. An example for the implementation:

![](/assets/chapter-9-2-images/03.Bulls-and-cows-10.png)

After that, we sequentially check whether the **second digit** of the generated number **matches the first one**, the **third one** or the **fourth digit** of the secret number; whether the **third digit** of the generated number matches the **first one**, the **second one** or the **fourth digit** of the secret number; and finally, we check whether the **fourth digit** of the generated number matches the **first one**, the **second one** or the **third digit** of the secret number.
