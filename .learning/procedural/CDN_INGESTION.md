# Procedural Skill: CDN Audio Ingestion

## The Goal
Fetching audio tracks from DRM-heavy CDNs (NetEase Cloud Music, SoundCloud, Bandcamp) to use as samples within the Chef monorepo (specifically `apps/strudel-local`).

## The Pitfall (What NOT to do)
1. **Scraping CDNs directly:** Do NOT write custom Node/Bun `fetch()` scripts trying to scrape these platforms. They employ dynamic token rotation, geo-blocks, and obfuscated APIs.
2. **Relying on Default "Hot" Lists:** Do NOT just pass the artist's main URL to `yt-dlp` if you want their *latest* sound. The main page sequence returns historically popular tracks mixed together, ruining chronological analysis.

## The Standard Method
We use **`yt-dlp`** as the definitive extraction tool, but we target **chronologically sorted Albums/EPs**, not the artist root page.

### Usage Pattern (Chronological Extraction)
1. Use an API proxy script (like `scripts/fetch_latest_albums.py`) to hit the platform's Album endpoint.
2. Sort strictly by Unix timestamp (`publishTime` descending).
3. Extract the specific Song IDs from those recent albums.
4. Feed those exact Song IDs to `yt-dlp`.

```bash
# Example extracting a specific confirmed latest song ID
yt-dlp -f "exhigh/bestaudio/best" \
  -o "apps/strudel-local/public/samples/vox_latest/%(title)s.%(ext)s" \
  "https://music.163.com/song?id=<SPECIFIC_SONG_ID>"
```

### Example (NetEase)
```bash
yt-dlp -f "exhigh/bestaudio/best" --max-downloads 3 -o "apps/strudel-local/public/samples/vox/%(title)s.%(ext)s" "https://music.163.com/#/artist?id=36706970"
```

### Verification
Always verify the output bytes. MP3s and WAVs are correctly ignored by `.gitignore` to prevent repository bloat, but they must exist physically for Strudel to map them.
