window.onload = function () {
    document.getElementById("loading_second").style.display = 'block';
    window.setTimeout(function() {
        document.getElementById("loading").style.display = 'none';
        window.setTimeout(function() {
            first_view(1)
        },20);
    },1000);
    
};

function first_view(cnt){
    switch(cnt){
        case 1: document.getElementById("main_area_img-1").style.display = 'none';
                document.getElementById("main_area_img-2").style.display = 'block';
                window.setTimeout(function() {
                    first_view(2);
                },80);
                return;
        case 2: document.getElementById("main_area_img-2").style.display = 'none';
                document.getElementById("main_area_img-3").style.display = 'block';
                document.getElementById("main_area_text-1").style.color = '#01FDF6';
                window.setTimeout(function() {
                    first_view(3);
                },80);
                return;
        case 3: document.getElementById("main_area_img-3").style.display = 'none';
                document.getElementById("main_area_img-4").style.display = 'block';
                document.getElementById("main_area_text-1").style.color = '#01FDF6';
                window.setTimeout(function() {
                    first_view(4);
                },100);
                return;
        case 4: document.getElementById("main_area_img-4").style.display = 'none';
                document.getElementById("main_area_img-5").style.display = 'block';
                document.getElementById("main_area_text-1").style.color = '#CBBAED';
                document.getElementById("main_area_text-2").style.opacity = '1';
                document.getElementById("main_area_text-3").style.opacity = '1';
                window.setTimeout(function() {
                    first_view(5);
                },100);
                return;
        case 5: document.getElementById("main_area_img-5").style.display = 'none';
                document.getElementById("main_area_img-6").style.display = 'block';
                document.getElementById("main_area_text-1").style.color = '#E9DF00';
                window.setTimeout(function() {
                    first_view(6);
                },150);
                return;
        case 6: document.getElementById("main_area_img-6").style.display = 'none';
                document.getElementById("main_area_img-7").style.display = 'block';
                document.getElementById("main_area_text-1").style.color = '#03FCBA';
                window.setTimeout(function() {
                    first_view(7);
                },150);
                return;
        case 7: document.getElementById("main_area_img_id").style.display = 'none';
                document.getElementById("main_area_text-1").style.color = 'white';
    }
}