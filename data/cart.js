export const cart = []

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
