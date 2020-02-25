function css () {

    $("header").css({
        "height" : "150px"
    });

    $("a:visited").css({
        "color" : "black"
    });

    $("a:hover").css({
        "color" : "grey"
    });

    $("a:active").css({
        "color" : "white"
    });

    $("#logo").css({
        "background-image" : "url('../img/logoNoir.png')",
        "background-repeat" : "no-repeat",
        "background-size" : "contain",  /* Faire en sorte que l'image prenne la totalité de son contenneur. */
        "background-color": "linen",
        "width" : "15%",
        "height" : "100%",
        "float" : "left"
    });

    $("#container").css({
        "width" : "85%",
        "height" : "100%",
        "background-color": "linen",
        "float" : "right",
        "position" : "relative"
    });

    $("#bottomdiv").css({
        "width" : "100%",
        "position" : "absolute",
        "bottom" : "5px",
        "font-size" : "2em"
    });

    $(".h_txtg").css({              /* HEADER TEXTE DE GAUCHE ( RECHERCHE / PROPOSER ) */
        "float" : "left",
        "margin-bottom" : "5px"
    });

    $(".h_txtg").css({              /* HEADER TEXTE DE GAUCHE ( CONNEXION / ENREGISTRER ) */
        "padding" : "10px",
        "text-decoration" : "none"
    });

    $(".h_txtd").css({              /* HEADER TEXTE DE DROITE ( RECHERCHE / PROPOSER ) */
        "float" : "right",
    });

    $(".h_txtd a").css({            /* HEADER TEXTE DE DROITE ( CONNEXION / ENREGISTRER ) */
        "text-decoration" : "none"
    });

    $(".presse").css({              /* TOUT LES LIENS / IMAGES PRESSE */
        "display" : "flex",
        "flex-direction" : "row",
        "justify-content" : "space-around",
        "font-size" : "1.2em",
        "align-items" : "center"
    });

    $("footer").css({
        "width" : "100%",
        "height" : "150px",
        "background-color" : "linen",
        "position" : "relative",
        "font-size" : "1em"
    });

    $(".social").css({
        "width" : "15%",
        "height" : "100%",
        "float" : "left",
        "margin-left" : "150px",
        "padding-top" : "40px"
    });

    $(".social a").css({ 
        "padding" : "10px"
    }); 
    
    $(".mentions").css({            /* TOUT LES LIENS DU FOOTER */
        "display" : "grid",
        "width" : "40%",
        "float" : "right",
        "margin-top" : "30px",
        "grid-template-columns" : "repeat(3, 1fr)",
        "grid-gap" : "1px",
        "grid-auto-rows" : "minmax(30px, auto)"
    });

    $(".mentions a").css({
        "text-decoration" : "none"
    });

    /* POUR L'ALIGNEMENT EN COLONNES DES LIENS DU FOOTER */

    $(".one").css ({
        "grid-column" : "1",
        "grid-row" : "1"
    });

    $(".two").css ({
        "grid-column" : "2",
        "grid-row" : "1"
    });

    $(".three").css ({
        "grid-column" : "3",
        "grid-row" : "1"
    });

    /* POUR L'ALIGNEMENT EN COLONNES DES LIENS DU FOOTER */
}