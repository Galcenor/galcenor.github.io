$(document).ready(function() {
    // Générer un nombre aléatoire entre 0 et 100
    const randomNumber = Math.floor(Math.random() * 101);

    $('#playButton').click(function(event) {

        const userGuess = parseInt($('#numberInput').val()); // Je récupère la valeur entrée

        if (isNaN(userGuess)) {
            alert('Merci d\'utiliser un nombre !');
        }

        if (userGuess === randomNumber) { // Verification si les deux nombres sont correspondants
            $('#msg').text('Félicitations ! Vous avez deviné le nombre');
            $('#msg').css('color', 'green');
        } else if (userGuess < randomNumber) { // si le nombre du joueur est plus petit que le nombre générer
            $('#msg').text('Le nombre est plus grand. Essayez à nouveau.');
            $('#msg').css('color', 'lightcoral');
        } else if(userGuess > randomNumber) { // Sinon le nombre est plus grand
            $('#msg').text('Le nombre est plus petit. Essayez à nouveau.');
            $('#msg').css('color', 'lightcoral');
        }
    });
});
