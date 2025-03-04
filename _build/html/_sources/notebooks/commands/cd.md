# `cd` - change directories

- Use `cd` (Change Directory) to enter a folder.

```bash
cd [folder name]
```

- Check your current location with `pwd`.

```bash
pwd
```

- To go back one directory, use `cd ../`. To return to your "home" directory:

```bash
cd    # Option 1
cd ~  # Option 2
```

- Check your current location again to ensure you're back home.

```bash
pwd
```

Since bash works in the context of a current directory, you might want to run your command in some other directory. We have cd for changing location:

Change to home directory

```bash
cd ~ 
```

or

```bash
cd     
```

Go back one directory

```bash
cd ../
```

Go to specific directory

```bash
cd /home/username/Documents  
```

Go the the previous directory you were in

```bash
cd -   
```
