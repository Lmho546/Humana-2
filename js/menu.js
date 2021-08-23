
//Variables

//Variable Title

const title = document.getElementsByTagName("title")[0];

//Variables Hamburger Menu

const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const toggleButtonViolet = document.getElementsByClassName('toggleButton')[1]
const navbarLinksViolet = document.getElementsByClassName('navbar-links')[1]

//Variables Pages

const home = document.getElementById("home");
const aboutUs = document.getElementById("aboutUs");
const consultancies = document.getElementById("consultancies");

//Variable Header

const header = document.getElementsByTagName("header")[0];
const headerViolet = document.getElementsByTagName("header")[1];

//Variables Navbar Buttons

const buttonHome = document.getElementById("buttonHome");
const buttonAboutUs = document.getElementById("buttonAboutUs");
const buttonConsultancies = document.getElementById("buttonConsultancies");
const buttonVideos = document.getElementById("buttonVideos");

const buttonHomeViolet = document.getElementById("buttonHomeViolet");
const buttonAboutUsViolet = document.getElementById("buttonAboutUsViolet");
const buttonConsultanciesViolet = document.getElementById("buttonConsultanciesViolet");
const buttonVideosViolet = document.getElementById ("buttonVideosViolet");

//Variables Selector

const homeSelector = document.getElementsByClassName("selector")[0];
const aboutUsSelector = document.getElementsByClassName("selector")[1];
const consultanciesSelector = document.getElementsByClassName("selector")[2];

const homeSelectorViolet = document.getElementsByClassName("selector")[3];
const aboutUsSelectorViolet = document.getElementsByClassName("selector")[4];
const consultanciesSelectorViolet = document.getElementsByClassName("selector")[5];

//Variable Page Logo

const logoPage = document.getElementsByTagName("link")[0];

//Variables Logo

const logoResponsive = document.getElementsByClassName("logo")[0];
const logo = document.getElementsByClassName("logo")[1];

//Use Functions

window.onload = function (){
  
  if(sessionStorage.Page == undefined){
    sessionStorage.Page = "1";
  }
  if(sessionStorage.Page == "1"){

    PageHome();
    
  }
  if(sessionStorage.Page == "2"){
    
    PageAboutUs();
    
  }
  if(sessionStorage.Page == "3"){

    if(sessionStorage.Videos == "1"){
      Videos();
      sessionStorage.removeItem("Videos");
    }
    else {
    PageConsultancies();
    }

  }
}

buttonHome.onclick = PageHome;
buttonAboutUs.onclick = PageAboutUs;
buttonConsultancies.onclick = PageConsultancies;

buttonHomeViolet.onclick = PageHome;
buttonAboutUsViolet.onclick = PageAboutUs;
buttonConsultanciesViolet.onclick = PageConsultancies;


//Functions

//New Window

buttonHome.onmousedown = function (click){
  if(click.button == 1){
    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "1";
    window.open("/");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
  }
};
buttonAboutUs.onmousedown = function (click){
  if(click.button == 1){
    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "2";
    window.open("conoceme");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
  }
}
buttonConsultancies.onmousedown = function (click){
  if(click.button == 1){

    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "3";
    window.open("asesorias");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
  }
};
buttonVideos.onmousedown = function (click){
  if(click.button == 1){

    sessionStorage.Videos = "1";
    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "3";
    window.open("asesorias");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
    if(sessionStorage.Videos !== undefined){
      sessionStorage.removeItem("Videos");
    }
  }
};


buttonHomeViolet.onmousedown = function (click){
  if(click.button == 1){
    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "1";
    window.open("/");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
  }
};
buttonAboutUsViolet.onmousedown = function (click){
  if(click.button == 1){
    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "2";
    window.open("conoceme");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
  }
};
buttonConsultanciesViolet.onmousedown = function (click){
  if(click.button == 1){

    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "3";
    window.open("asesorias");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
  }
};
buttonVideosViolet.onmousedown = function (click){
  if(click.button == 1){

    sessionStorage.Videos = "1";
    sessionStorage.PageBackUp = sessionStorage.Page;
    sessionStorage.Page = "3";
    window.open("asesorias");

    sessionStorage.Page = sessionStorage.PageBackUp;

    if(sessionStorage.PageBackUp !== undefined){
      sessionStorage.removeItem("PageBackUp");
    }
    if(sessionStorage.Videos !== undefined){
      sessionStorage.removeItem("Videos");
    }
  }
};

