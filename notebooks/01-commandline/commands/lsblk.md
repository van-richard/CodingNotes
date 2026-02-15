# `lsblk` - list filesystem

```bash
lsblk
```

- something like this:

```bash
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 931.5G  0 disk /mnt/data
sdb           8:16   0  10.9T  0 disk
└─sdb1        8:17   0  10.9T  0 part /home/van/archive
nvme1n1     259:0    0   1.8T  0 disk
├─nvme1n1p1 259:1    0 976.6G  0 part
nvme0n1     259:4    0 465.8G  0 disk
├─nvme0n1p1 259:5    0   512M  0 part /boot/efi
└─nvme0n1p2 259:6    0 465.3G  0 part /
```

