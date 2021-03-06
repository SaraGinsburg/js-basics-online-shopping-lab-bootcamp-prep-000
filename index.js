var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(100*Math.random())
  var obj = {[item]: price}

  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart(){
  if (cart.length==0){
    console.log("Your shopping cart is empty.")
  }else {
  var str="In your cart, you have "
  for (var i = 0; i < cart.length;  i++) {
    for (var item in cart[i]) {
      str += item + " at $" + cart[i][item]+(i===cart.length-1 ? '.':', ')
    }
    }
    console.log(str)
  }
}

function removeFromCart(itemToRemove){
  for (var i = 0; i < cart.length;  i++) {
      if (cart[i].hasOwnProperty(itemToRemove)){
        cart.splice(i, 1);
        return cart;
      }

  }
  console.log('That item is not in your cart.')
}


function placeOrder(cardNumber){

if (cardNumber === undefined){
  console.log('We don\'t have a credit card on file for you to place your order.')
} else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
}