//Hamburger Menu

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbarLinksViolet.classList.toggle('active');
})

toggleButtonViolet.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbarLinksViolet.classList.toggle('active');
})

//Page Home

function PageHome() {

  //Animation Page

  home.classList.add("activePage");
  aboutUs.classList.add("hidePage");
  consultancies.classList.add("hidePage");
  
  home.classList.remove("hidePage");
  aboutUs.classList.remove("activePage");
  consultancies.classList.remove("activePage");

  //Header

  header.classList.add("activeHeader");
  headerViolet.classList.add("hideHeader");

  header.classList.remove("hideHeader");
  headerViolet.classList.remove("activeHeader");

  //NavLinks

  buttonHome.classList.add("pink");
  buttonAboutUs.classList.add("pink");
  buttonConsultancies.classList.add("pink");
  buttonVideos.classList.add("pink");

  buttonHome.classList.remove("orange");
  buttonAboutUs.classList.remove("orange");
  buttonConsultancies.classList.remove("orange");
  buttonVideos.classList.remove("orange");

  buttonHome.classList.remove("violet");
  buttonAboutUs.classList.remove("violet");
  buttonConsultancies.classList.remove("violet");
  buttonVideos.classList.remove("violet");

  buttonHome.classList.add("active");

  buttonAboutUs.classList.remove("active");
  buttonConsultancies.classList.remove("active");

  //Selector

  homeSelector.classList.add("activeSelector");

  homeSelectorViolet.classList.add("activeSelector");

  if (sessionStorage.Page == "2") {

    //Selectors

    aboutUsSelector.classList.add("hideSelector-H");
    consultanciesSelector.classList.add("hideSelector");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector");
    aboutUsSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector-H");
    consultanciesSelector.classList.remove("hideSelector-A");

    //Selectors Violet

    aboutUsSelectorViolet.classList.add("hideSelector-H");
    consultanciesSelectorViolet.classList.add("hideSelector");

    aboutUsSelectorViolet.classList.remove("activeSelector");
    aboutUsSelectorViolet.classList.remove("hideSelector");
    aboutUsSelectorViolet.classList.remove("hideSelector-C");

    consultanciesSelectorViolet.classList.remove("activeSelector");
    consultanciesSelectorViolet.classList.remove("hideSelector-H");
    consultanciesSelectorViolet.classList.remove("hideSelector-A");

  }

  if (sessionStorage.Page == "3") {

    //Selectors

    aboutUsSelector.classList.add("hideSelector");
    consultanciesSelector.classList.add("hideSelector-H");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector-H");
    aboutUsSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector");
    consultanciesSelector.classList.remove("hideSelector-A");

    //Selectors Violet

    aboutUsSelectorViolet.classList.add("hideSelector");
    consultanciesSelectorViolet.classList.add("hideSelector-H");

    aboutUsSelectorViolet.classList.remove("activeSelector");
    aboutUsSelectorViolet.classList.remove("hideSelector-H");
    aboutUsSelectorViolet.classList.remove("hideSelector-C");

    consultanciesSelectorViolet.classList.remove("activeSelector");
    consultanciesSelectorViolet.classList.remove("hideSelector");
    consultanciesSelectorViolet.classList.remove("hideSelector-A");
  
  }

  homeSelector.classList.remove("hideSelector");
  homeSelector.classList.remove("hideSelector-A");
  homeSelector.classList.remove("hideSelector-C");

  homeSelectorViolet.classList.remove("hideSelector");
  homeSelectorViolet.classList.remove("hideSelector-A");
  homeSelectorViolet.classList.remove("hideSelector-C");

  //Logo

  logoPage.href = "img/logo.png";

  logoResponsive.src = "img/logo.png";
  logo.src = "img/logo.png";

  //Title

  title.textContent = "Humana | Asesoría En Discapacidad Intelectual";

  //Sesion Storage

  sessionStorage.Page = "1";

  if(sessionStorage.PageBackUp !== undefined){
    sessionStorage.removeItem("PageBackUp");
  }

  //Location

  location.replace ("#");
  history.replaceState(null,null, "/");

};

