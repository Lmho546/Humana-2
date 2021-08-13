const backgroundVideoHome = document.getElementsByClassName ("backgroundVideoHome")[0];
const videoAllHome = document.getElementsByClassName ("videoAllHome")[0];
const videoControlsHome = document.getElementsByClassName ("videoHome")[0];
const videoHome = document.getElementsByClassName ("videoHome")[0].getElementsByTagName("source")[0];

const backgroundVideoConsultancies = document.getElementsByClassName ("backgroundVideoConsultancies")[0];
const videoAllConsultancies = document.getElementsByClassName ("videoAllConsultancies")[0];
const videoControlsConsultancies = document.getElementsByClassName ("videoConsultancies")[0];
const videoConsultancies = document.getElementsByClassName ("videoConsultancies")[0].getElementsByTagName("source")[0];

const buttonCloseHome = document.getElementById ("buttonCloseHome");
const buttonCloseConsultancies = document.getElementById ("buttonCloseConsultancies");

buttonCloseHome.onclick = CloseVideo;
buttonCloseConsultancies.onclick = CloseVideo;

function WatchVideo(videoNumber, pageNumber) {

    switch(videoNumber) {

        case "1":
            videoHome.setAttribute("src", "vid/vid-1.mp4");
            videoConsultancies.setAttribute("src", "vid/vid-1.mp4");
            break;

        case "2":
            videoConsultancies.setAttribute("src", "vid/vid-2.mp4");
            break;

        case "3":
            videoHome.setAttribute("src", "vid/vid-3.mp4");
            videoConsultancies.setAttribute("src", "vid/vid-3.mp4");
            break;
    
        case "4":
            videoConsultancies.setAttribute("src", "vid/vid-4.mp4");
            break;  

        case "5":
            videoConsultancies.setAttribute("src", "vid/vid-5.mp4");
            break;
    
        case "6":
            videoConsultancies.setAttribute("src", "vid/vid-6.mp4");
            break;
    
        case "7":
            videoConsultancies.setAttribute("src", "vid/vid-7.mp4");
            break;
        
        case "8":
            videoConsultancies.setAttribute("src", "vid/vid-8.mp4");
            break;  

        default:
            videoConsultancies.setAttribute("src", "vid/vid-1.mp4");
            break;       
    };

    if(pageNumber == "1") {
        videoControlsHome.load();
        backgroundVideoHome.classList.add("activeVideo");
        videoAllHome.classList.add("activeVideo");
    }

    if(pageNumber == "2") {
        videoControlsConsultancies.load();
        backgroundVideoConsultancies.classList.add("activeVideo");
        videoAllConsultancies.classList.add("activeVideo");
    }

};

function CloseVideo () {

    backgroundVideoHome.classList.remove("activeVideo");
    videoAllHome.classList.remove("activeVideo");
    videoControlsHome.pause();

    backgroundVideoConsultancies.classList.remove("activeVideo");
    videoAllConsultancies.classList.remove("activeVideo");
    videoControlsConsultancies.pause();

};