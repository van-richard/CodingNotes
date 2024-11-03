# MOV to MP4

```bash
ffmpeg \
    -i cas9.%05d.ppm \
    -c:v libx264 \
    -crf 25 \
    -vf "scale=1000:1000,format=yuv420p" \
    -b:v 500M \
    -movflags +faststart \
    test.mp4
```
