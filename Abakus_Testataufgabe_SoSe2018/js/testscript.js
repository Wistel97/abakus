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

    
    
    // MANUELLE BEDIENUNG //

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
	
	        //rechnet die Reihen zusammen
	        $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	
	        //gibt das Ergebnis in die Felder ein
	        $("#anzeige").text($ausgabe);
	        $("#ausgabe").text($ausgabe);
	        
	        // wenn der angegebene Wertebereich überschritten wird
	        if ($ausgabe > 99999) {
	        	alert("Der Wertebereich darf 99999 nicht überschreiten!");
	        }
        
        });

    });
    
    
    
    // ADDITION UND SUBTRAKTION //

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
      
      if ($vorzeichen == "+") {
    	  
      einer();  
    	  
    	  
    	  // EINER ZU ZEHNER //
    	  function einer() {
    	  
    	  var zahl = $1stelle;
    	  
    	  for (var i = 0; i < 10; i++) {

			  if ($("#0stelle").children("#" + i).hasClass("links") && zahl > 0) {
				  
				  $("#0stelle").children("#" + i).removeClass("links").addClass("rechts");
				  zahl = zahl - 1;
						  
			  }
			
			  if ($("#0stelle").children("#9").hasClass("rechts")) {

				  setTimeout(function(){
					  $("#0stelle").children(".kugel").removeClass("rechts").addClass("links");
				  }, 2000);
				  
				  setTimeout(function(){
					  $("#1stelle").children(".kugel.links").last().removeClass("links").addClass("rechts");
				  }, 3000);

			  }
			  
    	  }
    	  
    	  setTimeout(function(){
	    	  for (var i = 0; i < zahl; i++) {
	    		  
	    		  if ($("#0stelle").children("#" + i).hasClass("links")) {
					  
					  $("#0stelle").children("#" + i).removeClass("links").addClass("rechts");
					  
				  }
	    		  
	    		  $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	              $("#anzeige").text($ausgabe);
	              $("#ausgabe").text($ausgabe);
				  
			  }
    	  }, 4000);
    	  
    	  setTimeout(function(){
    		  zehner();
    	  }, 6000);
    	  
    	  }
          // EINER ZU ZEHNER //
    	  
    	  
    	  
    	  // ZEHNER ZU HUNDERTER //
    	  function zehner() {
    	  
    	  var zahl = $2stelle;
    	  
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
	    		  
	    		  $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	              $("#anzeige").text($ausgabe);
	              $("#ausgabe").text($ausgabe);
				  
			  }
    	  }, 4000);
    	  
    	  setTimeout(function(){
    		  hunderter();
    	  }, 6000);
    	  
    	  }
          // ZEHNER ZU HUNDERTER //
    	  
    	  
    	  
    	  // HUNDERTER ZU TAUSENDER //
    	  function hunderter() {
    	  
    	  var zahl = $3stelle;
    	  
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
	    		  
	    		  $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	              $("#anzeige").text($ausgabe);
	              $("#ausgabe").text($ausgabe);
				  
			  }
    	  }, 4000);
    	  
    	  setTimeout(function(){
    		  tausender();
    	  }, 6000);
    		  
    	  }
          // HUNDERTER ZU TAUSENDER //
    	  
    	  
    	  
    	  // TAUSENDER ZU ZEHNTAUSENDER //
    	  function tausender() {
    	  
    	  var zahl = $4stelle;
    	  
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
	    		  
	    		  $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	              $("#anzeige").text($ausgabe);
	              $("#ausgabe").text($ausgabe);
				  
			  }
    	  }, 4000);
    	  
    	  setTimeout(function(){
    		  zehntausender();
    	  }, 6000);
    	  
    	  }
          // TAUSENDER ZU ZEHNTAUSENDER //
    	  
    	  
    	  
    	  // ZEHNTAUSENDER //
    	  function zehntausender() {
    	  
    	  var zahl = $5stelle;
    	  
    	  for (var i = 0; i < 10; i++) {

			  if ($("#4stelle").children("#" + i).hasClass("links") && zahl > 0) {
				  
				  $("#4stelle").children("#" + i).removeClass("links").addClass("rechts");
				  zahl = zahl - 1;
						  
			  }
			  
    	  }
    	  
    	  ausgabe();
    	  
    	  }
          // ZEHNTAUSENDER //
    	  
          
    	  function ausgabe() {
    	  
	    	  $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	          $("#anzeige").text($ausgabe);
	          $("#ausgabe").text($ausgabe);
          
    	  }
          

       }

      
      
      //Prüfen ob Vorzeichen negativ  -  (SUBTRAKTION)
      else if($vorzeichen == "-"){
	      // Schleife zum subtrahieren der Vorhandenen Zahl mit der eingegebenen ++ Überprüfung der darüberliegenden Stangen nicht notwendig, da höchsten immer nur eine Kugel weitergegeben wird
	      for(j = 0; j < $("#stangen").children().length; j++){
	
	        //zählerHilfe für den Dezimalumbruch
	        var zählerHilfe =  stellenAusgabe[j] - stellen[j];
	
	        //Schleife zum subtrahieren einer Reihe/Stelle
	        for(i = stellenAusgabe[j]-1; i > zählerHilfe-1; i--)  {
	
	          if($ausgabe < $zahl){
	            $( "#rechne" ).prop("disabled",true);
	            alert("Das Ergebnis der Rechnung darf nicht < 0 sein!")
	            return false
	          }
	
	          //Bedingung das eine rechte Kugel pro Zähler nach Links verschoben wird
	          if ($("#" + j + "stelle").children("#" + i).hasClass("rechts")) {
	
	            $("#" + j + "stelle").children("#" + i).removeClass("rechts").addClass("links");
	
	          }
	
	
	          //Bedingung (das alle Kugeln nach Rechts geschoben werden), wenn die Zehnerstelle vorhanden ist
	            if($("#" + j + "stelle").children("#" + 0).hasClass("links")){
	              $("#" + j + "stelle").children(".kugel").removeClass("links").addClass("rechts");
	              $("#" + j + "stelle").children("#" + 9).removeClass("rechts").addClass("links");
	
	              k = j+1;
	
	              //Eine Kugel von der oberen Reihe wird nach Links verschoben
	              $("#" + k + "stelle").children(".kugel.rechts").first().removeClass("rechts").addClass("links");
	
	            }
	          }
	        
	        //Zwischenergebnis in Anzeige anzeigen
	        $ausgabe = $("#0stelle").children(".rechts").length + $("#1stelle").children(".rechts").length * 10 + $("#2stelle").children(".rechts").length * 100 + $("#3stelle").children(".rechts").length * 1000 + $("#4stelle").children(".rechts").length * 10000;
	        $("#anzeige").text($ausgabe);
	        
	      }

      //Endergebnis in Ausgabe Anzeigen
      $("#ausgabe").text($ausgabe);
      
      }
      
    });
    
    
    
    // EINGABE PRÜFEN / AUSNAHMEBEHANDLUNG //
    
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
    
}); 