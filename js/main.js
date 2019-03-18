enchant(); // おまじない

window.onload = function() {

    // 行の終わりには、;(セミコロン)をつけます。

    var game_ = new Game(320, 320); // ゲーム本体を準備すると同時に、表示される領域の大きさを設定しています。
    game_.fps = 24; // frames(フレーム) per(毎) second(秒): ゲームの進行スピードを設定しています。
    game_.preload('./img/chara1.png'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。

    game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します。

        var kuma = new Sprite(32, 32);  // クマというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
        kuma.image = game_.assets['./img/chara1.png']; // クマにあらかじめロードしておいた画像を適用します。
        kuma.x = 100; // クマの横位置を設定します。
        kuma.y = 120; // クマの縦位置を設定します。
        game_.rootScene.addChild(kuma); // ゲームのシーンにクマを表示させます。
        game_.rootScene.backgroundColor  = '#7ecef4'; // ゲームの動作部分の背景色を設定しています(16進数)。

        var speed = 1;// クマのスピードを表す変数(ハコ)を用意しておきます。

        // シーンに「毎フレーム実行イベント」を追加します。
        game_.rootScene.addEventListener(Event.ENTER_FRAME, function() {
            kuma.x += speed; // 毎フレーム、クマの座標を右に1pxずつずらす
        });

        // シーンに「タッチイベント」を追加します。
        game_.rootScene.addEventListener(Event.TOUCH_START, function(e) {

            // タッチイベントは、タッチした座標をe.x , e.y として取ることができます。
            // なお、eという変数の名前は自由に変更できます。 例：function(好きな名前) { 〜

            if (e.x > kuma.x) { // if (もしも) タッチした横位置がクマの横位置よりも右側(大きい)かったら
                speed = 1; // クマのスピードを1にする
            } else { // それ以外のときは
                speed = -1; // クマのスピードを-1にする
            }
        });

    }
    game_.start(); // ゲームをスタートさせます

    // このようにスラッシュ2つで書き始めた行は「コメント」扱いとなります。
    // プログラム中のメモとして活用しましょう。
    /* また、このようにスラッシュと米印を使うと、
        複数行に渡ってコメントを書くことができます。 */


};
