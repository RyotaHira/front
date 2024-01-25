"use strict";

// ローカルストレージ
const storage = localStorage;

// テーブルに表示する値を一時保持する配列
let todoList = [];

// htmlに用意した各要素のエレメントを取得する
const table = document.querySelector("table"); // table要素
const todo = document.getElementById("todo"); // todo属性(テキストボックス)
const priority = document.querySelector("select"); //select要素(優先度選択項目)
const date = document.querySelector("input[type=date]"); // date属性(期日)
const submit = document.getElementById("submit"); // submit属性(登録ボタン)
const main = document.querySelector("main"); // main要素

// 絞り込みボタンの追加
const filterButton = document.createElement("button");
filterButton.textContent = "優先度（高）で絞り込み";
filterButton.id = "priority";
main.appendChild(filterButton);

// TODO削除ボタンの追加
const deleteButton = document.createElement("button");
const br = document.createElement("br");
deleteButton.textContent = "完了したTODOを削除";
deleteButton.id = "remove";
main.appendChild(br);
main.appendChild(deleteButton);

document.addEventListener("DOMContentLoaded", () => {
  // ストレージの読み込み
  const json = storage.store;

  if (json == undefined) {
    return; // ストレージがない場合は処理を抜ける
  }
  // JSONをオブジェクト配列に変換して配列todoListに代入
  todoList = JSON.parse(json);

  // テーブルにデータを表示
  for (const item of todoList) {
    getItem(item);
  }
});

// テーブルに値を設定するメソッド
const getItem = (item) => {
  // テーブルに表示する
  const tr = document.createElement("tr"); // tr要素を作成
  for (const prop in item) {
    const td = document.createElement("td"); // td要素を作成

    if (prop == "done") {
      // チェックボックスの生成
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item[prop];
      td.appendChild(checkbox);
      checkbox.addEventListener("change", checkBoxChange);
    } else {
      td.textContent = item[prop];
    }

    tr.appendChild(td); // 親ノードに子ノードを追加
  }
  table.appendChild(tr);
};

// 登録ボタンイベント　入力値をテーブルのセルに追加する
submit.addEventListener("click", () => {
  // データ格納用のオブジェクト
  const item = {}; // 入力値を一時保持するオブジェクト

  // 入力したデータを用意したオブジェクトに追加する
  if (todo.value != "") {
    item.todo = todo.value; //  todoプロパティに値を追加
  } else {
    item.todo = "ダミーデータ";
  }

  item.priority = priority.value; // priorityプロパティに値を追加

  if (date.value != "") {
    item.date = date.value;
  } else {
    const today = new Date().toLocaleDateString(); // 日付フォーマット
    item.date = today.replace(/\//g, "-");
  }

  // チェックボックスは初期値falseを設定
  item.done = false;

  getItem(item);

  // フォームをリセット
  todo.value = "";
  priority.value = "普";
  date.value = "";

  // 一時保持のオブジェクトを配列に追加する
  todoList.push(item);

  // ローカルストレージに記憶
  storage.store = JSON.stringify(todoList);
});

// 絞り込みイベント
filterButton.addEventListener("click", () => {
  // テーブルの値を削除
  clearTable();

  // 優先度が高の値を取得する
  const filterPriority = todoList.filter((item) => item.priority == "高");

  for (const prop of filterPriority) {
    getItem(prop);
  }
});

// TODO削除ボタン
deleteButton.addEventListener("click", () => {
  clearTable(); // TODOを削除
  // todoListからfalseの値を削除する
  todoList = todoList.filter((item) => item.done == false);
  // TODOテーブルに追加
  for (const prop of todoList) {
    getItem(prop);
  }
  // ストレージを更新
  storage.store = JSON.stringify(todoList);
});

// テーブルの値を削除(ヘッダーは残す)
const clearTable = () => {
  // tr要素を取得する
  const trList = Array.from(document.getElementsByTagName("tr"));

  // 配列から先頭tr要素を取り除く
  trList.shift();

  // tr要素を削除
  for (const tr of trList) {
    tr.remove();
  }
};

const checkBoxChange = (ev) => {
  // チェックボックスの親要素であるtr要素を取得する(テーブルの値から取得)
  const trlist = Array.from(document.getElementsByTagName("tr"));

  // チェックボックスの親tdの親trを取得する(テーブルからチェックしたレコードを取得)
  const currentTr = ev.currentTarget.parentElement.parentElement;
  console.log(currentTr);

  // 取得したレコードの何番目かを取得する。(配列に対してのインデックスのため-1する)
  const idx = trlist.indexOf(currentTr) - 1;
  console.log(idx);

  // チェックボックスの変化に合わせてtodoList配列を更新する
  todoList[idx].done = ev.currentTarget.checked;

  // ストレージを更新
  storage.store = JSON.stringify(todoList);
};
