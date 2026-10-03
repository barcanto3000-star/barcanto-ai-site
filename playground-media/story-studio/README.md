# Story Studio media

`manifest.json` drives the whole experience (no rebuild needed to change media):
- `tracks[]`: scores (`music/*.m4a`, ~38 s, procedurally synthesised, original).
- `sets[]`: one story each: `id, title, tagline, logline, accent, defaultTrack, tracks[]` and exactly five `shots[]`
  with `title`, `line` (one-liner), `motionPrompt` (prompt used for the clip), `still`, `thumb`, `clip`, `seconds`, `render`.
- `film`: canvas size, crossfade, title/end card lengths.

Add a set: create `<set>/stills|thumbs|clips/`, drop five 1280x720 stills, 480x270 thumbs and five ~5 s 960x540
H.264 clips (yuv420p, +faststart, no audio), then append an entry to `sets[]`. Clips are fetched as blobs by the page
(the Python static server has no HTTP Range support, which iOS needs for direct <video> URLs).
