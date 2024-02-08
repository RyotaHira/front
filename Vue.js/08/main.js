// Vue.jsで使用するデータを用意する
const myData = {
  appName: "Horoscope Ranking", // アプリ名
  message: "今日の星座ランキング!!", // メッセージ
  horos: [
    // 星座データ
    { name: "牡羊座", path: "./images/01.png", rank: 0 },
    { name: "牡牛座", path: "./images/02.png", rank: 0 },
    { name: "双子座", path: "./images/03.png", rank: 0 },
    { name: "蟹座", path: "./images/04.png", rank: 0 },
    { name: "獅子座", path: "./images/05.png", rank: 0 },
    { name: "乙女座", path: "./images/06.png", rank: 0 },
    { name: "天秤座", path: "./images/07.png", rank: 0 },
    { name: "蠍座", path: "./images/08.png", rank: 0 },
    { name: "射手座", path: "./images/09.png", rank: 0 },
    { name: "山羊座", path: "./images/10.png", rank: 0 },
    { name: "水瓶座", path: "./images/11.png", rank: 0 },
    { name: "魚座", path: "./images/12.png", rank: 0 },
  ],
};

// Vue.jsの準備
const app = Vue.createApp({
  data() {
    return myData;
  },
  created() {
    console.log("created!!");
    this.shuffle();
  },
  // methodsとcomputedの違い
  // methodsはデータキャッシュをせず、実行されると都度再計算
  // computedはデータキャッシュをして、キャッシュから値を返す
  methods: {
    shuffle() {
      console.log("shuffle!!");

      // 1回目は1～11までのランダムな数字を取得
      // 取得した数字のオブジェクトをtmpに格納
      // 11番目のオブジェクトの値をランダムで取得した番号に格納

      for (let i = this.horos.length - 1; 0 <= i; i--) {
        for (let j = 0; j < i; j++) {
          let rdm = Math.floor(Math.random() * i); // ランダムな数字を取得する
          let tmp = this.horos[rdm]; // tmpにランダムで取得したオブジェクトを格納する
          this.horos[rdm] = this.horos[i]; // 1～12の星座をランダムで取得した場所に入れる
          this.horos[i] = tmp; // ランダムでヒットしたオブジェクトを1～12の星座に入れる
        }
      }
      // ランキング
      for (let i = 0; i < this.horos.length; i++) {
        this.horos[i].rank = i + 1;
      }
    },
  },
  computed: {
    // concat() 配列を完全コピーする
    // slice(開始位置,終了位置) 文字列や配列などからデータの一部分だけを取り出せるメソッド
    getBest3() {
      return this.horos.concat().slice(0, 3);
    },
    getWorst3() {
      return this.horos.concat().reverse().slice(0, 3);
    },
    getOthers() {
      return this.horos.concat().slice(3, 9);
    },
  },
});

app.mount("#app");
