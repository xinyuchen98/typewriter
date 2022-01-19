const sentence = "hello there from lighthouse labs";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 50;
}
setTimeout(() => console.log(), timer);