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