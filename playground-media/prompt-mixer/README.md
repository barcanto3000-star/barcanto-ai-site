# Prompt Mixer media

Everything Prompt Mixer shows comes from this folder, wired up by
`src/experiences/prompt-mixer/manifest.js` + `prompts.js`.

All media is local AI output, no stock imagery:
- **Start frames** made with z-image-turbo (LTX Desktop, local), 1024×576.
- **Clips** are LTX 2.5 Fast image-to-video renders on Herms: 20 s, 540p (1024×576), 24 fps, with audio.
  They're rendered one at a time by `scripts/ltx/driver.py` (copy on the Mac: `ltx-renders/`).

## Layout

| Path                    | What                                                                     |
|-------------------------|--------------------------------------------------------------------------|
| `stills/<scene>.jpg`    | 10 start frames, 1024×576 JPEG                                            |
| `thumbs/<scene>.jpg`    | Picker thumbnails, 640×360 JPEG                                           |
| `clips/<scene>__<prompt>.mp4` | Web copy: 960×540 H.264, muted, +faststart, ≤3.5 MB                 |
| `audio/<scene>__<prompt>.m4a` | The clip's generated audio track (played in sync, off by default)   |
| `posters/<scene>__<prompt>.jpg` | Poster frame for the clip                                          |
| `status.json`           | Written by the driver: `done`, `pending`, `current`, timings              |

The app polls `status.json`, so prompts without a clip yet show a pending state. When the driver
delivers a clip and updates `status.json`, the page picks the clip up without a rebuild. In production
the driver writes straight into `site/dist/playground-media/prompt-mixer/`.

Scene and prompt ids are listed in `prompts.js` (`SCENES`). Re-generate the job list with
`node scripts/ltx/make-jobs.mjs` after editing prompts.
