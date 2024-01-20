// Définition de la fonction showContent en dehors de l'événement DOMContentLoaded
function showContent(contentId) {
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

    if (contentId == 'langues') {
        // Ajouter la classe active à l'onglet actuel
        document.getElementById(`${contentId}Content`).style.display = 'flex';
    }else{
        document.getElementById(`${contentId}Content`).style.display = 'block';
    }


}

function handleNavigation(contentId) {
    showContent(contentId);
    
}

function redirectToPage(button) {
    let target = button.getAttribute('data-href');
    location.href = target;
}

emailjs.init("qOUUknoJ4tT2TuC-8");

function sendEmail() {
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


    emailjs.send("service_gshmmpu", "template_zxlaaa6", data)
        .then(function (response) {
            alert("Le mail a bien été envoyé", response);
        }, function (error) {
            console.error("erreur de l'envoi", error);
            alert(error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    // Set the default tab
    showContent('presentation');
   
});
