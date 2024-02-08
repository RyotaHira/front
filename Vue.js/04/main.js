// 1, Vue.jsで扱うデータを用意する
const myData = {
  appName: "My Clock", // アプリ名
  clock: "00:00:00", // 時計の文字列
};

// 2, Vue.jsの準備をする
const app = Vue.createApp({
  data() {
    return myData; // Vue.jsで扱うデータを指定する
  },
  created() {
    console.log("created!!"); // Vue.jsが起動したときに実行される
    this.tick(); // tick関数を実行
  },
  /**
   * 時計を取得するための関数を用意する
   * Vueで扱う関数はすべてmethodsの中に記載する
   */
  methods: {
    tick() {
      // 現在時刻を取得する関数
      console.log("tick!!");
      const date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();

      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;
      this.clock = `${h}:${m}:${s}`;

      setTimeout(() => {
        this.tick();
      }, 100);
    },
  },
});
app.mount("#app"); // 3, Vue.jsを起動する
