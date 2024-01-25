const bgColor = document.getElementById("bgColor"); // 背景色 type：color
const fgColor = document.getElementById("fgColor"); // 文字色 type：color
const backGround = document.getElementById("background"); // div
const foreGround = document.getElementById("foreground"); // テキストの色

console.log("Hello");

// 背景色は change イベント
bgColor.addEventListener("change", () => {
  console.log(bgColor.value);
  backGround.style.backgroundColor = bgColor.value;
});

// 前景色は input イベント
fgColor.addEventListener("input", () => {
  console.log(fgColor.value);

  foreGround.style.color = fgColor.value;
});