//Page AboutUs

function PageAboutUs() {

  //Animation Page

  home.classList.add("hidePage");
  aboutUs.classList.add("activePage");
  consultancies.classList.add("hidePage");

  home.classList.remove("activePage");
  aboutUs.classList.remove("hidePage");
  consultancies.classList.remove("activePage");

  //Header

  header.classList.add("hideHeader");
  headerViolet.classList.add("activeHeader");

  header.classList.remove("activeHeader");
  headerViolet.classList.remove("hideHeader");

  //NavLinks

  buttonHome.classList.add("orange");
  buttonAboutUs.classList.add("orange");
  buttonConsultancies.classList.add("orange");
  buttonVideos.classList.add("orange");

  buttonHome.classList.remove("pink");
  buttonAboutUs.classList.remove("pink");
  buttonConsultancies.classList.remove("pink");
  buttonVideos.classList.remove("pink");

  buttonHome.classList.remove("violet");
  buttonAboutUs.classList.remove("violet");
  buttonConsultancies.classList.remove("violet");
  buttonVideos.classList.remove("violet");

  buttonAboutUs.classList.add("active");

  buttonHome.classList.remove("active");
  buttonConsultancies.classList.remove("active");

  //Selector
  
  aboutUsSelector.classList.add("activeSelector");

  aboutUsSelectorViolet.classList.add("activeSelector");

  if (sessionStorage.Page == "1") {

    //Selectors

    homeSelector.classList.add("hideSelector-A");
    consultanciesSelector.classList.add("hideSelector");

    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector");
    homeSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector-H");
    consultanciesSelector.classList.remove("hideSelector-A");

    //Selectors Violet

    homeSelectorViolet.classList.add("hideSelector-A");
    consultanciesSelectorViolet.classList.add("hideSelector");

    homeSelectorViolet.classList.remove("activeSelector");
    homeSelectorViolet.classList.remove("hideSelector");
    homeSelectorViolet.classList.remove("hideSelector-C");

    consultanciesSelectorViolet.classList.remove("activeSelector");
    consultanciesSelectorViolet.classList.remove("hideSelector-H");
    consultanciesSelectorViolet.classList.remove("hideSelector-A");

  }

  if (sessionStorage.Page == "3") {

    //Selectors

    homeSelector.classList.add("hideSelector");
    consultanciesSelector.classList.add("hideSelector-A");

    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector-A");
    homeSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector");
    consultanciesSelector.classList.remove("hideSelector-H");

    //Selectors Violet

    homeSelectorViolet.classList.add("hideSelector");
    consultanciesSelectorViolet.classList.add("hideSelector-A");

    homeSelectorViolet.classList.remove("activeSelector");
    homeSelectorViolet.classList.remove("hideSelector-A");
    homeSelectorViolet.classList.remove("hideSelector-C");

    consultanciesSelectorViolet.classList.remove("activeSelector");
    consultanciesSelectorViolet.classList.remove("hideSelector");
    consultanciesSelectorViolet.classList.remove("hideSelector-H");
  
  }

  aboutUsSelector.classList.remove("hideSelector");
  aboutUsSelector.classList.remove("hideSelector-H");
  aboutUsSelector.classList.remove("hideSelector-C");

  aboutUsSelectorViolet.classList.remove("hideSelector");
  aboutUsSelectorViolet.classList.remove("hideSelector-H");
  aboutUsSelectorViolet.classList.remove("hideSelector-C");

  //Logo

  logoResponsive.src = "img/logo-yellow.png";
  logo.src = "img/logo-yellow.png";

  //Title

  title.textContent = "Humana | Conóceme";

  //Sesion Storage

  sessionStorage.Page = "2";

  if(sessionStorage.PageBackUp !== undefined){
    sessionStorage.removeItem("PageBackUp");
  }

  //Location

  location.replace ("#");
  history.replaceState(null,null, "conoceme");

};

