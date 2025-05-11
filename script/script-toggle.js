document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle'); // Bouton d'ouverture
    const closeMenu = document.getElementById('close-menu'); // Bouton de fermeture
    const menu = document.getElementById('menu'); // Menu

    if (closeMenu) { 
        closeMenu.addEventListener('click', function() {
            menu.classList.remove('active'); 
        });
    } else {
        console.error("Le bouton de fermeture n'a pas été trouvé");
    }  

    // Ouvrir/fermer le menu en cliquant sur le bouton burger
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); 

        });

    document.addEventListener('click', function(event) {
        if(!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }     
    });
});