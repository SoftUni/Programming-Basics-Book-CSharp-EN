# Problem: Identical Words

Write a program that **inputs two words** and checks if they are the same. Do not make difference between uppercase and lowercase letters. You have to print "**yes**" or "**no**".

## Sample Input and Output

| Input | Output |
| --- | ---- |
| Hello<br>Hello | yes |
| SoftUni<br>softuni | yes |
| Soft<br>Uni | no |
| banana<br>lemon | no |
| HeLlO<br>hELLo | yes |

## Hints and Guidelines

Before comparing the words, turn them into a lowercase to avoid the letter size influence (uppercase / lowercase): **`word = word.ToLower()`**.

## Testing in the Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/506#10](https://judge.softuni.org/Contests/Practice/Index/506#10).
