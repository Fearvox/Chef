import { write } from "bun";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

const TARGET_DIR = join(import.meta.dir, "../public/samples");

async function fetchSample(url: string, filename: string) {
  console.log(`[INGEST] Probing target: ${url}`);
  
  if (!existsSync(TARGET_DIR)) {
    mkdirSync(TARGET_DIR, { recursive: true });
  }

  const dest = join(TARGET_DIR, filename);

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Chef-Agent-Pipeline/1.0",
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    await write(dest, buffer);
    
    console.log(`[SUCCESS] Wrote ${buffer.byteLength} bytes to ${dest}`);
  } catch (error: any) {
    console.error(`[FATAL] Ingestion failed: ${error.message}`);
    process.exit(1);
  }
}

// Target: A clean, public drum break from MDN's Web Audio examples to prove the pipeline
// Splice/SoundCloud CDNs require auth tokens/cookies which rotate. 
// We test the pipe with unauthenticated open data first.
const TEST_URL = "https://actions.google.com/sounds/v1/alarms/beep_short.ogg";
const TEST_FILENAME = "beep_short.ogg";

fetchSample(TEST_URL, TEST_FILENAME);
