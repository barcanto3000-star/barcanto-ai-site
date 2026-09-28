# Barcanto public website

This repository publishes the static [Barcanto](https://barcanto.ai/) website. The homepage introduces Character Studio and Vibe Director and offers a private-preview contact link. It does not host the local Studio or start video generation.

`scripts/build-public-site.mjs` assembles an allowlisted `public/` folder. The GitHub Pages workflow publishes only that folder on updates to `main`, excluding private Studio code, data, evidence, and local services.
