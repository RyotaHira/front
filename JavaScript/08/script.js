"use strict";

// console.log("Hello World!!");

// const p1 = document.getElementById("dom");
// console.log(p1.textContent); // → Document Object Modelの略です。

// const p2 = document.querySelector("p");
// console.log(p2.textContent); // → Document Object Modelの略です。

// const lis = document.querySelectorAll("li");
// console.log(lis); // → NodeList(3) [li, li, li]

// const lisArray = Array.from(lis);
// const newLis = lisArray.map((li) => li.textContent + "!!");
// console.log(newLis);

// const lis1 = document.getElementsByTagName("li");
// console.log(lis1);

// const img = document.getElementsByTagName("img")[0];
// console.log(img); // → <img>

// const ps = document.getElementsByClassName("explain");
// console.log(ps); // → HTMLCollection(2) [p, p]

// const inputs = document.getElementsByName("dom");
// console.log(inputs); // → NodeList(3) [input, input, input]

// 親子、兄弟要素のアクセス

// const a = document.getElementById("link"); // a要素
// console.log(a);

// const p = a.parentElement;
// console.log(p);

// const img = a.firstElementChild;
// console.log(img);

// const ul = document.getElementById("list"); // 親要素 → ul
// console.log(ul.firstElementChild.textContent);

// for (let li = ul.firstElementChild; li != null; li = li.nextElementSibling) {
//   console.log(li.textContent);
// }

const ul = document.getElementById("list");
const li1 = ul.firstElementChild; // 1番目の子要素
const removedLi1 = ul.removeChild(li1);

removedLi1.textContent = "Remoooved!!"; // 削除されてもまだ使える
document.body.appendChild(removedLi1); // 再利用

for (let li = ul.firstElementChild; li != null; li = li.nextElementSibling) {
  console.log(li.textContent);
}
