// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid() {

// Your code goes here!

//}
$("#sizePicker").submit(function makeGrid(){
  event.preventDefault();
  $("#pixelCanvas tr").remove();
  var row = $("#inputHeight").val();
  var column = $("#inputWeight").val();
  //grid sizePicker
  var grid = "";
  for (r = 1; r <= row; r++){
    grid += "<tr>";
    for (c = 1; c <= column; c++){
      grid += "<td></td>";
    }
    grid += "</tr>";
  }
  $("#pixelCanvas").append(grid);
});
//jQuery to draw
$("#pixelCanvas").on("click", "td", function(){
  $(this).css("background-color", $("#colorPicker").val());
});
