$(document).ready( function(){
	// etapa 1
	$(".js-back").hide();
		//Estoy llamando a la funcion de etapa 2
	printNews();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
});
/*
* Función etapa 2 para hacer elemento en News
*/
function printNews () {
	$(".title-callout").append("<p>NUEVAS RECETAS</p>");
	//console.log('News:');
}
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log(recipesArray);
	//console.log(recipesArray.highlighted == true);
	/*$(recipesArray).each(function(x) {
		if (x.highlighted == true) {
			renderRecipe(x);
		}
	});*/
	recipesArray.forEach(function(x) {
		if (x.highlighted == true) {
			renderRecipe(x);
			}
		});
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	//etapa 4
	/*Box padre*/
	var padre = $(".list-recipes");
	padre.append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>" + recipe.title + "</span><span class='metadata-recipe'><span class='author-recipe'>" + recipe.source.name + "</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span> </span></span></span><img src='img/recipes/640x800/" + recipe.name + ".jpg'/></a>");
	/*padre.append("<a class='item-recipe'></a");
	padre.attr("class","");
	padre.attr("href","#");*/
	/*var lista = $(".item-recipe");
	lista.append("<span></span");
	lista.attr("class","attribution");
	lista.append("<img/>");
	lista.attr("scr","URL DE LA IMAGEN");
	var elemento = $(".attribution");
	//elemento 1
	elemento.append("<span></span");
	elemento.attr("class","title-recipe");
	//elemento 2
	elemento.append("<span></span");
	elemento.attr("class","metadata-recipe");
	var datos = $("metadata-recipe");
	datos.append("<span></span");
	datos.attr("class","author-recipe");
	// escribir NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO
	datos.append("<span></span");
	datos.attr("class","bookmarks-recipe");
	var icon = $("bookmarks-recipe");
	icon.append("<span></span");
	icon.attr("class","icon-bookmark");*/
	/*
	padre2.attr("class","parrafo-extra");
	padre2.addClass("parrafo-box");*/

}
/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}
/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}