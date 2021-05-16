window.onload = function(){ 
    window.setTimeout(function() {
        document.getElementById("loader").animate([{opacity: '1'}, {opacity: '0'}], 500)
        
        window.setTimeout(function() {
            make_text_change(1);
            scroll();
        },400);
        window.setTimeout(function() {
            document.getElementById("loader").style.opacity=0;
            document.getElementById("loader").style.display="none";
        },500);
    },100);
}

function make_text_change(type){
    var make = document.getElementById("make-text");
    text = "つくる";
    if(type == 1){
        text = "造る"
        make.innerHTML = text;
        window.setTimeout(function() {
            make_text_change(2);
        },100);
    }else if(type == 2){
        text = "作る";
        make.innerHTML = text;
        window.setTimeout(function() {
            make_text_change(3);
        },100);
    }else if(type == 3){
        text = "創る";
        make.innerHTML = text;
        window.setTimeout(function() {
            document.getElementById("strong").animate([{opacity: '0'}, {opacity: '1'}], 1000)
            document.getElementById("strong").style.opacity=1;
            window.setTimeout(function() {
                document.getElementById("robot").animate([{opacity: '0'}, {opacity: '1'}], 1000)
                document.getElementById("robot").style.opacity=1;
            },1000);
        },50);

    }else{
        make.innerHTML = text;
        window.setTimeout(function() {
            make_text_change(1);
        },100);
    }
}

var Lazy = Boolean(false);
function Lazy_loading(){
    if(Lazy == false){
        Lazy = true;
        var twitte_script = document.createElement('script');
        twitte_script.src = 'https://platform.twitter.com/widgets.js';
        document.getElementById('twitter-js').appendChild(twitte_script);

        document.getElementById("google-map").innerHTML = '<iframe width="100%" height="315" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.1727181159928!2d141.49508712121485!3d42.62426748863378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f7514173752d159%3A0xc62ed098a3f2a308!2z44CSMDU5LTEyNzUg5YyX5rW36YGT6Iur5bCP54mn5biC6Yym5bKhIOaWh-enkeezu-OCteODvOOCr-ODq-WupA!5e0!3m2!1sja!2sjp!4v1617391725063!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    }
}

window.addEventListener('scroll', function(){
    Lazy_loading();
    scroll();
});
window.addEventListener('touchstart', function(){
    Lazy_loading();
});

var notification_state = Boolean(false);
var make1 = Boolean(false);
var make2 = Boolean(false);
var make3 = Boolean(false);
var make4 = Boolean(false);
var make5 = Boolean(false);
var place = Boolean(false);
var link = Boolean(false);

function scroll(){
    let browser = window.innerHeight;
    var scroll = window.pageYOffset;
    var scroll_under = browser + scroll;

    if((notification_state == false) && (scroll_under > (window.pageYOffset +document.getElementById("notification").getBoundingClientRect().top))){
        notification_state = true;
        window.setTimeout(function() {
            document.getElementById("notification").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("notification").style.opacity=1;
        },500);
    }
    if((make1 == false) && (scroll_under > (window.pageYOffset + document.getElementById("make1").getBoundingClientRect().top))){
        //make1
        make1 = true;
        window.setTimeout(function() {
            document.getElementById("make1").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("make1").style.left=0;
            document.getElementById("make1").style.opacity=1;
        },200);
    }
    if((make2 == false) && (scroll_under > (window.pageYOffset + document.getElementById("make2").getBoundingClientRect().top))){
        //make2
        make2 = true;
        window.setTimeout(function() {
            document.getElementById("make2").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("make2").style.left=0;
            document.getElementById("make2").style.opacity=1;
        },200);
    }
    if((make3 == false) && (scroll_under > (window.pageYOffset + document.getElementById("make3").getBoundingClientRect().top))){
        //make3
        make3 = true;
        window.setTimeout(function() {
            document.getElementById("make3").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("make3").style.left=0;
            document.getElementById("make3").style.opacity=1;
        },200);
    }
    if((make4 == false) && (scroll_under > (window.pageYOffset + document.getElementById("make4").getBoundingClientRect().top))){
        //make4
        make4 = true;
        window.setTimeout(function() {
            document.getElementById("make4").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("make4").style.left=0;
            document.getElementById("make4").style.opacity=1;
        },200);
    }
    if((make5 == false) && (scroll_under > (window.pageYOffset + document.getElementById("make5").getBoundingClientRect().top))){
        //make5
        make5 = true;
        window.setTimeout(function() {
            document.getElementById("make5").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("make5").style.left=0;
            document.getElementById("make5").style.opacity=1;
        },200);
    }
    if((place == false) && (scroll_under > (window.pageYOffset + document.getElementById("place").getBoundingClientRect().top))){
        //place
        place = true;
        window.setTimeout(function() {
            document.getElementById("place").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("place").style.opacity=1;
        },300);
    }
    if((link == false) && (scroll_under > (window.pageYOffset + document.getElementById("link").getBoundingClientRect().top))){
        //link
        link = true;
        window.setTimeout(function() {
            document.getElementById("link").animate([{opacity: '0'}, {opacity: '1'}], 500);
            document.getElementById("link").style.opacity=1;
        },300);
    }
}

function youtube(iframe_url,sub_url){
    var display = '<iframe width="100%" height="90%" src="'+iframe_url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    display += '<a class="youtube-info" href="'+sub_url+'" target="_blank" rel="noopener">閲覧できない場合はこちらからYouTubeを開いてください。<i class="fas fa-external-link-alt"></i></a>';
    document.getElementById("iframe-window-contents").innerHTML = display;

    document.getElementById("iframe-window").style.display = "block";
    document.getElementById("iframe-window").animate([{opacity: '0'}, {opacity: '1'}], 500);
    document.getElementById("iframe-window").style.opacity=1;
}

function close_window(){
    document.getElementById("iframe-window").animate([{opacity: '1'}, {opacity: '0'}], 200);
    window.setTimeout(function() {
        document.getElementById("iframe-window").style.opacity=0;
        document.getElementById("iframe-window").style.display = "none";
    },200);
}