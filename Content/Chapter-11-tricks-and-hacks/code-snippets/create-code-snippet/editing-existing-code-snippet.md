#### Changing an Existing Snippet

Now we have to focus on the part **`<Title><Title>`**, **`<Shortcut><Shortcut>`** and the code between **`CDATA[]`**. Firstly, we will change the title in **`<Title><Title>`** and in place of **`cw`**we will write **`cr`**, as this will be **the title of our snippet**. After that, in the section **`<Shortcut><Shortcut>`**, we will change what we have to write to **call our snippet** (the shortcut) from **`cw`** to **`cr`**. Finally, we need to change the code in **`CDATA[]`**, from **`WriteLine`** to **`ReadLine`**: **`CDATA[$SystemConsole$.ReadLine($end$);]`**. If you wish you can change the sections Description и Author. The changed file should look like this:

![](/assets/chapter-11-images/01.Code-snippet-05.jpg) 
