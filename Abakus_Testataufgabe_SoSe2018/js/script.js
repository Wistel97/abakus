/**
 * http://usejsdoc.org/
 */

$( document ).ready(function() {

    $( ".kugel" ).click(function( event ) {

      //bewegt Kugeln beim KLicken nach Links
    	if ($(this).hasClass("rechts")) {
        $(this).removeClass("rechts").addClass("links");
        $(this).prevAll().removeClass("rechts").addClass("links");
    	}
      //bewegt Kugeln beim KLicken nach Rechts
      else if ($(this).hasClass("links")) {
        $(this).removeClass("links").addClass("rechts");
        $(this).nextAll().removeClass("links").addClass("rechts");
      }

        //rechnet die Reihen zusammen
        var ausgabe = 0;
        var ausgabe = $("#1stelle").children(".rechts").length + $("#2stelle").children(".rechts").length*10 + $("#3stelle").children(".rechts").length * 100 + $("#4stelle").children(".rechts").length *1000 + $("#5stelle").children(".rechts").length *10000;

        //gibt das Ergebnis in die Felder ein
        $("#anzeige").text(ausgabe);
        $("#ausgabe").text(ausgabe);


    });

});
