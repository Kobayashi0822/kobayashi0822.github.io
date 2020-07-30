$(function(){
	//地域を設定
	//{"code":[地域のコード], "name": [地域の名前], "color":[地域につける色], "hoverColor":[地域をマウスでホバーしたときの色], "prefectures":[地域に含まれる都道府県のコード]}
	var areas = [
		{"code": 1 , "name":"北海道地方", "color":"#aaa", "hoverColor":"#e0b1fb", "prefectures":[1]},
        {"code": 2 , "name":"東北地方",   "color":"#aaa", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
        {"code": 3 , "name":"関東地方",   "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[12,13,14]},
        {"code": 3 , "name":"", "color":"#aaa", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11]},
        {"code": 4 , "name":"北陸・甲信越地方",   "color":"#aaa", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
        {"code": 4 , "name":"東海地方",   "color":"#aaa", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
        {"code": 6 , "name":"近畿地方",   "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[26,27]},
        {"code": 6 , "name":"",   "color":"#aaa", "hoverColor":"#f6e8ac", "prefectures":[25,30,28,29]},
        {"code": 7 , "name":"中国地方",   "color":"#aaa", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
		{"code": 8 , "name":"四国",   "color":"#aaa", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
		{"code": 9 , "name":"九州地方",   "color":"#aaa", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
		{"code":10 , "name":"沖縄地方",   "color":"#aaa", "hoverColor":"#fdcae9", "prefectures":[47]}
    ];
    
   

	$("#map").japanMap(
		{
			areas  : areas, //上で設定したエリアの情報
			selection : "prefecture", //選ぶことができる範囲(県→prefecture、エリア→area)
			borderLineWidth: 0.3, //線の幅
			drawsBoxLine : false, //canvasを線で囲む場合はtrue
			movesIslands : true, //南西諸島を左上に移動させるときはtrue、移動させないときはfalse
			showsAreaName : true, //エリア名を表示しない場合はfalse
			width: 1000, //canvasのwidth。別途heightも指定可。
			backgroundColor: "#ffffff", //canvasの背景色
			font : "MS Mincho", //地図に表示する文字のフォント
			fontSize : 14, //地図に表示する文字のサイズ
			fontColor : "areaColor", //地図に表示する文字の色。"areaColor"でエリアの色に合わせる
            fontShadowColor : "#101010", //地図に表示する文字の影の色
            areaNameType : "short", //地方名を省略
            prefectureNameType: "english",  //県名を英語表記
            onSelect:function (data) {
                // location.href = areaLinks[data.area.name];
                window.location.href = 'https://kobayashi0822.github.io/' + data.name + '.html';
                
            },
            onHover: function(data){
                // alert(data.name);
                $("#text").html(data.name);
                $("#text").css("background",data.area.color);
            }
		}
	);
});
