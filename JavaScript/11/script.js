"use strict";

const list = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
  "images/07.jpg",
  "images/08.jpg",
  "images/09.jpg",
  "images/10.jpg",
];

let imgN = 0; // 現在のファイル番号

const img = document.getElementById("main"); // 画像
const [leftArrow, rightArrow] = document.getElementsByTagName("span");

const p = document.createElement("p"); // p要素を生成
p.style.color = "lightgray"; // p要素の文字色を設定

const div = document.getElementById("photo"); // 親要素を取得
div.insertBefore(p, img.nextElementSibling); // img要素の下にp要素を追加

// let count = 0;
// document.body.style.color = "white";

/* ------------ 関数 ------------- */

function setImage() {
  img.src = list[imgN]; // 画像を表示
  p.textContent = `${imgN + 1}/${list.length}`;
}

// const countID = setInterval(() => {
//   document.body.textContent = count;
//   count += 1;
//   if (count > 5) {
//     clearInterval(countID); // 繰り返し停止
//     document.body.textContent += " stopped!!";
//   }
// }, 1000);

/* ------------ イベント -------------- */

// ページ読み込み時に実行される
document.addEventListener("DOMContentLoaded", () => {
  setImage();
});

// 右矢印ボタンをクリックしたときに実行される
rightArrow.addEventListener("click", () => {
  imgN += 1; // インデックスを一つ進めて…
  if (imgN >= list.length) {
    imgN = list.length - 1; // 最大値の固定
  }
  setImage();
});

leftArrow.addEventListener("click", () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0; // 最小のインデックスで固定
  }
  setImage();
});

// 自動再生
const button = document.createElement("button"); // 再生ボタン
button.textContent = "自動再生する";
div.appendChild(button); // div#photo要素の一番下の子要素にする

let autoplay = false;

button.addEventListener("click", () => {
  if (!autoplay) {
    button.textContent = "無効";
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  } else {
    clearInterval(autoplay);
    autoplay = false; // 初期値falseに戻す
    button.textContent = "自動再生する";
  }
});
