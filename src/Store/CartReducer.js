const INITIAL_STATE = {
    cartCounter : 0
}
const CartReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
     case "CART_COUNT" :
        return action.payload;
     default:
        return state;   
   }
}
export default CartReducer ; 