//Page Consultancies

function PageConsultancies() {

  //Animation Page

  home.classList.add("hidePage");
  aboutUs.classList.add("hidePage");
  consultancies.classList.add("activePage");
  
  home.classList.remove("activePage");
  aboutUs.classList.remove("activePage");
  consultancies.classList.remove("hidePage");

  //Header

  header.classList.add("activeHeader");
  headerViolet.classList.add("hideHeader");

  header.classList.remove("hideHeader");
  headerViolet.classList.remove("activeHeader");

  //NavLinks

  buttonHome.classList.add("violet");
  buttonAboutUs.classList.add("violet");
  buttonConsultancies.classList.add("violet");
  buttonVideos.classList.add("violet");

  buttonHome.classList.remove("pink");
  buttonAboutUs.classList.remove("pink");
  buttonConsultancies.classList.remove("pink");
  buttonVideos.classList.remove("pink");

  buttonHome.classList.remove("orange");
  buttonAboutUs.classList.remove("orange");
  buttonConsultancies.classList.remove("orange");
  buttonVideos.classList.remove("orange");

  buttonConsultancies.classList.add("active");

  buttonHome.classList.remove("active");
  buttonAboutUs.classList.remove("active");

  //Selector

  consultanciesSelector.classList.add("activeSelector");

  consultanciesSelectorViolet.classList.add("activeSelector");


  if (sessionStorage.Page == "1") {

    //Selectors

    homeSelector.classList.add("hideSelector-C");
    aboutUsSelector.classList.add("hideSelector");
    
    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector");
    homeSelector.classList.remove("hideSelector-A");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector-H");
    aboutUsSelector.classList.remove("hideSelector-C");

    //Selectors Violet

    homeSelectorViolet.classList.add("hideSelector-C");
    aboutUsSelectorViolet.classList.add("hideSelector");
    
    homeSelectorViolet.classList.remove("activeSelector");
    homeSelectorViolet.classList.remove("hideSelector");
    homeSelectorViolet.classList.remove("hideSelector-A");

    aboutUsSelectorViolet.classList.remove("activeSelector");
    aboutUsSelectorViolet.classList.remove("hideSelector-H");
    aboutUsSelectorViolet.classList.remove("hideSelector-C");

  }

  if (sessionStorage.Page == "2") {

    //Selectors

    homeSelector.classList.add("hideSelector");
    aboutUsSelector.classList.add("hideSelector-C");
    
    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector-A");
    homeSelector.classList.remove("hideSelector-C");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector");
    aboutUsSelector.classList.remove("hideSelector-H");

    //Selectors Violet

    homeSelectorViolet.classList.add("hideSelector");
    aboutUsSelectorViolet.classList.add("hideSelector-C");
    
    homeSelectorViolet.classList.remove("activeSelector");
    homeSelectorViolet.classList.remove("hideSelector-A");
    homeSelectorViolet.classList.remove("hideSelector-C");

    aboutUsSelectorViolet.classList.remove("activeSelector");
    aboutUsSelectorViolet.classList.remove("hideSelector");
    aboutUsSelectorViolet.classList.remove("hideSelector-H");
  
  }

  consultanciesSelector.classList.remove("hideSelector");
  consultanciesSelector.classList.remove("hideSelector-A");
  consultanciesSelector.classList.remove("hideSelector-H");

  consultanciesSelectorViolet.classList.remove("hideSelector");
  consultanciesSelectorViolet.classList.remove("hideSelector-A");
  consultanciesSelectorViolet.classList.remove("hideSelector-H");

  //Logo

  logoResponsive.src = "img/logo-light-violet.png";
  logo.src = "img/logo-light-violet.png";

  //Title

  title.textContent = "Humana | Asesorías";

  //Sesion Storage

  sessionStorage.Page = "3";

  if(sessionStorage.PageBackUp !== undefined){
    sessionStorage.removeItem("PageBackUp");
  }
  
  //Location

  location.replace ("#");
  history.replaceState(null,null, "asesorias");

};