"use strict";

const storage = localStorage;

const input = document.querySelector("input"); // input要素
const output = document.getElementById("output"); // div#output要素
const submit = document.getElementById("submit"); // button#submit要素

const ul = document.createElement("ul");
output.appendChild(ul);

document.addEventListener("DOMContentLoaded", () => {
  // const storagedData = storage.store || "ここに内容を表示します";
  // output.textContent = storagedData; // div要素に出力
  if (storage.store != undefined) {
    listItem = JSON.parse(storage.store); // JSON → 配列

    for (const item of listItem) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }
  }
});

let listItem = []; // リストデータを一時保存する配列

// ［記録］ボタンを押したら…
submit.addEventListener("click", () => {
  // output.textContent = input.value;
  // storage.store = input.value;
  // input.value = ""; // テキストボックスを空にする

  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);

  listItem.push(input.value); // 配列にli要素の内容を追加
  storage.store = JSON.stringify(listItem);
  input.value = ""; // テキストボックスを空にする
});

const remove = document.createElement("button");
remove.textContent = "ストレージデータを削除";
document.body.insertBefore(remove, output.nextElementSibling);

remove.addEventListener("click", () => {
  delete storage.store;
  ul.textContent = ""; // 書き換え
  listItem = []; // 追加
});

const link = document.createElement("button");
link.textContent = "別ページへ飛ぶ";
document.body.insertBefore(link, remove);

link.addEventListener("click", () => {
  location.href = "page.html";
  //window.open("page.html", "_self");
});
