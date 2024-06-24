
const seeOpeningsButtons = document.querySelectorAll('button')
seeOpeningsButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Voir les offres d'emploi pour cette ville !");
    
    });
});


const seeAllOpeningsButton = document.querySelector('.section7 button');

seeAllOpeningsButton.addEventListener('click', function() {
    alert("Voir toutes les offres d'emploi !");
    
});