const conoceButtonAboutUs = document.getElementById ("conoceButtonAboutUs");
const conoceButtonConsultancies = document.getElementById ("conoceButtonConsultancies");

conoceButtonAboutUs.onclick = function (){

    location.replace ("#conoceAboutUs");
    history.replaceState(null,null, "/acerca-de.html");

}

conoceButtonConsultancies.onclick = function (){

    location.replace ("#conoceConsultancies");
    history.replaceState(null,null, "/asesorias.html");

}