export const cart = [];

export function addToCart(productId, cartQuantity){
  let quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    document.querySelector(`.js-quantity-selector-${productId}`).value = '1';
    
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if (matchingItem){
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        // productId: productId,
        // quantity: quantity
        productId,
        quantity
      });
    };
    console.log(cart)

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
};