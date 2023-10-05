# More on SSH-ing

## Overview

`ssh` is Secure Shell protocol used for remote logins, allowing access to a computer over the internet. We use this command to access the supercomputer. 

[SSH on wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
> "Secure Shell Protocol is a cryptographic network protocol for operating network services securely over an unsecured network. Its most notable applications are remote login and command-line execution. SSH applications are based on a client–server architecture, connecting an SSH client instance with an SSH server."

## `ssh` to Login

You will need to apply to a supercomputing center (OSCER, PETE, etc.) for an account with the group.

I recommend creating a simple username. For example, my username is `van` just about everywhere.

Once you have an account set up, you can login from your terminal in this notation:

```bash
ssh username@ssh.server.example.edu
```

With my username, it would look like:

```bash
ssh van@ssh.server.example.edu
```

If this is your first time logging in, you will get the following prompt. *Answer `yes`* This will only happen on the first login.

```bash
The authenticity of host 'ssh.server.example.edu' cannot be established.
 DSA key fingerprint is 01:23:45:67:89:ab:cd:ef:ff:fe:dc:ba:98:76:54:32:10.
 Are you sure you want to continue connecting (yes/no)?
```

Answering yes to the prompt will cause the session to continue, and the host key is stored in the local system's known_hosts file. This is a hidden file, stored by default in a hidden directory, called `/.ssh/known_hosts`, in the your home directory. Once the host key has been stored in the known_hosts file, the client system can connect directly to that server again without need for any approvals.

## Upload/Download Files

There are two ways to do this.

1. `rsync` (recommended)
2. `scp`

### `rsync` for Large Data Transfers

`rsync` will sync the folders and update the newest folders. This is helpful for large data transfers! 

```bash 
## Send directory to server
rsync -avuim directory/ van@ssh.server.example.edu:/path/to/directory 
##  Download directory to desktop 
rsync -avuim van@ssh.server.example.edu:/path/to/directory/ directory  
```

### `scp` for Small Data Transfers

`scp` is useful for copying single files or folders

Example of copying files from your desktop to the supercomputer

```bash
## Send files/folders to server
scp file.txt van@ssh.server.example.edu:/path/to/directory ## Copy file to server
scp -r folder van@ssh.server.example.edu:/path/to/directory ## Copy folder to server

## Download files/folders to desktop
scp van@ssh.server.example.edu:/path/to/directory . ## Copy file from server to here (".")
scp van@ssh.server.example.edu:/path/to/directory . ## Copy folder from server to here (".")
```

## Run Commands over SSH

What if the only thing you need to do over the SSH connection is execute a single quick command? You might not want to take the separate actions of connecting and authenticating, running the command, and then disconnecting.  

```bash
ssh van@ssh.server.example.edu [COMMAND]
# Example of making directory w/o login
# ssh van@ssh.server.example.edu mkdir test
```

## Advanced

### Automate Login (No Password)

It is possible to sign into your supercomputing account without entering a password. You will need to generate a public key pair to use when authenticating with the server.

On your local computer, run the following:

```bash
ssh-keygen -t rsa -b 4096
```

*Do not set a passphrase when creating the key (Press enter 3 times).*

Make sure that this file is only readable by you! The public key file (`id_dsa.pub` or `id_rsa.pub`) as the name implies can be uploaded to other systems to which you would like passwordless access.

Create a `~/.ssh` directory on the supercomputer from **your local machine**. The period before `ssh` makes the folder hidden.

You do not need to log-in yet.

```bash
ssh van@ssh.server.example.edu mkdir -p .ssh
```

Now you can add your *public key* (`id_dsa.pub` or `id_rsa.pub`) to the server. This will be the last time you enter your password.

```bash
cat .ssh/id_rsa.pub | ssh van@ssh.server.example.edu 'cat >> ~/.ssh/authorized_keys'
```

#### Configuration File

The `ssh` program receives its configuration from either the command line or from configuration files `~/.ssh/config` and `/etc/ssh/ssh_config`. Command-line options take precedence over configuration files. The user-specific configuration file `~/.ssh/config` is used next. Finally, the global `/etc/ssh/ssh_config` file is used.

Some commonly used configuration options:

- X11 forwarding
- port forwarding
- configure public key authentication

For example, I made the file `~/.ssh/config` and added:

```bash
touch ~/.ssh/config
```

```bash
## Example ~/.ssh/config file
Host * ServerAliveInterval 90 
StrictHostKeyChecking no 

Host ou  
  Hostname schooner.oscer.ou.edu  
  User van    
  
Host osu   
  Hostname pete.hpc.okstate.edu
  User van
```
