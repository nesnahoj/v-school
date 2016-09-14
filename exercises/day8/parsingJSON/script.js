var pokemonParse = function(pokemonArr) {
  for(var i = 0; i < pokemonArr.length; i++) {
    var element = document.createElement('li');
    var content = document.createTextNode(pokemonArr[i].name);
    element.appendChild(content);
    document.getElementById('myList').appendChild(element);
  }
};

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    var data = xhr.responseText;
    var jsonData = JSON.parse(data);
    var pokemon = (jsonData.objects[0].pokemon);
    pokemonParse(pokemon);
  }
};

document.getElementById("btn").addEventListener("click", function() {
  xhr.open("GET", "http://mean.codingcamp.us:6543/pokemon.json", true);
  xhr.send();
});
