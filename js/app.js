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


document.addEventListener('DOMContentLoaded', function () {
    // Set the default tab
    showContent('presentation');
   
});
