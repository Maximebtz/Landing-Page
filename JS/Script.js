// Sélectionner l'élément vidéo par son ID
let video = document.querySelector("#video");

// Ajouter un gestionnaire d'événement pour le survol de la souris
video.addEventListener('mouseover', () => {
  // Vérifier si getUserMedia est disponible dans le navigateur
  if (navigator.mediaDevices.getUserMedia) {
    // Demander l'autorisation d'accéder à la caméra vidéo
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // Lorsque l'autorisation est accordée, affecter le flux vidéo à la source de la vidéo
        video.srcObject = stream;
      })
      .catch(function(errOr) {
        // En cas d'erreur lors de l'autorisation ou de l'accès à la caméra
        console.log("Something went wrong!");
      });
  }
});



/*****Menu Burger*****/ 


// Définition de la fonction pour ouvrir/fermer le menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    // Si le menu est déjà ouvert, le fermer
    x.style.display = "none";
  } else {
    // Sinon, ouvrir le menu
    x.style.display = "block";
  }
}

// Obtenez tous les éléments <a> dans le menu
var links = document.querySelectorAll("#myLinks a");

// Parcourez chaque élément <a> et ajoutez un gestionnaire d'événements pour le clic
links.forEach(function(link) {
  link.addEventListener("click", function() {
    // Appel de la fonction myFunction() pour fermer le menu
    myFunction();
  });
});
