/**
 * http://usejsdoc.org/
 */

$( document ).ready(function() {

    //AusgabeFeld
    var $ausgabe = 0;
    //Inhalt TextFeld
    var $inhalt;
    //das Vorzeichen aus dem Textfeld
    var $vorzeichen;
    //die Zahl aus dem Textfeld
    var $zahl;



    $( ".kugel" ).on( "click", function( event ) {

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
        $ausgabe = $("#1stelle").children(".rechts").length + $("#2stelle").children(".rechts").length*10 + $("#3stelle").children(".rechts").length * 100 + $("#4stelle").children(".rechts").length *1000 + $("#5stelle").children(".rechts").length *10000;

        //gibt das Ergebnis in die Felder ein
        $("#anzeige").text($ausgabe);
        $("#ausgabe").text($ausgabe);


    });

    $( "#rechne" ).on("click",function( event ) {

      //Inhalt TextFeld
      $inhalt = $("#eingabefeld").val();
      //das Vorzeichen aus dem Textfeld
      $vorzeichen = $inhalt.match(/[\-\+]/);
      //die Zahl aus dem Textfeld
      $zahl = $inhalt.match(/\d+/);

      var $1stelle = $zahl % 10;
      var $2stelle = ($zahl % 100 - $zahl % 10) / 10;
      var $3stelle = ($zahl % 1000 - $zahl % 100) / 100;
      var $4stelle = ($zahl % 10000 - $zahl % 1000) / 1000;
      var $5stelle = ($zahl % 100000 - $zahl % 10000) / 10000;


    });
    //Textfeld nach Eingabe überprüfen
    $( "#eingabefeld" ).on("change",function( event ) {

      //Inhalt Textfeld
      $inhalt = $("#eingabefeld").val();

      //prüfen ob im Feld -/+ und eine Zahl und nichts anderes eingegeben wurde
      if(!$inhalt.match(/(^\s*[\-\+]\s*\d+)$/)){
        $( "#rechne" ).prop("disabled",true);
        alert("Bitte geben sie eine gültige Eingabe ein!")
      }
      else {

          //das Vorzeichen aus dem Textfeld
          $vorzeichen = $inhalt.match(/[\-\+]/);
          //die Zahl aus dem Textfeld
          $zahl = $inhalt.match(/\d+/);

          //prüfen  bei negativer Zahl
          if($vorzeichen == "-"){

            //prüfen ob vorhandene Zahl - einggebne Zahl > 0 ist
            if($ausgabe < $zahl){
              $( "#rechne" ).prop("disabled",true);
              alert("Das Ergebnis der Rechnung darf nicht < 0 sein!")
            }

            else if($ausgabe >= $zahl){
              $( "#rechne" ).prop("disabled",false);
            }
          }
          //prüfen bei positiver Zahl
          else if($vorzeichen == "+"){

            //prüfen ob die Rechnung über 100000 ergeben würde
            if($ausgabe + $zahl >= 100000){
              $( "#rechne" ).prop("disabled",true);
              alert("Das Ergebnis darf den Wert 99999 nicht überschreiten!")
            }

            else if($ausgabe + $zahl < 100000){
              $( "#rechne" ).prop("disabled",false);
            }
          }

        }

    });
});
