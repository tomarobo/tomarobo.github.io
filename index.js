//IE警告(IEはWebp表示不可)
if(window.navigator.userAgent.indexOf('Trident') != -1 || window.navigator.userAgent.indexOf('MSIE') != -1){ 
  if(confirm('Internet Explorerでの閲覧は推奨していません。\n Microsoft Edge または Google Chrome、FireFox、Operaなどのブラウザの利用を推奨しています。\n Google Chromeのダウンロードページに遷移しますか?')==true) {
        location.href="https://www.google.co.jp/chrome/";
    } else {
    }
}

/*初期読み込み時動作*/
//ロード完了時
window.onload = function(){
    window.setTimeout(function() {
        make_text_change();                 //「作る」のアニメーション                       //初期の高さで表示する必要があるものがある場合のために読み込む
    },100);                                 //100ms待機後{}内実行
}

//「作る」のアニメーション
function make_text_change(){
    var make = document.getElementById("make-text");
    make.innerHTML = "造る";
    window.setTimeout(function() {
        make.innerHTML = "作る";
        window.setTimeout(function() {
            make.innerHTML = "創る";
            document.getElementById("strong").animate([{opacity: '0'}, {opacity: '1'}], 800)
            document.getElementById("strong").style.opacity=1;
            window.setTimeout(function() {
                document.getElementById("robot").animate([{opacity: '0'}, {opacity: '1'}], 800)
                document.getElementById("robot").style.opacity=1;
            },400);
        },100);
    },100);
}


/*遅延読み込み*/
var Lazy = Boolean(false); //遅延読み込み false：未完了
function Lazy_loading(){
    if(Lazy == false){
        Lazy = true;
        /*Twitter*/
        var twitte_script = document.createElement('script');
        twitte_script.src = 'https://platform.twitter.com/widgets.js';
        document.getElementById('twitter-js').appendChild(twitte_script);

        /*Instagram*/
        var instagram = document.createElement('script');
        instagram.src = 'https://snapwidget.com/js/snapwidget.js';
        document.getElementById('instagram-iframe').appendChild(instagram);
        document.getElementById('instagram-iframe').innerHTML = '<script src="https://snapwidget.com/js/snapwidget.js"></script><iframe title="snapwidget Instagram" src="https://snapwidget.com/embed/937227" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>';

        /*Google Maps*/
        document.getElementById("google-map").innerHTML = document.getElementById("google-map").innerHTML + '<iframe width="100%" height="315" title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.1727181159928!2d141.49508712121485!3d42.62426748863378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7514173752d159%3A0xc62ed098a3f2a308!2z44CSMDU5LTEyNzUg5YyX5rW36YGT6Iur5bCP54mn5biC6Yym5bKhIOaWh-enkeezu-OCteODvOOCr-ODq-WupA!5e0!3m2!1sja!2sjp!4v1617391725063!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    }
}


/*遅延読み込み / アニメーション トリガー*/
window.addEventListener('scroll', function(){ //スクロールした場合に動作
    /*スクロール*/
    Lazy_loading(); //遅延読み込み
});
window.addEventListener('touchstart', function(){ //画面をタップした場合に動作
    /*画面タップ*/
    Lazy_loading(); //遅延読み込み
});


const scrollEvent = function () {
window.addEventListener("scroll", function () {
    let v = window.pageYOffset;
    let s = document.querySelectorAll(".scroll");
    let w = window.innerHeight;
    let value = 150;
    for (let a = 0; a < s.length; a++) {
        let t = s[a].getBoundingClientRect().top + v;
        if (v > t - w + value) {
            s[a].classList.add("scroll-fade");
        }
    }
});
};
scrollEvent();


/*YouTubeホップアップ*/
function youtube(iframe_url,sub_url){
    //YouTubeリンク押下時　ホップアップ表示
    var display = '<iframe width="100%" height="90%" src="'+iframe_url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    display += '<a class="youtube-info" href="'+sub_url+'" target="_blank" rel="noopener">閲覧できない場合はこちらからYouTubeを開いてください。<i class="fas fa-external-link-alt"></i></a>';
    document.getElementById("iframe-window-contents").innerHTML = display;

    document.getElementById("iframe-window").style.display = "block";
    document.getElementById("iframe-window").animate([{opacity: '0'}, {opacity: '1'}], 500);
    document.getElementById("iframe-window").style.opacity=1;
}

function close_window(){
    //ホップアップ終了
    document.getElementById("iframe-window").animate([{opacity: '1'}, {opacity: '0'}], 200);
    window.setTimeout(function() {
        document.getElementById("iframe-window").style.opacity=0;
        document.getElementById("iframe-window").style.display = "none";
    },200);
}