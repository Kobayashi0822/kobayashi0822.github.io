$(function(){

    var areas = [
        {"code" : 1 , "name":"東京",   "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[13]},
        { "name":"", "color":"#fff", "hoverColor":"#e0b1fb", "prefectures":[1]},
        { "name":"",   "color":"#fff", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
        { "name":"",   "color":"#fff", "hoverColor":"#c1d8fd", "prefectures":[11,12,14]},
        {  "name":"", "color":"#fff", "hoverColor":"#c1d8fd", "prefectures":[8,9,10]},
        {  "name":"",   "color":"#fff", "hoverColor":"#93ecc5", "prefectures":[15,16,20]},
        {  "name":"",   "color":"#fff", "hoverColor":"#93ecc5", "prefectures":[17,18,19]},
        {  "name":"",   "color":"#fff", "hoverColor":"#aff9bf", "prefectures":[21]},
        { "name":"",   "color":"#fff", "hoverColor":"#aff9bf", "prefectures":[22,23,24]},
        {  "name":"",   "color":"#fff", "hoverColor":"#f6e8ac", "prefectures":[26,27,28,29]},
        { "name":"",   "color":"#fff", "hoverColor":"#f6e8ac", "prefectures":[25,30]},
        { "name":"",   "color":"#fff", "hoverColor":"#ffe5b0", "prefectures":[33,34]},
        {  "name":"",   "color":"#fff", "hoverColor":"#ffe5b0", "prefectures":[31,32,35]},
        {  "name":"",   "color":"#fff", "hoverColor":"#ffd7c5", "prefectures":[37]},
		{  "name":"",   "color":"#fff", "hoverColor":"#ffd7c5", "prefectures":[36,38,39]},
		{  "name":"",   "color":"#fff", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
		{ "name":"",   "color":"#fff", "hoverColor":"#fdcae9", "prefectures":[47]}
    ];


$("#tokyo_map").japanMap(
    {
        areas  : areas, //上で設定したエリアの情報
        selection : "prefecture", //選ぶことができる範囲(県→prefecture、エリア→area)
        borderLineWidth: 0.3, //線の幅
        drawsBoxLine : true, //canvasを線で囲む場合はtrue
        movesIslands : true, //南西諸島を左上に移動させるときはtrue、移動させないときはfalse
        showsAreaName : true, //エリア名を表示しない場合はfalse
        width: canvasWidth * 3, //canvasのwidth。別途heightも指定可。
        backgroundColor: "#ffffff", //canvasの背景色
        font : "MS Mincho", //地図に表示する文字のフォント
        fontSize : 14, //地図に表示する文字のサイズ
        fontColor : "areaColor", //地図に表示する文字の色。"areaColor"でエリアの色に合わせる
        fontShadowColor : "#101010", //地図に表示する文字の影の色
        areaNameType : "short", //地方名を省略
        prefectureNameType: "english",  //県名を英語表記
        onSelect:function (data) {
            // location.href = areaLinks[data.area.name];
            window.location.href = data.name + '.html';
            
        },
        onHover: function(data){
            // alert(data.name);
            $("#text").html(data.name);
            $("#text").css("background",data.area.color);
        }
    }
);
});