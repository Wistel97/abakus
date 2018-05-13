/**
 * http://usejsdoc.org/
 */


$( document ).ready(function() {

    $( "#test" ).click(function( event ) {

        alert( $("#stangen").children().length );

    });

});


$( document ).ready(function() {

    $( ".kugel" ).click(function( event ) {

    	if ($(this).hasClass("rechts")) {
        $(this).removeClass("rechts").addClass("links");
        $(this).prevAll().removeClass("rechts").addClass("links");
    		// nach links..
    	}
      else {
        if ($(this).hasClass("links")) {
          $(this).removeClass("links")
        }
        $(this).addClass("rechts");
        $(this).nextAll().addClass("rechts");
      }



        // rechne(); -> Für die Anzeige oben rechts und unten links

    });

});



 /*function count(){
  *
  *

$( document ).ready(function() {

    $( ".kugel" ).click(function( event ) {

        $(this).parent().css('text-align','right');

    });

});




});

   var stangen = $("#stangen").children().length;
   var ausgabe;

   for (var i = 0; i < stangen; i++) {
     var j =
   }
   var element = document.getElementById("1stelle");
   var numberOfChildren = element.children.length


  alert(numberOfChildren);
 }

 class Row  {

   var left = 10;
   var right = 0;

 } */
