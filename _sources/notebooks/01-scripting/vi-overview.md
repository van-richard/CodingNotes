# Text Editing with `vi/vim` 

- `vi/vim `are both text editors for the CLI
- `vi` is older but found on most systems
- `vim` is `vi` improved with added functionalities 
  - Both are similar to GUIs like Notepad, TextEdit, etc... 

## Overview

- Run by typing `vi` or `vim` followed by a filename
- To exit, press `esc` then `:q` or `:q!`
- Additional commands are shown below:

```bash
# Commands to manage files
    vi <filename>     # Open <filename> in vim
    :help <topic>     # Open up built-in help docs about <topic> if any exists
    :q                # Quit vim
    :q!               # Quit vim without saving file
                      #     ! *forces* :q to execute, hence quitting vim without saving
    :w                # Save current file
    :wq               # Save file and quit vim
    :x                # Save file(only when the file is modified) and quit vim
```

## Optional Text Editing Modes

- There are several "mode" options when using `vi` or `vim`
  1. Normal Mode - used for editor commands
     - This is generally the default mode and by default hitting `esc` returns the editor to this mode
  2. Insert Mode - used for typing text 
     - Opened text in buffers can be modified with the text entered from the keyboard by hitting `i` key
  3. Visual Mode - used to select areas of text
     - Commands can be run on the selected area – moving, editing, filtering 
       - Visual linewise - selects one or more whole lines by hitting `crtl (^)` + `c`
       - Visual blockwise - selects a rectangular block of text across one or more lines by hitting `crtl (^)` + `v`
  4. Command-Line Mode 
     - Run `vi/vim` commands by hitting `esc` then `:`

```{admonition} When switching between modes:
Make sure you are in Normal Mode by pressing `esc`. You should no longer see `insert` on the bottom left of the terminal!
```

## Key Bindings Commands (Normal Mode)

- Key or combination of keys on your keyboard can be assigned (bound) with a command
- Several default key bindings are:

```bash
# File Parsing
    gg                # Go to the top of the file
    G (shift + g)     # Go to the bottom of the file
    H                 # Move to the top of the screen
    M                 # Move to the middle of the screen
    L                 # Move to the bottom of the screen
    h                 # Move left one character
    j                 # Move down one line
    k                 # Move up one line
    l                 # Move right one character
    o                 # Make new line below cursor
    O                 # Make new line above cursor

# Undo/Redo
    u                 # Undo
    crtl (^) + R      # Redo

# Search for PATTERN - can be any string
    /PATTERN          # Highlights all occurrences of PATTERN after cursor
    ?PATTERN          # Highlights all occurrences of PATTERN before cursor
    n                 # Moves cursor to next occurrence of PATTERN after search
    N                 # Moves cursor to previous occurrence PATTERN 

# Scrolling
    ctrl (^) + d      # Scroll half page down
    ctrl (^) + u      # Scroll half page up
    ctrl (^) + f      # Scroll one page forward
    ctrl (^) + b      # Scroll one page backwardc
```

## Command Line Mode

- To enter this mode, press `esc` and then `:`
- The cursor to move at the bottom of the window in the command box
- You can then write any command you like and press enter to execute it
  
```bash
# File Parsing
    :NUMBER           # Go to line number, NUMBER (i.e. line 10 = :10)

# Replace PATTERN - like sed command
    :%s/foo/bar/g     # Change 'foo' to 'bar' on every line in the file
    :s/foo/bar/g      # Change 'foo' to 'bar' on the current line
    :%s/\n/\r/g       # Replace new line characters with new line characters
    :'<,'>s/foo/bar/g # Change 'foo' to 'bar on every line in the current visual
```

## Visual Configuration

```bash
:set number           # prefix line numbers (it is a visual guideline, won't modify text)
:set nonumber         # remove line number prefix
:set number!          # toggle number setting
```