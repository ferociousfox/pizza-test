var Pizza = require('./../js/scripts.js').pizzaModule;

$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();

    var checkedSize = $("select#pizza-size").val();
    var checkedTopping = $("select#pizza-topping").val();
    var pizza = new Pizza(checkedSize, checkedTopping);

    $("ul#your-pizza").append("<li>You're Pizza will cost $" + pizza.setPizzaPrice() + "</li>");
  });
});
