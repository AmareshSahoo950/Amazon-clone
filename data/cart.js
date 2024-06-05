export let cart = JSON.parse(localStorage.getItem('cart'))
||
[{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2,
},
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}]

//If we don't have any value in the cart in that case the cart will contain null .
// or we can also write is as -
//  if(!cart){
//   cart = [{
//     productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     quantity: 2,
//   },
//   {
//     productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
//     quantity:1
//   }]
//  }

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId)
{
    const productQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value )

    let matchingItem;
    
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId)
      {
        matchingItem = cartItem
      }

    })

    if (matchingItem)     //If object is present then true or else false .
    {
      matchingItem.quantity += productQuantity 
      }
    else 
    {
        cart.push({
        productId,
        quantity:productQuantity
        });
      }
    
    //This is my solution 
    // let b = false
    // cart.forEach((item) => {
    //     if(productId === item.productId)
    //     {
    //       item.quantity +=1
    //       b = true
    //     }  
    //   })

    //    if (!b) {
    //     cart.push({
    //           productId : productId,
    //           quantity:1
    //           });
    //    }

      saveToStorage(); 
 }

 
//when we click on the product's delete link on the checkout page we execute this method . 
export function removeFromCart(productId)
  {
      const newCart = [];

      cart.forEach((cartItem)=>{
          if (cartItem.productId !== productId) {
              newCart.push(cartItem);
          }
      });

      cart = newCart;

      saveToStorage();
    }


//for calculating the cart quantity .
export function calculateCartQuantity()
{  
  let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      })

      return cartQuantity ;  
 } 

 export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}
  