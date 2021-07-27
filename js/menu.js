
//Variables

//Variables Hamburger Menu

const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//Variables Pages

const home = document.getElementById("home");
const aboutUs = document.getElementById("aboutUs");
const consultancies = document.getElementById("consultancies");

//Variable Header

const header = document.getElementsByTagName("header")[0];

//Variable NavBar Responsive

const navBarResponsive = document.getElementsByClassName("navbar-links")[0];

//Variables Navbar Buttons

const buttonHome = document.getElementById("buttonHome");
const buttonAboutUs = document.getElementById("buttonAboutUs");
const buttonConsultancies = document.getElementById("buttonConsultancies");

//Variables Selector

const homeSelector = document.getElementsByClassName("selector")[0];
const aboutUsSelector = document.getElementsByClassName("selector")[1];
const consultanciesSelector = document.getElementsByClassName("selector")[2];

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
    header.scrollTop = 0;
  }
  if(sessionStorage.Page == "2"){
    PageAboutUs();
    header.scrollTop = 0;
    window.location.href = "#";
  }
  if(sessionStorage.Page == "3"){
    PageConsultancies();
    header.scrollTop = 0;
    window.location.href = "#";
  }
}

buttonHome.onclick = PageHome;
buttonAboutUs.onclick = PageAboutUs;
buttonConsultancies.onclick = PageConsultancies;

//Functions

//Hamburger Menu

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
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

  header.classList.add("backgroundWhite");

  header.classList.remove("backgroundViolet");

  //NavBar Responsive

  navBarResponsive.classList.add("backgroundWhite");

  navBarResponsive.classList.remove("backgroundViolet");

  //NavLinks

  buttonHome.classList.add("pink");
  buttonAboutUs.classList.add("pink");
  buttonConsultancies.classList.add("pink");

  buttonHome.classList.remove("orange");
  buttonAboutUs.classList.remove("orange");
  buttonConsultancies.classList.remove("orange");

  buttonHome.classList.remove("violet");
  buttonAboutUs.classList.remove("violet");
  buttonConsultancies.classList.remove("violet");

  buttonHome.classList.add("active");

  buttonAboutUs.classList.remove("active");
  buttonConsultancies.classList.remove("active");

  //Selector

  homeSelector.classList.add("activeSelector");

  if (sessionStorage.Page == "2") {

    aboutUsSelector.classList.add("hideSelector-H");
    consultanciesSelector.classList.add("hideSelector");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector");
    aboutUsSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector-H");
    consultanciesSelector.classList.remove("hideSelector-A");

  }

  if (sessionStorage.Page == "3") {

    aboutUsSelector.classList.add("hideSelector");
    consultanciesSelector.classList.add("hideSelector-H");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector-H");
    aboutUsSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector");
    consultanciesSelector.classList.remove("hideSelector-A");
  
  }

  homeSelector.classList.remove("hideSelector");
  homeSelector.classList.remove("hideSelector-A");
  homeSelector.classList.remove("hideSelector-C");

  //Logo

  logoPage.href = "img/logo.png";

  logoResponsive.src = "img/logo.png";
  logo.src = "img/logo.png";

  //Sesion Storage

  sessionStorage.Page = "1";

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

  header.classList.add("backgroundViolet");

  header.classList.remove("backgroundWhite");

  //NavBar Responsive

  navBarResponsive.classList.add("backgroundViolet");

  navBarResponsive.classList.remove("backgroundWhite");

  //NavLinks

  buttonHome.classList.add("orange");
  buttonAboutUs.classList.add("orange");
  buttonConsultancies.classList.add("orange");

  buttonHome.classList.remove("pink");
  buttonAboutUs.classList.remove("pink");
  buttonConsultancies.classList.remove("pink");

  buttonHome.classList.remove("violet");
  buttonAboutUs.classList.remove("violet");
  buttonConsultancies.classList.remove("violet");

  buttonAboutUs.classList.add("active");

  buttonHome.classList.remove("active");
  buttonConsultancies.classList.remove("active");

  //Selector
  
  aboutUsSelector.classList.add("activeSelector");

  if (sessionStorage.Page == "1") {

    homeSelector.classList.add("hideSelector-A");
    consultanciesSelector.classList.add("hideSelector");

    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector");
    homeSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector-H");
    consultanciesSelector.classList.remove("hideSelector-A");

  }

  if (sessionStorage.Page == "3") {

    homeSelector.classList.add("hideSelector");
    consultanciesSelector.classList.add("hideSelector-A");

    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector-A");
    homeSelector.classList.remove("hideSelector-C");

    consultanciesSelector.classList.remove("activeSelector");
    consultanciesSelector.classList.remove("hideSelector");
    consultanciesSelector.classList.remove("hideSelector-H");
  
  }

  aboutUsSelector.classList.remove("hideSelector");
  aboutUsSelector.classList.remove("hideSelector-H");
  aboutUsSelector.classList.remove("hideSelector-C");

  //Logo

  logoPage.href = "img/logo-yellow.png";

  logoResponsive.src = "img/logo-yellow.png";
  logo.src = "img/logo-yellow.png";

  //Sesion Storage

  sessionStorage.Page = "2";

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

  header.classList.add("backgroundWhite");

  header.classList.remove("backgroundViolet");

  //NavBar Responsive

  navBarResponsive.classList.add("backgroundWhite");

  navBarResponsive.classList.remove("backgroundViolet");

  //NavLinks

  buttonHome.classList.add("violet");
  buttonAboutUs.classList.add("violet");
  buttonConsultancies.classList.add("violet");

  buttonHome.classList.remove("pink");
  buttonAboutUs.classList.remove("pink");
  buttonConsultancies.classList.remove("pink");

  buttonHome.classList.remove("orange");
  buttonAboutUs.classList.remove("orange");
  buttonConsultancies.classList.remove("orange");

  buttonConsultancies.classList.add("active");

  buttonHome.classList.remove("active");
  buttonAboutUs.classList.remove("active");

  //Selector

  consultanciesSelector.classList.add("activeSelector");

  if (sessionStorage.Page == "1") {

    homeSelector.classList.add("hideSelector-C");
    aboutUsSelector.classList.add("hideSelector");
    
    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector");
    homeSelector.classList.remove("hideSelector-A");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector-H");
    aboutUsSelector.classList.remove("hideSelector-C");

  }

  if (sessionStorage.Page == "2") {

    homeSelector.classList.add("hideSelector");
    aboutUsSelector.classList.add("hideSelector-C");
    
    homeSelector.classList.remove("activeSelector");
    homeSelector.classList.remove("hideSelector-A");
    homeSelector.classList.remove("hideSelector-C");

    aboutUsSelector.classList.remove("activeSelector");
    aboutUsSelector.classList.remove("hideSelector");
    aboutUsSelector.classList.remove("hideSelector-H");
  
  }

  consultanciesSelector.classList.remove("hideSelector");
  consultanciesSelector.classList.remove("hideSelector-A");
  consultanciesSelector.classList.remove("hideSelector-H");

  //Logo

  logoPage.href = "img/logo-light-violet.png";

  logoResponsive.src = "img/logo-light-violet.png";
  logo.src = "img/logo-light-violet.png";

  //Sesion Storage

  sessionStorage.Page = "3";

};




  
 /* document.getElementById("menu").onclick = function () {
    
    if(document.getElementById("navBar").style.display != "block") {
    
      document.getElementById("navBar").style.display = "block";
    
    }
    else {
        document.getElementById("navBar").style.display = "none";
    }
    };
  */