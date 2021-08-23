const conoceButtonAboutUs = document.getElementById ("conoceButtonAboutUs");
const conoceButtonConsultancies = document.getElementById ("conoceButtonConsultancies");

let windows = window.innerWidth;

buttonVideos.onclick = Videos;
buttonVideosViolet.onclick = Videos;

conoceButtonAboutUs.onclick = function () {

    windows = window.innerWidth;

    switch (true) {

        case window.innerWidth > 1500:
            window.scroll (0,850);
            break;

        case ((windows <= 1500) && (windows > 1440)):
            window.scroll (0,2890);
            break;

        case ((windows <= 1440) && (windows > 1157)):
            window.scroll (0,1060);
            break;

        case ((windows <= 1157) && (windows > 980)):
            window.scroll (0,1100);
            break;

        case ((windows <= 980) && (windows > 930)):
            window.scroll (0,1120);
            break;

        case ((windows <= 930) && (windows > 768)):
            window.scroll (0,1160);
            break;

        case (windows <= 768):
            window.scroll (0,1095);
            break;
    } 
};

conoceButtonConsultancies.onclick = function () {

    windows = window.innerWidth;

    switch (true){
        case window.innerWidth > 1440:
            window.scroll (0,1000);
            break;

        case ((windows <= 1440) && (windows > 979)):
            window.scroll (0,580);
            break;

        case ((windows <= 979) && (windows > 490)):
            window.scroll (0,1500);
            break;

        case (windows <= 490):
            window.scroll (0,1480);
            break;
    }
    
};

function Videos() {

    PageConsultancies();

    windows = window.innerWidth;

    switch (true) {

        case window.innerWidth > 1700:
            window.scroll (0,2910);
            break;
            
        case ((windows <= 1700) && (windows > 1600)):
            window.scroll (0,2890);
            break;
            
        case ((windows <= 1600) && (windows > 1500)):
            window.scroll (0,2860);
            break;

        case (windows <= 1500) && (windows > 1440):
            window.scroll (0,2820);
            break;

        default:
            location.replace ("#sectionVideos");
            history.replaceState (null,null, "asesorias");
            break;
    }
};
