"use strict";

for (let i = 0; i < 5; i++) {
  console.log("Hello World!!");
}

for (const data of [1, 2, "dog!", 1, 2, "cat!"]) {
  if (data == "dog!") {
    continue;
  }
  console.log(data); // 1 → 2 → dog! → 1 → 2 → cat!
}

for (const servant of ["犬", "猿", "雉"]) {
  for (let n = 1; n <= 3; n += 1) {
    console.log(`${servant}${n}号！`);
  }
}

// const element = document.createElement("p");
// element.textContent = "hello World!!";
// console.log(element);
// document.body.appendChild(element);

const ul = document.getElementById("list");
console.log(ul);

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.textContent = `子要素${i}号`;
  ul.appendChild(li);
}
