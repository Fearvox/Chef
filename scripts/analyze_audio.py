import librosa
import numpy as np
import os
import json

def analyze_track(file_path):
    print(f"[PROCESS] Analyzing {file_path}...")
    # Load first 2 minutes to save processing time while capturing the core groove
    y, sr = librosa.load(file_path, sr=22050, duration=120) 
    
    # 1. BPM / Tempo Analysis
    onset_env = librosa.onset.onset_strength(y=y, sr=sr)
    tempo, beats = librosa.beat.beat_track(onset_envelope=onset_env, sr=sr)
    
    # 2. Key Estimation (Chroma)
    chroma = librosa.feature.chroma_cqt(y=y, sr=sr)
    key_idx = np.argmax(np.sum(chroma, axis=1))
    keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    key = keys[key_idx]
    
    # 3. Spectral Features (Energy/Brightness)
    spec_cent = librosa.feature.spectral_centroid(y=y, sr=sr)[0]
    mean_cent = np.mean(spec_cent)
    
    # 4. Rhythm Complexity (Onset Density)
    onsets = librosa.onset.onset_detect(y=y, sr=sr, units='time')
    onset_density = len(onsets) / (len(y)/sr) # Onsets per second
    
    # Heuristic Classification based on Zonic styles (HipHop/Hyperpop/Rage/EDM)
    style_guess = "HipHop/Trap"
    if tempo > 135 and onset_density > 3.0:
        style_guess = "Hyperpop/Rage"
    elif tempo > 120 and mean_cent > 2500:
        style_guess = "EDM/High-Energy"

    return {
        "bpm": float(np.round(tempo[0] if isinstance(tempo, np.ndarray) else tempo, 2)),
        "key": key,
        "brightness_hz": float(np.round(mean_cent, 2)),
        "rhythm_density": float(np.round(onset_density, 2)),
        "inferred_style": style_guess
    }

samples_dir = "apps/strudel-local/public/samples/vox_latest"
results = {}

for f in os.listdir(samples_dir):
    if f.endswith(".mp3"):
        path = os.path.join(samples_dir, f)
        results[f] = analyze_track(path)

out_path = ".learning/perception/AUDIO_PATTERNS.json"
with open(out_path, "w") as out:
    json.dump(results, out, indent=2)

print("\n[SUCCESS] Analysis Complete. Results written to:", out_path)
print(json.dumps(results, indent=2))
