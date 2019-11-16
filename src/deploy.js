#!/usr/bin/env node
const path = require("path");
const { spawn } = require("child_process");

async function main() {
  const projectDir = path.resolve(__dirname, "../");
  await run("./node_modules/.bin/sapper", ["export"], { cwd: projectDir });

  const outputDir = path.join(projectDir, "__sapper__/export");
  await run("git", ["init"], { cwd: outputDir });
  await run("git", ["add", "."], { cwd: outputDir });
  await run("git", ["commit", "-m", "github deploy"], { cwd: outputDir });
  await run(
    "git",
    ["push", "-f", "git@github.com:bfanger/bfanger.github.io.git", "master"],
    { cwd: outputDir }
  );
}
main();

function run(command, args, options) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, options);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on("exit", code => {
      if (code === 0) {
        resolve();
      }
      reject(
        new Error("`" + command + args.join(" ") + "` exited with " + code)
      );
    });
  });
}
