$(document).ready(function () {
  //1.Save クリックイベント
  $("#register").on("click", function () {
    // 通し番号の取得
    const key = localStorage.length + 1;
    // val(),text()で値を取得する
    const year = $("#year").val();
    const month_a = $("#month").val();
    const month = ("0" + month_a).slice(-2);
    const day_a = $("#day").val();
    const day = ("0" + day_a).slice(-2);
    const category = $("#category option:selected").text();
    const item = $("#item").val();
    const amountOfMoney = $("#amountOfMoney").val();
    const serialNumber = localStorage.length + 1;
    // 取得した値を配列に格納
    const value = [
      year,
      month,
      day,
      category,
      item,
      amountOfMoney,
      serialNumber,
    ];
    // 入力されたデータを取得して確認
    console.log(key);
    console.log(value);

    // データを保存する
    localStorage.setItem(key, JSON.stringify(value));
    tableMake();
  });

  //2.modifi クリックイベント
  $("#modifi").on("click", function () {
    const modifiNo = $("#delmod").val();
    const year = $("#year").val();
    const month_a = $("#month").val();
    const month = ("0" + month_a).slice(-2);
    const day_a = $("#day").val();
    const day = ("0" + day_a).slice(-2);
    const category = $("#category option:selected").text();
    const item = $("#item").val();
    const amountOfMoney = $("#amountOfMoney").val();
    const modValue = [year, month, day, category, item, amountOfMoney];
    localStorage.setItem(modifiNo, JSON.stringify(modValue));
    tableMake();
  });

  //3.allDelete クリックイベント
  $("#allDelete").on("click", function () {
    // 保存されたデータ（localStorage）を消す
    localStorage.clear();
    //id="list"を削除する
    $("#list").empty();
    location.reload();
  });

  //4.ページ読み込み：保存データ取得表示
  function tableMake() {
    //id="list"を削除する
    $("#list").empty();

    let sum = 0;

    for (let i = 1; i < localStorage.length + 1; i++) {
      // 保存されたデータのkeyを取得
      // const keyList = localStorage.key(i);
      // getItemのKeyを使って保存されたデータを全部取得
      if (JSON.parse(localStorage.getItem(i)) == null) {
        continue;
      }
      const valueList = JSON.parse(localStorage.getItem(i));
      console.log(valueList);
      const html = `<tr>
                        <td width="100">${i}</td>
                        <td width="100">${valueList[0]}/${valueList[1]}/${valueList[2]}</td>
                        <td width="200">${valueList[3]}</td>
                        <td width="220">${valueList[4]}</td>
                        <td width="130">${valueList[5]}</td>
                    </tr>`;
      $("#list").append(html);
      sum += Number(valueList[5]);
    }
    console.log(sum);
    // document.getElementById("sum").textContent = "合計" + sum + "円";
    $("#sum").html("合計：" + sum + " 円");
  }
  // ↓これは$(document).readyの閉じタグ
});
