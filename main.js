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

window.addEventListener('scroll', function(){
    scroll();
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