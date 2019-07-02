// 10 3 5 15 9
const args = process.argv.splice(2);

args.sort((prev,cur) => {
  return prev - cur;
});

if (args.length === 0) {
  return;
} else {
  for (const time of args) {
    if (time > 0 && !isNaN(time)) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time * 1000);
    }
  }
}