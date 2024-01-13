# Text Editors

So how do we make, edit, or even begin to visualize files? 

We need a CLI text editor. Something similar on your computer might be `Notepad`, or `TextEdit`, which really is just a simplified Word program.

You have several text-editor options, like `nano`, `emacs`, and `vi/vim`. Personally, I prefer using `vi/vim`, since I learned this first, but feel free to explore what works best for you!

## vi/vim

There are several levels to using `vi/vim`, but don't get lost! For now, we only need to know:

`vi/vim` has 2 modes:

1. Command Mode
   - When you run `vi filename` to edit, `vi/vim` starts out in command mode. This means that all the alphanumeric keys are bound to commands, rather than inserting those characters.
2. Insert Mode
   - To enter the insert mode, type `i` (for “insert”, this is shown in the bottom right corner). You can type normally until you want to make a correction, save the file, or perform another operation that’s reserved for command mode or last-line mode. To get out of insert mode, hit the `esp` key.

## How to Use vi/vim?

To make a new file:

```bash
vi filename
```

If `filename` exists, `vi/vim` will open it, and you start in Command Mode.

## Save & Quit

To do this, you need to be in Command Mode. There are 4 options:

1. `:w`
   - Save the file
2. `:wq`
   - Save the file and quit (exit)
3. `:q`
   - Quit the file, but don't exit
   - If changes were made, then you will not be able to exit, and must do option 4.
4. `:q!`
   - "Force quit" the file