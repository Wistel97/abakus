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

    // Frage jede 1/2 Sekunde nach dem Ergebnis.
    setInterval(function(){
	    $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	    $("#anzeige").text($ausgabe);
	    $("#ausgabe").text($ausgabe);
    }, 500);

    // START - MANUELLE BEDIENUNG //

    $( ".kugel" ).on( "click", function( event ) {

    	$(this).animate({
            opacity: 1,
          }, 1000, function() {

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

	        // wenn der angegebene Wertebereich überschritten wird
	        if ($ausgabe > 99999) {
	        	alert("Der Wertebereich darf 99999 nicht überschreiten!");
	        }

        });



    	// AUSNHAME EINERSTELLE
    	setTimeout(function(){

	    	if ($("#0stelle").children("#9").hasClass("rechts")) {

				  $("#0stelle").children(".kugel").removeClass("rechts").addClass("links");

				  setTimeout(function(){
					  $("#1stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 1000);
	    	}
    	}, 2000);



    	// AUSNHAME ZEHNERSTELLE
    	setTimeout(function(){

	    	if ($("#1stelle").children("#9").hasClass("rechts")) {

				  $("#1stelle").children(".kugel").removeClass("rechts").addClass("links");

				  setTimeout(function(){
					  $("#2stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 1000);
	    	}
    	}, 4000);



    	// AUSNHAME HUNDERTERSTELLE
    	setTimeout(function(){

	    	if ($("#2stelle").children("#9").hasClass("rechts")) {

				  $("#2stelle").children(".kugel").removeClass("rechts").addClass("links");

				  setTimeout(function(){
					  $("#3stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 1000);
	    	}
    	}, 6000);



    	// AUSNHAME TAUSENDERSTELLE
    	setTimeout(function(){

	    	if ($("#3stelle").children("#9").hasClass("rechts")) {

				  $("#3stelle").children(".kugel").removeClass("rechts").addClass("links");

				  setTimeout(function(){
					  $("#4stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 1000);
	    	}
    	}, 8000);

    });

    // ENDE - MANUELLE BEDIENUNG //




    // START - ADDITION UND SUBTRAKTION //

    $( "#rechne" ).on("click",function( event ) {

      //Inhalt TextFeld
      $inhalt = $("#eingabefeld").val();
      //das Vorzeichen aus dem Textfeld
      $vorzeichen = $inhalt.match(/[\-\+]/);
      //die Zahl aus dem Textfeld
      $zahl = $inhalt.match(/\d+/);

      //Die einzelnen Stellen der eingegebenen Zahl
      var $1stelle =  $zahl % 10;
      var $2stelle = ($zahl % 100 -   $zahl % 10) / 10;
      var $3stelle = ($zahl % 1000 -  $zahl % 100) / 100;
      var $4stelle = ($zahl % 10000 - $zahl % 1000) / 1000;
      var $5stelle = ($zahl % 100000 - $zahl % 10000) / 10000;

      var stellen = [$1stelle,$2stelle,$3stelle,$4stelle,$5stelle];

      var $1stelleAusgabe =  $ausgabe % 10;
      var $2stelleAusgabe = ($ausgabe % 100 - $ausgabe % 10) / 10;
      var $3stelleAusgabe = ($ausgabe % 1000 - $ausgabe % 100) / 100;
      var $4stelleAusgabe = ($ausgabe % 10000 - $ausgabe % 1000) / 1000;
      var $5stelleAusgabe = ($ausgabe % 100000 - $ausgabe % 10000) / 10000;

      var stellenAusgabe = [$1stelleAusgabe,$2stelleAusgabe,$3stelleAusgabe,$4stelleAusgabe,$5stelleAusgabe];


      // START - ADDITION //

      if ($vorzeichen == "+") {

      einer();

    	  // START - EINER ZU ZEHNER //
    	  function einer() {

    	  // Zahl (hier Einerstelle) wird festgelegt
    	  var zahl = $1stelle;

    	  // Jede Kugel wird in dieser Schleife einmal überprüft
    	  for (var i = 0; i < 10; i++) {

    		  // Wenn die Kugel an der Stelle #i die Klasse links hat und die Zahl > 0 ist...
			  if ($("#0stelle").children("#" + i).hasClass("links") && zahl > 0) {

				  // ...dann wird diese Zahl nach rechts geschoben
				  $("#0stelle").children("#" + i).removeClass("links").addClass("rechts");
				  // Zähler wird dekrementiert (kommt später zum Einsatz)
				  zahl = zahl - 1;

			  }

			  // Wenn die Kugel ganz links in der Reihe auf der rechten Seite ist...
			  if ($("#0stelle").children("#9").hasClass("rechts")) {

				  // ...dann schiebe alle Kugeln dieser Reihe mit einem Timeout von 2 Sek. nach links...
				  setTimeout(function(){
					  $("#0stelle").children(".kugel").removeClass("rechts").addClass("links");
				  }, 2000);

				  // ...und schiebe eine Reihe darüber die letzte Kugel mit der Klasse links, nach rechts
				  setTimeout(function(){
					  $("#1stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 3000);

			  }

    	  }

    	  // Hier kommt der Zähler zum Einsatz
    	  setTimeout(function(){

    		  // Solange der Wert von i kleiner als der Wert der übrig gebliebenen Zahl ist...
	    	  for (var i = 0; i < zahl; i++) {

	    		  //...schiebe Kugeln von der linken Seite nach rechts (alle Kugeln werden mit Timeout von 4 Sek (also 1 Sek nach letzten Verschiebung) verschoben)
	    		  if ($("#0stelle").children("#" + i).hasClass("links")) {

					  $("#0stelle").children("#" + i).removeClass("links").addClass("rechts");

				  }

			  }
    	  }, 4000);

          // Gehe zur nächsten Stange
    	  setTimeout(function(){
    		  zehner();
    	  }, 6000);

    	  }
          // ENDE - EINER ZU ZEHNER //



    	  // START - ZEHNER ZU HUNDERTER //
    	  function zehner() {

    	  var zahl = $2stelle;

    	  // AUSNAHMEBEHANDLUNG //
    	  if ($("#1stelle").children("#9").hasClass("rechts")) {

			  $("#1stelle").children(".kugel").removeClass("rechts").addClass("links");

	    	  setTimeout(function(){
	    		  $("#2stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
	    	  }, 2000);

    	  }
    	  // AUSNAHMEBEHANDLUNG //

    	  for (var i = 0; i < 10; i++) {

			  if ($("#1stelle").children("#" + i).hasClass("links") && zahl > 0) {

				  $("#1stelle").children("#" + i).removeClass("links").addClass("rechts");
				  zahl = zahl - 1;

			  }

			  if ($("#1stelle").children("#9").hasClass("rechts")) {

				  setTimeout(function(){
					  $("#1stelle").children(".kugel").removeClass("rechts").addClass("links");
				  }, 2000);

				  setTimeout(function(){
					  $("#2stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 3000);

			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 0; i < zahl; i++) {

	    		  if ($("#1stelle").children("#" + i).hasClass("links")) {

					  $("#1stelle").children("#" + i).removeClass("links").addClass("rechts");

				  }

			  }
    	  }, 4000);

    	  setTimeout(function(){
    		  hunderter();
    	  }, 6000);

    	  }
          // ENDE - ZEHNER ZU HUNDERTER //



    	  // START - HUNDERTER ZU TAUSENDER //
    	  function hunderter() {

    	  var zahl = $3stelle;

    	  // AUSNAHMEBEHANDLUNG //
    	  if ($("#2stelle").children("#9").hasClass("rechts")) {

			  $("#2stelle").children(".kugel").removeClass("rechts").addClass("links");

	    	  setTimeout(function(){
	    		  $("#3stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
	    	  }, 2000);

    	  }
    	  // AUSNAHMEBEHANDLUNG //

    	  for (var i = 0; i < 10; i++) {

			  if ($("#2stelle").children("#" + i).hasClass("links") && zahl > 0) {

				  $("#2stelle").children("#" + i).removeClass("links").addClass("rechts");
				  zahl = zahl - 1;

			  }

			  if ($("#2stelle").children("#9").hasClass("rechts")) {

				  setTimeout(function(){
					  $("#2stelle").children(".kugel").removeClass("rechts").addClass("links");
				  }, 2000);

				  setTimeout(function(){
					  $("#3stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 3000);

			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 0; i < zahl; i++) {

	    		  if ($("#2stelle").children("#" + i).hasClass("links")) {

					  $("#2stelle").children("#" + i).removeClass("links").addClass("rechts");

				  }

			  }
    	  }, 4000);;

    	  setTimeout(function(){
    		  tausender();
    	  }, 6000);

    	  }
          // ENDE - HUNDERTER ZU TAUSENDER //



    	  // START - TAUSENDER ZU ZEHNTAUSENDER //
    	  function tausender() {

    	  var zahl = $4stelle;

    	  // AUSNAHMEBEHANDLUNG //
    	  if ($("#3stelle").children("#9").hasClass("rechts")) {

			  $("#3stelle").children(".kugel").removeClass("rechts").addClass("links");

	    	  setTimeout(function(){
	    		  $("#4stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
	    	  }, 2000);

    	  }
    	  // AUSNAHMEBEHANDLUNG //

    	  for (var i = 0; i < 10; i++) {

			  if ($("#3stelle").children("#" + i).hasClass("links") && zahl > 0) {

				  $("#3stelle").children("#" + i).removeClass("links").addClass("rechts");
				  zahl = zahl - 1;

			  }

			  if ($("#3stelle").children("#9").hasClass("rechts")) {

				  setTimeout(function(){
					  $("#3stelle").children(".kugel").removeClass("rechts").addClass("links");
				  }, 2000);

				  setTimeout(function(){
					  $("#4stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 3000);

			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 0; i < zahl; i++) {

	    		  if ($("#3stelle").children("#" + i).hasClass("links")) {

					  $("#3stelle").children("#" + i).removeClass("links").addClass("rechts");

				  }

			  }
    	  }, 4000);

    	  setTimeout(function(){
    		  zehntausender();
    	  }, 6000);

    	  }
          // ENDE - TAUSENDER ZU ZEHNTAUSENDER //



    	  // START - ZEHNTAUSENDER //
    	  function zehntausender() {

    	  var zahl = $5stelle;

    	  for (var i = 0; i < 10; i++) {

			  if ($("#4stelle").children("#" + i).hasClass("links") && zahl > 0) {

				  $("#4stelle").children("#" + i).removeClass("links").addClass("rechts");
				  zahl = zahl - 1;

			  }

    	  }

    	  $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
          $("#anzeige").text($ausgabe);
          $("#ausgabe").text($ausgabe);

          // ENDE - ZEHNTAUSENDER //

    	  }
      }
      // ENDE - ADDITION //



      // START - SUBTRAKTION //

      else if($vorzeichen == "-"){

    	  // START - ERGEBNIS IST NULL //
	      if($ausgabe == $zahl){

	          setTimeout(function(){
				  $("#0stelle").children(".kugel.rechts").removeClass("rechts").addClass("links");
			  }, 1000);

	          setTimeout(function(){
				  $("#1stelle").children(".kugel.rechts").removeClass("rechts").addClass("links");
			  }, 2000);

	          setTimeout(function(){
				  $("#2stelle").children(".kugel.rechts").removeClass("rechts").addClass("links");
			  }, 3000);

	          setTimeout(function(){
				  $("#3stelle").children(".kugel.rechts").removeClass("rechts").addClass("links");
			  }, 4000);

	          setTimeout(function(){
				  $("#4stelle").children(".kugel.rechts").removeClass("rechts").addClass("links");
			  }, 5000);

	      } else {

	    	  einer();

	      }
	      // ENDE - ERGEBNIS IST NULL //




    	  // START - EINER ZU ZEHNER //
	  	  function einer() {

    	  var zahl = $1stelle;

    	  for (var i = 9; i >= 0; i--) {

			  if ($("#0stelle").children("#" + i).hasClass("rechts") && zahl > 0) {

				  $("#0stelle").children("#" + i).removeClass("rechts").addClass("links");
				  zahl = zahl - 1;

			  }

			  if ($("#0stelle").children("#0").hasClass("links") && ($2stelleAusgabe + $3stelleAusgabe + $4stelleAusgabe + $5stelleAusgabe !=0)) {

          if($2stelleAusgabe != 0){
				  setTimeout(function(){
					  $("#0stelle").children(".kugel").removeClass("links").addClass("rechts");
				  }, 2000);
        }



				  setTimeout(function(){
					  $("#1stelle").children(".kugel.rechts").first().removeClass("rechts").addClass("links");
				  }, 3000);


			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 9; zahl > 0; i--) {

	    		  if ($("#0stelle").children("#" + i).hasClass("rechts")) {

					  $("#0stelle").children("#" + i).removeClass("rechts").addClass("links");
					  zahl = zahl - 1;

				  }

			  }
    	  }, 4000);

    	  setTimeout(function(){
    		  zehner();
    	  }, 6000);

    	  }
          // ENDE - EINER ZU ZEHNER //



	  	  // START - ZEHNER ZU HUNDERTER //
	  	  function zehner() {

    	  var zahl = $2stelle;

    	  for (var i = 9; i >= 0; i--) {

			  if ($("#1stelle").children("#" + i).hasClass("rechts") && zahl > 0) {

				  $("#1stelle").children("#" + i).removeClass("rechts").addClass("links");
				  zahl = zahl - 1;

			  }

			  if ($("#1stelle").children("#0").hasClass("links") && ($3stelleAusgabe + $4stelleAusgabe + $5stelleAusgabe != 0)) {

          if($3stelleAusgabe != 0){
				  setTimeout(function(){
					  $("#1stelle").children(".kugel").removeClass("links").addClass("rechts");
				  }, 2000);
          }

				  setTimeout(function(){
					  $("#2stelle").children(".kugel.rechts").first().removeClass("rechts").addClass("links");
				  }, 3000);

		          if($1stelleAusgabe == 0){
			          setTimeout(function(){
			        	  $("#1stelle").children("#9").removeClass("rechts").addClass("links");
			          }, 4000);
		          }

			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 9; zahl > 0; i--) {

	    		  if ($("#1stelle").children("#" + i).hasClass("rechts")) {

					  $("#1stelle").children("#" + i).removeClass("rechts").addClass("links");
					  zahl = zahl - 1;

				  }
			  }
    	  }, 5000);

    	  setTimeout(function(){
    		  hunderter();
    	  }, 7000);

    	  }
	  	  // ENDE - ZEHNER ZU HUNDERTER //



	  	  // START - HUNDERTER ZU TAUSENDER //
	  	  function hunderter() {

    	  var zahl = $3stelle;

    	  for (var i = 9; i >= 0; i--) {

			  if ($("#2stelle").children("#" + i).hasClass("rechts") && zahl > 0) {

				  $("#2stelle").children("#" + i).removeClass("rechts").addClass("links");
				  zahl = zahl - 1;

			  }

			  if ($("#2stelle").children("#0").hasClass("links") && ( $4stelleAusgabe + $5stelleAusgabe !=0)) {

          if($4stelleAusgabe != 0){
				  setTimeout(function(){
					  $("#2stelle").children(".kugel").removeClass("links").addClass("rechts");
				  }, 2000);
          }

				  setTimeout(function(){
					  $("#3stelle").children(".kugel.rechts").first().removeClass("rechts").addClass("links");
				  }, 3000);

		          if($2stelleAusgabe == 0){
			          setTimeout(function(){
			        	  $("#2stelle").children("#9").removeClass("rechts").addClass("links");
			          }, 4000);
		          }

			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 9; zahl > 0; i--) {

	    		  if ($("#2stelle").children("#" + i).hasClass("rechts")) {

					  $("#2stelle").children("#" + i).removeClass("rechts").addClass("links");
					  zahl = zahl - 1;

				  }
			  }
    	  }, 5000);

    	  setTimeout(function(){
    		  tausender();
    	  }, 7000);

    	  }
	  	  // ENDE - HUNDERTER ZU TAUSENDER //



	  	  // START - TAUSENDER ZU ZEHNTAUSENDER //
	  	  function tausender() {

    	  var zahl = $4stelle;

    	  for (var i = 9; i >= 0; i--) {

			  if ($("#3stelle").children("#" + i).hasClass("rechts") && zahl > 0) {

				  $("#3stelle").children("#" + i).removeClass("rechts").addClass("links");
				  zahl = zahl - 1;

			  }

			  if ($("#3stelle").children("#0").hasClass("links") && ($5stelleAusgabe !=0)) {

          if($5stelleAusgabe != 0){
				  setTimeout(function(){
					  $("#3stelle").children(".kugel").removeClass("links").addClass("rechts");
				  }, 2000);
          }

				  setTimeout(function(){
					  $("#4stelle").children(".kugel.rechts").first().removeClass("rechts").addClass("links");
				  }, 3000);

		          if($3stelleAusgabe == 0){
			          setTimeout(function(){
			        	  $("#3stelle").children("#9").removeClass("rechts").addClass("links");
			          }, 4000);
		          }

			  }

    	  }

    	  setTimeout(function(){
	    	  for (var i = 9; zahl > 0; i--) {

	    		  if ($("#3stelle").children("#" + i).hasClass("rechts")) {

					  $("#3stelle").children("#" + i).removeClass("rechts").addClass("links");
					  zahl = zahl - 1;

				  }
			  }
    	  }, 5000);

    	  setTimeout(function(){
    		  zehntausender();
    	  }, 7000);

    	  }
	  	  // ENDE - TAUSENDER ZU ZEHNTAUSENDER //



	  	  // START - ZEHNTAUSENDER //
	  	  function zehntausender() {

    	  var zahl = $5stelle;

    	  for (var i = 9; i >= 0; i--) {

			  if ($("#3stelle").children("#" + i).hasClass("rechts") && zahl > 0) {

				  $("#3stelle").children("#" + i).removeClass("rechts").addClass("links");
				  zahl = zahl - 1;

			  }

    	  }

    	  }
	  	  // ENDE - ZEHNTAUSENDER //

      }
      // ENDE - SUBTRAKTION //

    });

    // ENDE - ADDITION UND SUBTRAKTION //




    // START - EINGABE PRÜFEN / AUSNAHMEBEHANDLUNG //

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

            //prüfen ob die Rechnung über 99999 ergeben würde
            if(parseInt($ausgabe) + parseInt($zahl) > 99999){
              $( "#rechne" ).prop("disabled",true);
              alert("Das Ergebnis darf den Wert 99999 nicht überschreiten!")
            }

            else if($ausgabe + $zahl < 99999){
              $( "#rechne" ).prop("disabled",false);
            }

          }


        }

    });

    // ENDE - EINGABE PRÜFEN / AUSNAHMEBEHANDLUNG //

});
