function surbrillance(objet) {
    var list = document.querySelectorAll("objet");
    for (i = 0; i < list.length; i++) {
        var annonce = list[i];
        //console.log (annonce.textContent);
        {
            annonce.addEventListener('mouseover', function () {
                this.style.boxShadow = "5px 5px 10px white";
            });
            annonce.addEventListener('mouseout', function () {
                this.style.boxShadow = "0px 0px 0px";
            });
        };
    }
}    