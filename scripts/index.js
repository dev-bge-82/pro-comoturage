function cacherR(){
	$("#formR").css("display","none"), //Quand on clique sur proposer, le formulaire disparaît.
	$("#formP").css("display","block"), //Quand on clique sur proposer, le formulaire apparaît.
	$("#btn_proposer").css("background-color","f3cbc4"), //Quand on clique sur le boutoun rechercher "cacherP", le texte devient vert.
	$("#btn_rechercher").css("background-color","white") //Quand on clique sur le boutoun rechercher "cacherP", le texte devient noir.
	}
	function cacherP(){
	$("#formP").css("display","none"),
	$("#formR").css("display","block"),
	$("#btn_rechercher").css("background-color","f3cbc4"),//Quand on clique sur le boutoun rechercher "cacherP", le texte devient vert.
	$("#btn_proposer").css("background-color","white") //Quand on clique sur le boutoun rechercher "cacherP", le texte devient noir.
	}	
