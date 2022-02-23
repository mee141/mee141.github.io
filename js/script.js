/* JAVASCTIPT CODE OM GEGEVENS UIT BUIENRADER TE KRIJGEN */
var xmlhttp = new XMLHttpRequest(); // Een nieuw XMLHttpRequest
xmlhttp.onreadystatechange = function() {// Als het request een respons geeft
  if(this.readyState == 4 && this.status == 200) {// Respons is valide
    var data = JSON.parse(this.responseText);// Parse de JSON data
          
    //HIERONDER ZET JE CODE OM GEGEVENS UIT DE JSON BESTAND TE HALEN EN AAN ELEMENT TE KOPPELEN
      document.getElementById("1temperature").innerHTML = data.actual.stationmeasurements[1].temperature;
      document.getElementById("25temperature").innerHTML = data.actual.stationmeasurements[25].temperature;
      document.getElementById("28temperature").innerHTML = data.actual.stationmeasurements[28].temperature;
      document.getElementById("32temperature").innerHTML = data.actual.stationmeasurements[32].temperature;

      document.getElementById("1humidity").innerHTML = data.actual.stationmeasurements[1].humidity;
      document.getElementById("25humidity").innerHTML = data.actual.stationmeasurements[25].humidity;
      document.getElementById("28humidity").innerHTML = data.actual.stationmeasurements[28].humidity;
      document.getElementById("32humidity").innerHTML = data.actual.stationmeasurements[32].humidity;
      
      document.getElementById("1weatherdescription").innerHTML = data.actual.stationmeasurements[1].weatherdescription;
      document.getElementById("32weatherdescription").innerHTML = data.actual.stationmeasurements[32].weatherdescription;
      document.getElementById("28weatherdescription").innerHTML = data.actual.stationmeasurements[28].weatherdescription;
      document.getElementById("25weatherdescription").innerHTML = data.actual.stationmeasurements[25].weatherdescription;
    }
};
xmlhttp.open("GET", "https://data.buienradar.nl/2.0/feed/json", true);// Zet een verbinding op naar Buienradar
xmlhttp.send();// Verzend het request