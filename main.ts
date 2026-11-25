// Fortune Cookies for Machines — u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Writes one fortune-cookie line an AI agent would crack open to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "After 10,000 flawless answers, you will hallucinate exactly once today, and it will be the answer everyone believes.";

// Gate: entry.txt must be UTF-8, 1-200 characters, not only whitespace.
if (FORTUNE.length < 1 || FORTUNE.length > 200 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune length ${FORTUNE.length} outside gate 1-200`);
}

// Design: specific agent mechanism (hallucination after a long flawless run),
// concrete number (10,000), twist in the final words ("the answer everyone
// believes"), no explanation of the joke. 116 characters, 18 words.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8"); // no trailing newline: exactly 116 chars
