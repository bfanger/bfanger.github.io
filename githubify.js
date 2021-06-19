#!/usr/bin/env node

/**
 * Create a folder structure that github likes.
 */
import { promises as fs } from "fs";
import path from "path";

const exists = (file) =>
  fs
    .stat(file)
    .then(() => true)
    .catch(() => false);

const clean = true;

async function detectAndMoveIndex(folder) {
  const indexFile = `${folder}/index.html`;
  if (await exists(indexFile)) {
    const htmlFile = `${path.dirname(folder)}/${path.basename(folder)}.html`;
    if ((await exists(htmlFile)) === false) {
      await fs.copyFile(indexFile, htmlFile);
      if (clean) {
        const files = await fs.readdir(folder);
        if (files.length === 1) {
          await fs.unlink(indexFile);
          await fs.rmdir(folder);
        }
      }
    }
  }
}

async function crawl(folder) {
  const entries = await fs.readdir(folder);
  await Promise.all(
    entries.map(async (entry) => {
      const filepath = `${folder}/${entry}`;
      const info = await fs.stat(filepath);
      if (info.isDirectory()) {
        await crawl(filepath);
        await detectAndMoveIndex(filepath);
      }
    })
  );
}
const dir = path.dirname(import.meta.url.replace(/^file:\/\//, ""));
await crawl(`${dir}/build`);
console.log("githubified"); // eslint-disable-line no-console
