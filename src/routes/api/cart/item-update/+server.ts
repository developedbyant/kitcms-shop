import database from "svelteCMS/lib/database.server";
import { json } from "@sveltejs/kit";
import { ObjectId } from "mongodb"
import utils from "client/lib/utils/server.utils";
import type { RequestHandler } from "./$types"
import type { ApiCartItemUpdate } from "client/types";
import type { CartsData } from "svelteCMS/types";

export const POST:RequestHandler = async (event)=> {
    const apiLoad:ApiCartItemUpdate['input'] = await event.request.json()
    const cookieCartID = event.cookies.get("cart")
    const product = await database.Find.product({ _id:new ObjectId(apiLoad.productID)})
    // if product was not founded
    if(!product){
        // return error
        const badResponse:ApiCartItemUpdate['output'] = { error:true,message:"Product was not founded" }
        return json(badResponse)
    }
    // update cart
    const filter = { _id:new ObjectId(cookieCartID) }
    const cart = await database.Find.cart(filter)
    const cartID = cart._id
    const itemInCart = cart.items.find(data=>data.variant===apiLoad.variant&&data.productID===apiLoad.productID)
    // if item was not founded in cart, return error
    if(!itemInCart){
        // return error
        const badResponse:ApiCartItemUpdate['output'] = { error:true,message:"Item was not founded in cart" }
        return json(badResponse)
    }
    // remove item from cart
    if(apiLoad.quantity<=0){
        cart['items'] = cart.items.filter(data=>(data.variant!==apiLoad.variant || data.productID!==apiLoad.productID))
    }
    // update cart
    cart['items'] = cart.items.map(data=>{
        return data.variant===apiLoad.variant&&data.productID===apiLoad.productID ? apiLoad : data
    })
    // if cart does not have any item, delete cart
    if(cart.items.length===0){
        utils.cookieDelete(event,"cart")
        await database.Delete.cart(filter)
        const response:ApiCartItemUpdate['output'] = { error:false,message:"Cart was created",data:null }
        return json(response)
    }
    // update updatedAt and totalPrice
    cart['totalItems'] = cart.items.reduce((prevNum,item)=>prevNum+1,0)
    cart['updatedAt'] = new Date
    cart['totalPrice'] = cart.items.reduce((prevPrice,item)=>prevPrice+(item.price*item.quantity),0)
    // remove _id from cart object and update
    delete cart['_id']
    const updateRes = await database.Update.cart(filter,cart)
    if(updateRes.acknowledged){
        const response:ApiCartItemUpdate['output'] = { error:false,message:"Cart was created",data:{...cart,_id:cartID } }
        return json(response)
    }
    // // return error
    const badResponse:ApiCartItemUpdate['output'] = { error:true,message:"Something went wrong" }
    return json(badResponse)
}