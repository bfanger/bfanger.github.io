#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const os = require("os");
const { promisify } = require("util");
const ProgressBar = require("ascii-progress");
const batchPromises = require("batch-promises");
const imagemin = require("imagemin");
const imageminJpegoptim = require("imagemin-jpegoptim");
const imageminPngquant = require("imagemin-pngquant");

const readDir = promisify(fs.readdir);
const formats = [".png", ".jpg"];
const outputDir = path.join(__dirname, "../static/build/img");

async function main() {
  const images = [];
  const dir = path.resolve(__dirname, "../content/projects/screenshots");
  const files = await readDir(dir);
  for (const filename of files) {
    if (formats.indexOf(path.extname(filename)) === -1) {
      console.warn("Invalid filetype:", filename); // eslint-disable-line
      continue;
    }
    images.push({
      filename,
      filepath: dir + "/" + filename
    });
  }
  const bar = new ProgressBar({
    schema: " [:bar] :current/:total :percent :elapseds :etas :file",
    total: images.length
  });
  await batchPromises(os.cpus().length * 2, images, async image => {
    await imagemin([image.filepath], outputDir, {
      plugins: [
        imageminJpegoptim({ max: 85 }),
        imageminPngquant({ quality: "65-85" })
      ]
    });
    bar.tick(1, { file: image.filename });
  });
}

main();
