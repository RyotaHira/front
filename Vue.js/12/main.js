// TODOリスト
const todos = [
  {
    id: 1, // ID
    done: false, // 完了:true/未了:false
    title: "昼寝をする", // タイトル
  },
  {
    id: 2,
    done: false,
    title: "勉強をする",
  },
  {
    id: 3,
    done: true,
    title: "ゲームをする",
  },
  {
    id: 4,
    done: true,
    title: "料理をする",
  },
];

// MyData
const myData = {
  appName: "TODO Application",
  todos: todos, // TODOリスト
  done: false, // 選択中のフラグ
  edit: 0, // 編集中のID
  title: "", // 追加する項目
};

const app = Vue.createApp({
  data() {
    return myData;
  },
  created() {
    this.loadTodos();
  },
  methods: {
    // 表示切替
    switchTodo() {
      console.log("switchTodo!!");
      this.done = !this.done; // true/falseの切り替え
    },
    // TODOリストの要素を変更する
    changeTodo(id) {
      console.log("changeTodo:" + id);
      // 各要素をforeachで回し、idに該当するdoneを切り替える
      this.todos.forEach((element) => {
        if (element.id == id) {
          element.done = !element.done;
        }
        this.saveTodos(); // 保存
      });
    },
    // TODOリストの要素を削除する
    deleteTodo(id) {
      console.log("deleteTodo:" + id);
      this.todos = this.todos.filter((element) => {
        return element.id != id; // idと一致しないTODOリスト(配列)を返す
      });
      this.saveTodos(); // 保存
    },
    // TODOリストの要素を編集する
    editTodo(id) {
      console.log("editTodo:" + id);
      this.edit = id; // 編集中のID
    },
    // TODOリストに追加する
    pushTodo() {
      console.log("pushTodo:" + this.title);
      // タイトルが未入力の場合
      if (this.title.length <= 0) {
        this.title = "-";
      }
      this.done = false; // doneをfalseに戻しておく
      const newTodo = {
        id: Number(Date.now()).toString(), // 日付のタイムスタンプをID
        done: false, // デフォルトはfalse
        title: this.title, // 入力された値
      };
      this.todos.push(newTodo);
      this.saveTodos(); // 保存
    },
    // 読込用
    loadTodos() {
      console.log("loadTotos!!");
      const json = localStorage.getItem("todo"); // ブラウザ(ローカルストレージ)に保存されているデータを読み込んでいる
      if (json != null) this.todos = JSON.parse(json); // データ変換
    },
    // 保存用
    saveTodos() {
      console.log("savsTotos!!");
      const json = JSON.stringify(this.todos); // データ変換
      localStorage.setItem("todo", json);
    },
  },
  computed: {
    getTools() {
      // TODOリストからフラグが一致するデータを取得する
      // todos:TODOリスト done：現在のフラグ item：TODOリスト(1件)
      const arr = this.todos.filter((item) => {
        return this.done == item.done; // 現在のフラグとTODOリストの中身のフラグを比較
      });
      arr.sort((a, b) => {
        return b.id - a.id; // 降順
      });
      return arr;
    },
  },
});
app.mount("#app");
