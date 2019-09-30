#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const os = require("os");
const { promisify } = require("util");
const ProgressBar = require("progress");
const batchPromises = require("batch-promises");
const imagemin = require("imagemin");
const imageminJpegoptim = require("imagemin-jpegoptim");
const imageminPngquant = require("imagemin-pngquant");

const readDir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const formats = [".png", ".jpg"];
const destination = path.join(__dirname, "../static/build/img");

async function main() {
  const images = [];
  const dir = path.resolve(__dirname, "../content/projects/screenshots");
  const files = await readDir(dir);
  for (const filename of files) {
    if (!formats.includes(path.extname(filename))) {
      console.warn("Invalid filetype:", filename); // eslint-disable-line
      continue;
    }
    images.push({
      filename,
      filepath: dir + "/" + filename
    });
  }
  let bar;
  if (process.stdin.isTTY) {
    bar = new ProgressBar(
      " [:bar] :current/:total :percent :elapseds :etas :file",
      {
        total: images.length
      }
    );
  } else {
    process.stderr.write("Optimizing " + images.length + " images\n");
    bar = {
      tick() {
        process.stderr.write(".");
      }
    };
  }
  try {
    await batchPromises(os.cpus().length * 2, images, async image => {
      const source = await stat(image.filepath);
      const target = await stat(destination + "/" + image.filename).catch(
        () => ({
          mtime: new Date(0)
        })
      );
      if (source.mtime > target.mtime) {
        // Generated image is out-of-date or doesn't exist.
        await imagemin([image.filepath], {
          destination,
          plugins: [
            imageminJpegoptim({ max: 85 }),
            imageminPngquant({ quality: [0.65, 0.85] })
          ]
        });
      }
      bar.tick(1, { file: image.filename });
    });
    process.stderr.write("\n");
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }
}

main();
