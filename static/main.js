/*
new Twitch.Embed("twitch-embed", {
    width: 1200,
    height: 480,
    channel: "ellegamee"
});
*/

elias_button = document.getElementById('elias_img')
ellegamee_button = document.getElementById('ellegamee_img')
profile_title = document.getElementById('profile_title')
profile_text = document.getElementById('profile_text')

elias_button.setOnClickListener

data = {
    elias: {
        name: "Elias Axonov",
        text: "Jag heter Elias, är en galen pojke med ett glatt humör...\
        Jag är fortfarande i grundskolan, är väldigt data\
        intresserad och det passar ihop med min streaming.\
        Min fritid går ut på att leva livet och lära\
        mig så mycket om datorer. Jag lär mig om programering\
        men också mycket dataspel man skulle kalla mig som gamer."
    },
    ellegamee: {
        name: "ELLEGAMEE",
        text: "Min andra halva är gaming, spelar lite för mycket men bli duktig..."
    }
}

function change(changeto) {
    
    $(profile_title).fadeOut( 200, function() {
        profile_title.innerHTML = data[changeto].name
        $(profile_title).fadeIn( 200, function() {
            // Animation complete
        });
    });
    $(profile_text).fadeOut( 200, function() {
        profile_text.innerHTML = data[changeto].text
        $(profile_text).fadeIn( 200, function() {
            // Animation complete
        });
    });
    
}


/* Ändra så att den första sidan man ser är elias */
change("elias")

