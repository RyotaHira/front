// 1, Vue.jsで扱うデータを用意する
const myData = {
  appName: "ニックネームメーカー", // アプリ名
  nickname: "ニックネーム", // ニックネーム
  names: ["スライム", "スライムベス", "メタルスライム", "はぐれメタル", "メタルキング"],
};

// 2, Vue.jsの準備をする
const app = Vue.createApp({
  data() {
    return myData; // Vue.jsで扱うデータを指定する
  },
  created() {
    console.log("created!!"); // Vue.jsが起動したときに実行される
    this.roulette();
  },
  methods: {
    roulette() {
      console.log("roulette!!");
      let rmd = Math.random() * this.names.length; // 範囲を決めた乱数はMath.random()に最大値を掛ける
      let index = Math.floor(rmd); // 整数に変換
      this.nickname = this.names[index]; // ニックネームを決定
    },
  },
});
app.mount("#app"); // 3, Vue.jsを起動する
