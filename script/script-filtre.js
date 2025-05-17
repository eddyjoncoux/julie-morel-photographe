document.addEventListener('DOMContentLoaded', () => {
    // Récupérer tous les boutons de filtrage
    const buttons = document.querySelectorAll('.button-gallerie button');
    
    // Récupérer le bouton "Tout afficher"
    const showAllButton = document.getElementById('show-all');
    
    // Récupérer toutes les images de la galerie
    const images = document.querySelectorAll('.gallerie img');
    
    // Parcourir tous les boutons de filtre
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // --> AJOUT : Supprimer la classe active de tous les boutons
            buttons.forEach(btn => btn.classList.remove('active'));

            // --> AJOUT : Ajouter la classe active sur le bouton cliqué
            this.classList.add('active')
            // Récupérer la catégorie à afficher (en fonction du texte du bouton)
            const category = button.textContent.toLowerCase();  // 'portrait', 'projet artistique', 'mariage'
            
            // Cacher toutes les images
            images.forEach(img => {
                img.classList.add('hidden');  // On cache toutes les images
            });

            // Afficher uniquement les images correspondant à la catégorie
            images.forEach(img => {
                if (img.getAttribute('data-category') === category) {
                    img.classList.remove('hidden');  // On les affiche
                }
            });
        });
    });

    // Fonction pour tout afficher quand le bouton "Tout afficher" est cliqué
    showAllButton.addEventListener('click', () => {
        images.forEach(img => {
            img.classList.remove('hidden');  // On enlève la classe 'hidden' pour toutes les images
        });
    });
});


