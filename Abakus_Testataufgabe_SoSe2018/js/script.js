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

        $(this).parent().css('text-align','right');

    });

});

 /*function count(){


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
