# Text Editing with Vi/Vim

Vi/Vim is a text editor you can use in your terminal. Unfortunately, this program isn't like the ones you may be familiar with like Notepad, TextEdit, etc... There are a lot of key bindings you will need to remember, but once you're use to it, you'll realize this text editor designed for speed and increased productivity. The numerous keybindings will be your best friend for speedy navigation to specific points in the file, and for fast editing.

# Overview of Some Commands

```bash
    vi <filename>     # Open <filename> in vim
    :help <topic>     # Open up built-in help docs about <topic> if any exists
    :q                # Quit vim
    :w                # Save current file
    :wq               # Save file and quit vim
    ZZ                # Save file and quit vim
    :q!               # Quit vim without saving file
                      # ! *forces* :q to execute, hence quitting vim without saving

    ZQ                # Quit vim without saving file
    :x                # Save file(only when the file is modified) and quit vim

    u                 # Undo
    CTRL+R            # Redo

    h                 # Move left one character
    j                 # Move down one line
    k                 # Move up one line
    l                 # Move right one character

# Searching in the text
    /word             # Highlights all occurrences of word after cursor
    ?word             # Highlights all occurrences of word before cursor
    n                 # Moves cursor to next occurrence of word after search
    N                 # Moves cursor to previous occurrence of word

    :%s/foo/bar/g     # Change 'foo' to 'bar' on every line in the file
    :s/foo/bar/g      # Change 'foo' to 'bar' on the current line
    :%s/\n/\r/g       # Replace new line characters with new line characters
    :'<,'>s/foo/bar/g # Change 'foo' to 'bar on every line in the current visual

    # Other characters for moving around

    gg                # Go to the top of the file
    G                 # Go to the bottom of the file
    :NUM              # Go to line number NUM (NUM is any number)
    H                 # Move to the top of the screen
    M                 # Move to the middle of the screen
    L                 # Move to the bottom of the screen
```