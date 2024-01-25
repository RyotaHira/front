"use strict";

// const array = [1, 2, 3];

// const newArray = array.map((e1) => `${e1}号`);

// console.log(newArray);

// // for-ofで記載してみる
// const newArray2 = [];
// for (const e1 of array) {
//   newArray2.push(`${e1}号`);
// }
// console.log(newArray2);

// --------------------------------------------------------------

// const array = [1, 2, 3, 4, 5];

// const newArray = array.filter((e1) => e1 > 3);
// console.log(newArray);

// const newArray2 = [];
// for (const e1 of array) {
//   if (e1 > 3) {
//     newArray2.push(e1);
//   }
// }

// console.log(newArray2);

// --------------------------------------------------------------

// const etoList = ["ネズミ", "ウシ", "トラ", "ウサギ"];

// // ul要素を呼び出す（定数ul）
// const ul = document.getElementById("list");

// for (const array of etoList) {
//   // liエレメントを生成（定数li）
//   const listItem = document.createElement("ul");
//   // liエレメントの内容を配列arrayの各要素に
//   listItem.textContent = array;
//   // liエレメントをulエレメントの子要素にする
//   ul.appendChild(listItem);
// }

// --------------------------------------------------------------
const numList = [1, 2, 3, 4, 5, 6, 7, 8];
const ul = document.getElementById("list");

for (const num of numList) {
  if (num % 2 == 0) {
    const li = document.createElement("ul");
    li.textContent = `No.${num}`;
    ul.appendChild(li);
  }
}

const evenList = numList.filter((num) => num % 2 == 0).map((num) => `No.${num}`);

for (const num of evenList) {
  const li = document.createElement("ul");
  li.textContent = num;
  ul.appendChild(li);
}
