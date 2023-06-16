
jQuery(function ($) {

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
});