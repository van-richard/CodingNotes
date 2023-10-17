---
orphan: true
---

#  Configure `ssh`

The `ssh` program receives its configuration from either the command line or from configuration files `~/.ssh/config` and `/etc/ssh/ssh_config`. Command-line options take precedence over configuration files. The user-specific configuration file `~/.ssh/config` is used next. Finally, the global `/etc/ssh/ssh_config` file is used.

Some commonly used configuration options:

- X11 forwarding
- port forwarding
- configure public key authentication

For example, I have multiple supercomputer accounts and would like to configure my `ssh` login.

First, I made the file, `config`, in my `~/.ssh/` directory:

```bash
touch ~/.ssh/config
```

Next, edit the file with `vi`:

```bash
vi ~/.ssh/config
```

Finally, I added these configuration options and saved the file:

```bash
Host *                            # Apply these options to all hosts
ServerAliveInterval 90            # Keeps the server alive by sending null packet (90 seconds)
StrictHostKeyChecking no          # Automatically add new host keys to the known_hosts 

Host ou                           # Alias for OU supercomputer, Oscer/Schooner
  Hostname schooner.oscer.ou.edu  # IP address of Oscer/Schooner
  User van                        # My username
  
Host osu                          # Alias for OSU supercomputer, Pete
  Hostname pete.hpc.okstate.edu   # IP address of Pete
  User van                        # My username
```

Now to log into either supercomputers, I just type:

::::{tab-set} 
:::{tab-item} Oscer/Schooner
```bash 
ssh ou
```
:::
:::{tab-item} Pete
```bash
ssh osu
```
:::
::::