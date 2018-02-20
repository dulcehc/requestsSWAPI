var numCharacter = 3;
var interval;

function loadDoc() {
  var url = 'https://swapi.co/api/people/' + numCharacter;
  console.log(url);
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = this.response;
      response = JSON.parse(response);
      console.log(Object.keys(response));
      document.getElementById('title').innerHTML = response.name;
      document.getElementById('skin').innerHTML = response.skin_color;
      document.getElementById('btn').value = response.films[0];
      numCharacter++;
      if (numCharacter == 8) {
        console.log('clean interval');
        clearInterval(interval);
      }
    }
  };

  xhttp.open('GET', url, true);
  xhttp.send();
}

function loadFilms(url) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = this.response;
      response = JSON.parse(response);
      console.log(Object.keys(response));
      document.getElementById('films').innerHTML = response.title;

    }
  };

  xhttp.open('GET', url, true);
  xhttp.send();
}

//loadDoc(3);
function characters() {
  console.log('funcion characters');
  interval = setInterval(loadDoc, 2000);

}

characters();

/*var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

myFunction();*/