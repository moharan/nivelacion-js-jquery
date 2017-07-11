$(document).ready( function(){
	// etapa 7
	console.log("recipe.html esta listo");
	// etapa 1
	$(".js-menu").hide();
	// etapa 8
	$(".js-show-recipe").click(function(){
		alert("recipe");
		$(".page.recipe").removeClass("make")
	});
	$(".js-show-make").click(function(){
		alert("make");
		//.btns-group
		$(".page.recipe").addClass("make");
	});

});