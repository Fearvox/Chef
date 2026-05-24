import urllib.request
import json
import time

def get_latest_albums(artist_id, limit=10):
    url = f"http://music.163.com/api/artist/albums/{artist_id}?limit={limit}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
    except Exception as e:
        print(f"[FATAL] Failed to fetch NetEase API: {e}")
        return []

    albums = data.get("hotAlbums", [])
    albums.sort(key=lambda x: x.get("publishTime", 0), reverse=True)
    return albums

def get_album_songs(album_id):
    url = f"http://music.163.com/api/album/{album_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return [song["id"] for song in data.get("album", {}).get("songs", [])]
    except Exception as e:
        return []

if __name__ == "__main__":
    artist_id = "36706970"
    print(f"[PROCESS] Fetching latest discography for Artist ID: {artist_id}")
    latest_albums = get_latest_albums(artist_id)
    
    if not latest_albums:
        exit(1)

    print("\n--- LATEST RELEASES & SONG IDs ---")
    for idx, a in enumerate(latest_albums[:3]):
        publish_ms = a.get("publishTime", 0)
        pt = time.strftime("%Y-%m-%d", time.gmtime(publish_ms / 1000))
        print(f"\n[{idx+1}] {pt} | {a['name']} | Album ID: {a['id']}")
        
        song_ids = get_album_songs(a["id"])
        for s_id in song_ids:
            print(f"    Song URL: https://music.163.com/song?id={s_id}")
