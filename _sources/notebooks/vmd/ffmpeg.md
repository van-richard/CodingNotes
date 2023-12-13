# VMD

## ffmpeg

[ffmpeg Download](https://ffmpeg.org)

`ffmpeg` can convert image files to a video. Download the program, and add this to your `~/Programs` folder.

After creating image files from VMD, use `ffmpeg` to make the video by:

```bash
~/Programs/ffmpeg file.%05d.ppm -b:v 500M output.mp4
```

`file.%05d.ppm` - `file` is the name of your output, `%05d` is a a 5 digit number left-padded with zeros, and `ppm` is the file type.

`-b:v 500M` - Set bitrate to 500 M for better quality

`output.mp4` - Video name and filetype



```python

```
