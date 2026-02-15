# Automate Login (No Password) 

 Having to enter your password every time you log into a supercomputer and transfer files can become tedious. However, we can log into a supercomputer without the need to enter your password (*safely and securely*)!
 
To do this, we will make a `ssh` key. This key is an access credential for the `ssh` network protocol. This authenticated and encrypted secure network protocol is used for remote communication between machines on an unsecured open network. `ssh` uses a pair of keys to initiate a secure handshake between the remote parties. 

 You can think of `ssh` keys like a pair of magic keys that help keep your computer and other computers secure and let you connect to them easily.

 There are 3 components:

1. **Public Key:** This key is like a special lock that you give to others. It's safe to share with anyone. When someone wants to send you a secret message, they can use this lock to lock the message box.

2. **Private Key:** This key is super secret and should never be shared. It's a unique key only you have. When you receive a message that's been locked with your public key, you use your private key to unlock it. Nobody else should have this key because it's the one that keeps your stuff safe.

3. **Authentication:** Imagine you're trying to enter a secret club. Instead of saying a password, you show the bouncer your magic key (public key). The bouncer checks if it's the right one. If it is, you're in! But remember, your real key (private key) is safely in your pocket, so no one else can copy it.

So, SSH keys are like having a pair of magic keys. You give one out to others (public key) so they can send you secret stuff, and you keep the other one secret (private key) so only you can unlock your secrets. It makes connecting to other computers safer and more convenient.

## Generate Keys

Start on your local computer in your home directory.

Use the command, `ssh-keygen`, for authentication key generation, management and conversion:

```bash
ssh-keygen -t rsa -b 4096
```

We include the options `-t rsa` to generate the key in RSA format. The RSA is compatible with most SSH clients and servers. The option, `-b 4096`, specifies the number of bits in the key to create.

```{warning}
**Do not set a passphrase when creating the key (Press enter 3 times).**
```

Create a `~/.ssh` directory on the supercomputer from **your local machine**, without logging in.

```bash
ssh van@pete.hpc.okstate.edu mkdir -p .ssh
```

Now you can add your **public key**, `id_rsa.pub`, to the server (This will be the last time you enter your password.) with the following command:

```bash
cat ~/.ssh/id_rsa.pub | ssh van@pete.hpc.okstate.edu 'cat >> ~/.ssh/authorized_keys'
```

- `cat ~/.ssh/id_rsa.pub` reads the file and writes to your standard output
- `|` takes the standard output from the previous command and uses this as the input for the next command
- `ssh van@pete.hpc.okstate.edu 'cat >> ~/.ssh/authorized_keys'` executes the command in single quote over `ssh`, the command `cat >> ~/.ssh/authorized_keys` appends the contents of `id_rsa.pub` to a list of authorized keys
