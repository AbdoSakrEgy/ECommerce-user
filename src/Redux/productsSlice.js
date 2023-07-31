import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  IsSidebarOpen:false,
  productsInCart:[
    // {
    //   "id": 1,
    //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //   "price": 109.95,
    //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      
    //   "rating": {
    //   "rate": 3.9,
    //   "count": 120
    //   },
    //   "repeatNumInCart":1
    // }
  ],
  totalPrice:0,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    openCloseSidebar: (state) => {
      if(state.IsSidebarOpen){
        state.IsSidebarOpen=false
      }else{
        state.IsSidebarOpen=true
      }
    },
    addProductInCart:(state,action)=>{
      // search if addedProduct in productsInCart
      // if true increase repeatNumInCart then replace addedProduct
      // if fulse add repeatNumInCart then push addedProduct
      var addedProduct=action.payload;
      var oldRepeatNumInCart=0;
      var indexOfProductWillReplace=0;

      function containsObject(list , obj) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                oldRepeatNumInCart=list[i].repeatNumInCart;
                indexOfProductWillReplace=i;
                return true;
            }
        }
        return false;
      }

      if(containsObject(state.productsInCart , addedProduct)){
        const newAddedProduct={...addedProduct , repeatNumInCart : oldRepeatNumInCart+1};
        state.productsInCart[indexOfProductWillReplace]=newAddedProduct;
      }else{
        const newAddedProduct={...addedProduct , repeatNumInCart : 1};
        state.productsInCart.push(newAddedProduct);
      }
    },
    removeOneProductFromCart:(state,action)=>{
      for (let i = 0; i < state.productsInCart.length; i++) {
        if(state.productsInCart[i].id === action.payload.id){
          if(state.productsInCart[i].repeatNumInCart > 1){
            let oldRepeatNumInCart=state.productsInCart[i].repeatNumInCart;
            let newObj=state.productsInCart[i];
            newObj={...newObj, repeatNumInCart : oldRepeatNumInCart-1}
            state.productsInCart[i]=newObj;
          }
        }
      }
    },
    removeAllSameProductsByUsingId:(state,action)=>{
      const newProductsInCart=state.productsInCart.filter((product)=>product.id !== action.payload);
      state.productsInCart=newProductsInCart;
    },
    clearProductsInCart:(state)=>{
      state.productsInCart=[]
    },
    totalPriceCalc:(state)=>{
      let totalPrice=0;
      for (let i = 0; i < state.productsInCart.length; i++) {
            totalPrice = totalPrice + (state.productsInCart[i].price * state.productsInCart[i].repeatNumInCart);
      }
      state.totalPrice=totalPrice;
    }
  },
})

// Action creators are generated for each case reducer function
export const 
{ openCloseSidebar,
  addProductInCart,
  removeOneProductFromCart,
  removeAllSameProductsByUsingId,
  clearProductsInCart,
  totalPriceCalc
 } = productsSlice.actions

export default productsSlice.reducer