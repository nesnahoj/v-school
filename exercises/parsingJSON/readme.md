Parsing JSON
03 AUGUST 2015 on JavaScript, Warmup, Programming Principles, Problem Solving
This exercise should help demonstrate how much nicer Angular (and jQuery, for that matter) makes AJAX requests. To demonstrate this, you must do the following in vanilla (plain) JavaScript.

Write a Javascript function called parsePokemon.

Use http://mean.codingcamp.us:6543/pokemon.json as your url for your XHR request to get the big list of pokemon.

The function should parse the JSON and create an array of objects that look like this:

{
    name: 'Charmander',
    resource_uri: 'api/v1/pokemon/8/'
},
{(Another pokemon object)},
{(Another pokemon object)},
{(Another pokemon object)},
...
etc.  
Then make each Pokemon's name show up on a separate line in an HTML document. This means you won't be using node.js to run this JavaScript.

Hints
You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange.
You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. Check out the W3Schools JSON Howto for more information and examples.
The data that comes from the url endpoint above is complex. Notice that the "objects" property is an array, so you'll need to index into it's 1st item in order to get any of the pokemon names (data.objects[0]...);
You'll need to use pure JavaScript to create and add an element to your HTML.

Bob Ziroll


I wanted the list of object to be more user friendly rather than creating an enormous long list that scrolled down forever as it may seem, so I chatted with Dan Hitt one of our instructors and I asked if it could output the list in columns or if it could print the list horizontally.  He said It could work horizontally if we used a span.  He also said he had seen an article or something that used an API with a great deal of data, and they put it out in columns.  Their structure was quite dynamic and adjustable for the number of columns that you would want the data displayed in.

resource_url: https://codepen.io/jawittdesigns/pen/zhCrv
