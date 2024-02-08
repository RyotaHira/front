// Vue.jsで扱うデータ
const myData = {
  appName: "星座図鑑",
  message: "ボタンから詳細を確認することができます",
  monsters: [], // 星座図鑑を格納する配列
  selected: null, // 選択された星座
};

// Vue.jsの準備をする
const app = Vue.createApp({
  data() {
    return myData;
  },
  created() {
    console.log("created!!");
    this.loadJSON();
  },
  methods: {
    loadJSON() {
      const option = { responseType: "blob" };
      axios
        .get("data.json", option)
        // ロード成功
        .then((res) => {
          // res.data.text()はバイナリデータをテキストに変換する処理
          res.data.text().then((str) => {
            const json = JSON.parse(str); // 文字列をJSON形式に変換
            this.monsters = json.items; // monsters配列に格納
            //console.log(this.monsters);
          });
        })
        // ロード失敗
        .catch((err) => {
          console.log(err);
        });
    },
    actionSelect(id) {
      this.selected = this.monsters.find((monster) => monster.id == id); // monsters配列のidと画面から選択したidが正しいオブジェクトをselectedに取得する
      console.log(this.selected);
    },
    actionBack() {
      this.selected = null;
    },
  },
});

app.mount("#app"); // Vue.jsを起動する
