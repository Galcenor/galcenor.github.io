$(document).ready(function() {
    // Générer un nombre aléatoire entre 0 et 100
    const randomNumber = Math.floor(Math.random() * 101);

    $('#playButton').click(function() {
        const userGuess = parseInt($('#numberInput').val());

        if (userGuess === randomNumber) {
            $('#msg').text('Félicitations ! Vous avez deviné le nombre');
            $('#msg').css('color', 'green');
        } else if (userGuess < randomNumber) {
            $('#msg').text('Le nombre est plus grand. Essayez à nouveau.');
            $('#msg').css('color', 'lightcoral');
        } else {
            $('#msg').text('Le nombre est plus petit. Essayez à nouveau.');
            $('#msg').css('color', 'lightcoral');
        }
    });
});
