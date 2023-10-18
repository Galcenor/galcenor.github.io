$(document).ready(function() {
    // Générer un nombre aléatoire entre 0 et 100
    const randomNumber = Math.floor(Math.random() * 101);

    $('#playButton').click(function() {
        const userGuess = $('#numberInput').val().trim(); // Je récupère la valeur entrée

        if (userGuess === '') {
            $('#msg').text('Merci de remplir le champ vide');
            $('#msg').css('color', 'red');
        } else if (isNaN(userGuess)) {
            $('#msg').text('Merci d\'utiliser un nombre !');
            $('#msg').css('color', 'red');
        } else {
            const userGuessNumber = parseInt(userGuess); // Convertir en nombre

            if (userGuessNumber === randomNumber) { // Vérification si les deux nombres correspondent
                $('#msg').text('Félicitations ! Vous avez deviné le nombre');
                $('#msg').css('color', 'green');
            } else if (userGuessNumber < randomNumber) { // si le nombre du joueur est plus petit que le nombre généré
                $('#msg').text('Le nombre est plus grand. Essayez à nouveau.');
                $('#msg').css('color', 'lightcoral');
            } else if (userGuessNumber > randomNumber) { // Sinon le nombre est plus grand
                $('#msg').text('Le nombre est plus petit. Essayez à nouveau.');
                $('#msg').css('color', 'lightcoral');
            }
        }
    });
});
