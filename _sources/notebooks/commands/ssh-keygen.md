<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`ssh-keygen` - Make SSH key](#ssh-keygen---make-ssh-key)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# `ssh-keygen` - Make SSH key

`ssh-keygen` creates an RSA key pair and stores the public key in a public key file named `.ssh/id_rsa.pub` and a private key file named `.ssh/id_rsa`.

To make a key, you can type:

```bash
ssh-keygen -t rsa
```