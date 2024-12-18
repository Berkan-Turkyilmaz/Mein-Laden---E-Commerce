import { createSlice } from "@reduxjs/toolkit"



const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);

    } else {
        return [];
    }
}

const storeAtLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount:0,
    totalAmount:0
}
const calculateTotal = (carts) => {
    const totalAmount = carts.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    const itemCount = carts.reduce((total, cartItem) => total + cartItem.quantity, 0);
    return { totalAmount, itemCount }
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.carts.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.carts.push({ ...item, quantity: 1 });
                
            }
            const { totalAmount, itemCount } = calculateTotal(state.carts)
            state.totalAmount = totalAmount;
            state.itemCount = itemCount
            storeAtLocalStorage(state.carts)

}, removeFromCart: (state, action) => {
    const id = action.payload;
    state.carts = state.carts.filter((cartItem) => cartItem.id !== id);
    storeAtLocalStorage(state.carts)
},
clearCart: (state) => {
    state.carts = [];
    storeAtLocalStorage(state.carts)
},
getCartTotal: (state) => {
    const { totalAmount, itemCount } = calculateTotal(state.carts)
    state.totalAmount = totalAmount;
    state.itemCount = itemCount
},
increaseQuantity: (state, action) => {
    const id = action.payload; 
    const cartItem = state.carts.find((item) => item.id === id);
    if (cartItem) {
        cartItem.quantity += 1; 
        const { totalAmount, itemCount } = calculateTotal(state.carts);
        state.totalAmount = totalAmount;
        state.itemCount = itemCount;
        storeAtLocalStorage(state.carts); 
    }
}
,
decreaseQuantity: (state, action) => {
    const id = action.payload; 
    const cartItem = state.carts.find((item) => item.id === id);
    if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1; 
        } else {
            
            state.carts = state.carts.filter((item) => item.id !== id);
        }
        const { totalAmount, itemCount } = calculateTotal(state.carts);
        state.totalAmount = totalAmount;
        state.itemCount = itemCount;
        storeAtLocalStorage(state.carts); 
    }
}

}})
export const { addToCart, removeFromCart, clearCart, getCartTotal, decreaseQuantity,increaseQuantity } = cartSlice.actions
export default cartSlice.reducer