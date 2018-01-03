function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.yourSize();
  this.yourTopping();
  this.setPizzaPrice();
}

Pizza.prototype.yourSize = function() {
  if (this.size === "0"){
    this.sizePrice = 0;
  }if (this.size === "small"){
    this.sizePrice = 10;
  }else if (this.size === "medium"){
    this.sizePrice = 14;
  }else if (this.size === "large"){
    this.sizePrice = 20;
  };
  return this.sizePrice;
}

Pizza.prototype.yourTopping = function(){
  if (this.topping === "0"){
    this.toppingPrice = 0;
  }if (this.topping === "1"){
    this.toppingPrice = 4;
  }else if(this.topping === "4"){
    this.toppingPrice = 8;
  }else if(this.topping === "5"){
    this.toppingPrice = 11;
  };
  return this.toppingPrice;
}

Pizza.prototype.setPizzaPrice = function(){
  return this.toppingPrice + this.sizePrice;
}



exports.pizzaModule = Pizza;
