function numberOfProudctsInCart(arr) {
    if (arr.length !== 0) {
        let productsNumber = 0;
        for (let i = 0; i < arr.length; i++) {
            productsNumber = productsNumber + arr[i].repeatNumInCart;
        }
        return productsNumber;
    } else {
        return 0;
    }
}
export default numberOfProudctsInCart;