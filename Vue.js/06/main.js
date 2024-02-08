// 1, Vue.jsで扱うデータを用意する
const myData = {
  appName: "BMI Calculator", // アプリ名
  message: "身長と体重を入力してください", // メッセージ
  cm: 160, // 身長
  kg: 60, // 体重
  bmi: 0, // BMI値
};

// 2, Vue.jsの準備をする
const app = Vue.createApp({
  data() {
    return myData; // Vue.jsで扱うデータを指定する
  },
  created() {
    console.log("created!!"); // Vue.jsが起動したときに実行される
    this.calc();
  },
  methods: {
    calc() {
      this.bmi = this.kg / (this.cm * 0.01) ** 2;
    },
  },
});
app.mount("#app"); // 3, Vue.jsを起動する
