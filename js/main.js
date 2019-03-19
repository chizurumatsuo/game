﻿enchant(); // おまじない
enchant.Sound.enabledInMobileSafari = true;
window.onload = function() {

    // 行の終わりには、;(セミコロン)をつけます。

	var game_ = new Game(900,900); // ゲーム本体を準備すると同時に、表示される領域の大きさを設定しています。
	game_.fps = 60; // frames(フレーム) per(毎) second(秒): ゲームの進行スピードを設定しています。
	game_.preload('./img/wait.png','./img/a.png','./img/kari.png','./sound/coin03.wav','./sound/coin06.wav','./sound/coin04.wav'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。

	game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します。
		var kuma = new Sprite(141, 290);  // クマというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
		var kari = new Sprite(8, 8);  // クマというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
		var lr=0;
		var myLabel = new Label();
		myLabel.font = '14px "Arial"';
		myLabel.x = 32;	// X座標
		myLabel.y = 32;	// Y座標
		var posx;
		var posy;
		kuma.image = game_.assets['./img/wait.png']; // クマにあらかじめロードしておいた画像を適用します。
		kuma.x = 100; // クマの横位置を設定します。
		kuma.y = 120; // クマの縦位置を設定します。
		kari.image = game_.assets['./img/kari.png']; // クマにあらかじめロードしておいた画像を適用します。
		kari.x = 64; // クマの横位置を設定します。
		kari.y = 64; // クマの縦位置を設定します。
		kari.scaleX = 8;
		kari.scaleY = 8;
		game_.rootScene.addChild(myLabel);
		game_.rootScene.addChild(kuma); // ゲームのシーンにクマを表示させます。
		game_.rootScene.addChild(kari); // ゲームのシーンにクマを表示させます。
		game_.rootScene.backgroundColor  = '#7ecef4'; // ゲームの動作部分の背景色を設定しています(16進数)。
		var speed = 1;// クマのスピードを表す変数(ハコ)を用意しておきます。

		// シーンに「毎フレーム実行イベント」を追加します。
		game_.rootScene.addEventListener(Event.ENTER_FRAME, function() {

		kuma.x += speed; // 毎フレーム、クマの座標を右に1pxずつずらす
	});

        // シーンに「タッチイベント」を追加します。
        game_.rootScene.addEventListener(Event.TOUCH_START, function(e) {
		posx=e.x;
		if (e.x > kuma.x) { // if (もしも) タッチした横位置がクマの横位置よりも右側(大きい)かったら
			var sound = game_.assets['./sound/coin03.wav'].clone();
			sound.play();
			speed = 1; // クマのスピードを1にする
		} else { // それ以外のときは
			var sound = game_.assets['./sound/coin03.wav'].clone();
			sound.play();
			speed = -1; // クマのスピードを-1にする
		}
	});
        game_.rootScene.addEventListener(Event.TOUCH_MOVE, function(e) {
		if (e.x > posx && lr!='R') {
			posx=e.x;
			lr='R';
			myLabel.text = lr;
			var sounda = game_.assets['./sound/coin06.wav'].clone();
			sounda.play();
		} else if(e.x < posx && lr!='L'){ 
			posx=e.x;
			lr='L';
			myLabel.text = lr;
			var soundb = game_.assets['./sound/coin04.wav'].clone();
			soundb.play();

		}
	});
        game_.rootScene.addEventListener(Event.TOUCH_END, function(e) {
		posx=e.x;
		lr='';
		myLabel.text = lr;
	});

}
game_.start(); // ゲームをスタートさせます
};
