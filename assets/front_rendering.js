
jQuery(function ($) {
  /*===========================================================*/
  /*  パーティクルアニメーション
  /*===========================================================*/

  //particlesId要素があった時
  if ($('#particlesId').get(0)) {
    let particleElement = $('#particlesId');
    let options = particleElement.data('particle_option');
    //自動変換されていない時は手動で変換
    if (typeof options === "string") {
      options = JSON.parse(options);
    }

    //パーティクルの実行
    particlesJS('particlesId', options);
  }

  /*===========================================================*/
  /*  波打つ
  /*===========================================================*/

  let unit = 100,
    canvas, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

  /**
   * Init function.
   * 
   * Initialize variables and begin the animation.
   */
  function itmar_animeblock_wave(dom_canvas, options) {
    const {
      first_Color,
      second_Color,
      wave_height,

    } = options;

    info.seconds = 0;
    info.t = 0;
    colorList = [];
    // canvas1個めの色指定
    canvas = dom_canvas;
    colorList = [first_Color, second_Color];//重ねる波の色設定
    // 各キャンバスの初期化
    canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = wave_height;//波の高さ
    canvas.contextCache = canvas.getContext("2d");
    // 共通の更新処理呼び出し
    itmar_animeblock_wave_update(options);
  }

  function itmar_animeblock_wave_update(options) {
    draw(canvas, colorList, options);
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds * Math.PI;
    // 自身の再起呼び出し
    setTimeout(() => itmar_animeblock_wave_update(options), 35);
  }

  /**
   * Draw animation function.
   * 
   * This function draws one frame of the animation, waits 20ms, and then calls
   * itself again.
   */
  function draw(canvas, color, options) {
    const {
      is_mulutiwave,
      first_wave_size,
      second_wave_size

    } = options;
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波の重なりを描画 drawWave(canvas, color[数字], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.5, first_wave_size, 0);//0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか
    if (is_mulutiwave) {
      drawWave(canvas, color[1], 0.4, second_wave_size, 250);
    }

    //    drawWave(canvas, color[2], 0.2, 1.6, 100);
  }

  /**
  * 波を描画
  * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
  */
  function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
  }

  /**
   * Function to draw sine
   * 
   * The sine curve is drawn in 10px segments starting at the origin. 
   * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
   */
  function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }


  //waveCanvas要素があった時
  if ($('#waveCanvas').get(0)) {
    let waveCanvas = $('#waveCanvas');
    let options = waveCanvas.data('wave_option');
    //自動変換されていない時は手動で変換
    if (typeof options === "string") {
      options = JSON.parse(options);
    }

    itmar_animeblock_wave($('#waveCanvas').get(0), options)
  }
});