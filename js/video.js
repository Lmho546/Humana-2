const backgroundVideo = document.getElementsByClassName ("backgroundVideo")[0];
const videoAll = document.getElementsByClassName ("videoAll")[0];
const videoControls = document.getElementsByClassName ("video")[0];
const video = document.getElementsByClassName ("video")[0].getElementsByTagName("source")[0];

const buttonClose = document.getElementById ("buttonClose");

//const videoList = document.getElementById ("videos").getElementsByClassName ("item");

//videoList[0].addEventListener('click', () => {WatchVideo("2");});

buttonClose.onclick = CloseVideo;

function WatchVideo(videoNumber) {

    switch(videoNumber) {

        case "1":
            video.setAttribute("src", "vid/vid-1.mp4");
            break;

        case "2":
            video.setAttribute("src", "vid/vid-2.mp4");
            break;

        case "3":
            video.setAttribute("src", "vid/vid-3.mp4");
            break;
    
        case "4":
            video.setAttribute("src", "vid/vid-4.mp4");
            break;  

        case "5":
            video.setAttribute("src", "vid/vid-5.mp4");
            break;
    
        case "6":
            video.setAttribute("src", "vid/vid-6.mp4");
            break;
    
        case "7":
            video.setAttribute("src", "vid/vid-7.mp4");
            break;
        
        case "8":
            video.setAttribute("src", "vid/vid-8.mp4");
            break;  

        default:
            video.setAttribute("src", "vid/vid-1.mp4");
            break;       
    };
    
    videoControls.load();
    backgroundVideo.classList.add("activeVideo");
    videoAll.classList.add("activeVideo");
    
};

function CloseVideo () {

    backgroundVideo.classList.remove("activeVideo");
    videoAll.classList.remove("activeVideo");
    videoControls.pause();

};