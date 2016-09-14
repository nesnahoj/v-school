var pokemonParse = function(pokemonArr) {
  for(var i = 0; i < pokemonArr.length; i++) {
    var element = $("<ul><span class='names'></span></ul>");
    element.text(pokemonArr[i].name);
    $("#myList").append(element);
  }
};

// $(function($) {
//     var num_cols = 3,
//     container = $('.split-list'),
//     listItem = 'li',
//     listClass = 'sub-list';
//     container.each(function() {
//         var items_per_col = new Array(),
//         items = $(this).find(listItem),
//         min_items_per_col = Math.floor(items.length / num_cols),
//         difference = items.length - (min_items_per_col * num_cols);
//         for (var i = 0; i < num_cols; i++) {
//             if (i < difference) {
//                 items_per_col[i] = min_items_per_col + 1;
//             } else {
//                 items_per_col[i] = min_items_per_col;
//             }
//         }
//         for (var i = 0; i < num_cols; i++) {
//             $(this).append($('<ul ></ul>').addClass(listClass));
//             for (var j = 0; j < items_per_col[i]; j++) {
//                 var pointer = 0;
//                 for (var k = 0; k < i; k++) {
//                     pointer += items_per_col[k];
//                 }
//                 $(this).find('.' + listClass).last().append(items[j + pointer]);
//             }
//         }
//     });
// });

$("button").click(function() {
  $.ajax({url:
    "http://mean.codingcamp.us:6543/pokemon.json",
    success: function(result) {
      // console.log(result);
      var pokemon = (result.objects[0].pokemon);
      pokemonParse(pokemon);
    }
  })
});
