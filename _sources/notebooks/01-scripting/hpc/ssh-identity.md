(hpc-ssh)=
# Permission denied (Identify file)

- Check if identify file is associated with user

```bash
ssd-add -l
```

- If identify file exists, add private key

```bash
ssh-add ~/.ssh/id_rsa
```
