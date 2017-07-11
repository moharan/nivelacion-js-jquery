$(document).ready( function(){
	// etapa 7
	console.log("recipe.html esta listo");
	// etapa 1
	$(".js-menu").hide();
	// etapa 8
	$(".js-show-recipe").click(function(){
		//alert("recipe");
		$(".page.recipe").removeClass("make");
		// etapa 9
		$(".js-show-recipe").addClass("active");
		$(".js-show-recipe").addClass("activo");
		$(".js-show-make").removeClass("active");
		$(".js-show-make").removeClass("activo");
	});
	$(".js-show-make").click(function(){
		//alert("make");
		//.btns-group
		$(".page.recipe").addClass("make");
		// etapa 9
		$(".js-show-make").addClass("active");
		$(".js-show-make").addClass("activo");
		$(".js-show-recipe").removeClass("active");
		$(".js-show-recipe").removeClass("activo");
	});
	// etapa 10
	$(".js-back").click(function(){
		window.location.href = "index.html";
	});
});