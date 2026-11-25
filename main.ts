// The Best Advice I Ever Got — make.fun entry.
// Writes one sentence (<=200 chars) to /output/entry.txt.
// The sentence is a single line of advice actually given, told as a
// recalled moment: a named giver, a concrete rule, and a twist that lands.
import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE =
  "My grandmother told me never to lend money I couldn't afford to lose, because the money is gone either way — only the friendship is still at stake.";

const text = ADVICE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
// The gate wants exactly one sentence: a single terminal period, and no
// other sentence-ending punctuation hiding a second sentence inside.
const terminators = text.replace(/[.?!]$/, "").match(/[.!?]/g);
if (terminators && terminators.length > 0) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
