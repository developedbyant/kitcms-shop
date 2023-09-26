export const load = async(event)=>{
    const cartData = event.locals.cartData
    return { cartData }
}