(function(){
  const model = {
    init() {
      // define a menu for each pizza type
      const menu = [{topping: 'neapolitan', price: 7},
                   {topping: 'chicago', price: 7.5},
                   {topping: 'new-york', price: 7},
                   {topping: 'sicilian', price: 7.5},
                   {topping: 'greek', price: 7.5}]
      // define a storage 
      this.storage = new Map();
      let storage = this.storage;
      for (let pizza of menu){
        pizza.count = 0;
        storage.set(pizza.topping, pizza);
      }
    },
    updatePizzaCount(topping, newCount) {
      this.storage.get(topping).count = newCount;
    },
    getPizzaCount(topping){
      return this.storage.get(topping).count;
    },
    getPizzaPrice(topping){
      return this.storage.get(topping).price;
    },
    increaseCountByOne(topping){
      this.storage.get(topping).count++;
    },
    decreaseCountByOne(topping){
      this.storage.get(topping).count--;
    },
    resetCount(topping){
      this.storage.get(topping).count = 0;
    }
  };
  const octopus = {
    init(){
      model.init();
      view.init();
      viewShowOrder.init();
      viewShowTotal.init();
    },
    getCount(topping){
      return model.getPizzaCount(topping);
    },
    getPrice(topping){
      return model.getPizzaPrice(topping);
    },
    getToppingList(){
      return model.storage.keys();
    },
    updateCount(topping, newCount){
      model.updatePizzaCount(topping, newCount);
      viewShowOrder.render();
      viewShowTotal.render();
    },
    createListItem(num, topping){
      str = '';
      while (num > 0){
        str+=`<li>Pizza topped with ${topping} <button class="${topping}" id="delete">x</button></li>`;
        num--;
      }
      return str;
    },
    decreaseCountByOne(topping){
      model.decreaseCountByOne(topping);
      viewShowOrder.render();
      view.render();
      viewShowTotal.render();
    },
    reset(){
      for(let topping of octopus.getToppingList()){
        model.resetCount(topping);
      }
      view.render();
      viewShowTotal.render();
      viewShowOrder.render();
    }
  };
  
  const view = {
    init(){
      for( let topping of octopus.getToppingList()) {
        this[topping] = document.getElementById(topping);
        this[topping].onchange = function(event){
          octopus.updateCount(topping, event.target.value);
        }
      }
      this.render();
    },
    render(){
      for(let topping of octopus.getToppingList()){
        (octopus.getCount(topping) > 0) ? this[topping].value = octopus.getCount(topping) : this[topping].value='';
      }
    }
  };
  
  const viewShowOrder = {
    init(){
      this.display = document.getElementById('display');
      this.display.onclick = function(event){
        if(event.target.tagName === "BUTTON"){
          octopus.decreaseCountByOne(event.target.className);
        }
      }
      viewShowOrder.render();
    },
    render(){
      let orders = ''
      for (let topping of octopus.getToppingList()){
        orders += octopus.createListItem(octopus.getCount(topping), topping)
      }
      this.display.innerHTML = orders;
    }
  };
        
  const viewShowTotal = {
    init(){
      this.total = document.getElementById('total-div');
      this.reset = document.getElementById('reset-order');
      this.reset.onclick = octopus.reset;
      viewShowTotal.render();
    },
    render(){
      let total = 0;
      const TAX = 1.06;
      for(let topping of octopus.getToppingList()){
        total += octopus.getPrice(topping)*octopus.getCount(topping);
      }
      this.total.innerHTML = `$${(total * TAX).toFixed(2)}`;
    }
  }
  octopus.init();
})();

// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

//when pressing enter focus to the next input
$(document).on('keypress', 'input', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(document.activeElement) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});