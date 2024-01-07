export let cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2,
},
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}]

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

  }

export function removeFromCart(productId)
    {
      const newCart = [];

      cart.forEach((cartItem)=>{
          if (cartItem.productId !== productId) {
              newCart.push(cartItem);
          }
      });

      cart = newCart;
    }
  