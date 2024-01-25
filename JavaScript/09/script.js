"use strict";
/*
// // console.log("Hello World!!");

// // const p = document.getElementById("p_id");
// // console.log(`属性：${p.id}`);

// // console.log(`p.class：${p.class}`); // → undefined
// // console.log(`p.className：${p.className}`); // → p_class

// // a要素とimg要素のエレメントを取得
// const a = document.getElementById("link");
// const img = a.firstElementChild;

// // // 属性値を書き換えることもできる
// // console.log(`元のリンクURL: ${a.href}`);
// // a.href = "https://loremflickr.com/320/240/dog";

// // // つまり、JavaScript側で画像を差し替えることもできる
// // console.log(`元の画像ソース: ${img.src}`);
// // img.src = "https://loremflickr.com/320/240/dog";

// // a要素のtarget属性の内容で表示するテキストを場合分け
// let text;
// if (a.target == "_blank") {
//   text = "別のタブで開きます";
// } else {
//   text = "同じタブで開きます";
// }

// // 変数textの内容を持ったテキストノードを生成（引数で内容を指定）
// const textNode = document.createTextNode(text);

// // br要素を生成
// const br = document.createElement("br");

// // 親要素となるp要素（2つ目のp要素）を呼び出して、上記のノードを子要素として追加
// const p = document.getElementsByTagName("p")[2];
// console.log(p);
// p.appendChild(br);
// p.appendChild(textNode); // テキストノードもappendChildできる

// class属性が設定されていない2番目のp要素を取得
const p = document.querySelectorAll("p")[1];
console.log(p.className); // → 何も表示されない

p.className = "new_class"; // class属性を追加
console.log(p.className); // → 何も表示されない

const a = document.getElementById("link");

console.log(a.target); // → _blank

a.removeAttribute("target");

const attrs = a.attributes; // 属性一覧を取得
console.log(attrs);

// for-ofが使える
for (const attr of attrs) {
  console.log(attr); // → id="link" → ...
}

console.log(attrs.href.name); // → href
console.log(attrs.href.value); // → "https://zenn.dev/ojk"

// value（属性値）のほうは書き換えも可能
attrs.href.value = "https://loremflickr.com/320/240/dog";

const test = "-------------------------";
console.log(test);

// 普通のfor-of文
for (const attr of attrs) {
  console.log(attr.name + ":" + attr.value); // → id:"link" → ...
}

// オブジェクトの分割代入を使ったfor-of文
for (const { name, value } of attrs) {
  console.log(name + ":" + value); // → id:"link" → ...
}



const p = document.getElementsByClassName("p_class")[1];

console.log(p.style.color);
console.log(p.style.border);
p.style.color = "brown";
p.style.border = "solid 5px gold";
p.style.padding = "10px 20px";
p.style.backgroundColor = "beige";
// → Error: Invalid left-hand side in assignment

const widthArray = ["border-top-width", "border-left-width", "border-bottom-width", "border-right-width"];

for (let i = 0; i < widthArray.length; i += 1) {
  p.style[widthArray[i]] = i * 2 + "px";
}

const p = document.getElementById("p_id");

p.style.border = "solid 1px navy";

console.log(`border-style: ${p.style.borderStyle}`); // → solid
console.log(`border-width: ${p.style.borderWidth}`); // → 1px
console.log(`border-color: ${p.style.borderColor}`); // → navy
p.style.borderColor = "firebrick";
console.log(p.style.border); // → solid 1px firebrick
*/

const p = document.getElementById("p_id");
console.log(p.className);
console.log(p.classList);
// → DOMTokenList ["p_class", value: "p_class"]

p.className = "baseStyle"; // classNameプロパティも併用できる
console.log(p.className);
console.log(p.classList);

const flag = window.prompt("A, B, or C");

if (flag == "A") {
  p.classList.add("p_class"); // p_classを追加
} else if (flag == "B") {
  p.classList.add("myStyle"); // myStyleを追加
}
console.log(p.className);
console.log(p.classList);
