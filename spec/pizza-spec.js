var Pizza = require('./../js/scripts.js').pizzaModule;

describe('Pizza', function(){
  it("should be a new instance of the Pizza object constructor", function(){
    var pie = new Pizza;
    expect(pie).toBeObject();
  })

  it("should be a number when you input pizza size", function(){
    var pie = new Pizza("small", "0");
    expect(pie.setPizzaPrice()).toBeNumber();
  })
  it('should return a number when you select justa topping', function(){
    var pie = new Pizza("0", "1");
    expect(pie.yourTopping()).toEqual(4);
  })
  it('should change price based on pizza size w/o toppings', function(){
    var pie = new Pizza("small");
    expect(pie.yourSize()).toEqual(10);
  })
  it('should test whether selcted pizza has a price', function(){
    var pie = new Pizza("small", "1");
    expect(pie.setPizzaPrice()).toEqual(14);
  });
});
