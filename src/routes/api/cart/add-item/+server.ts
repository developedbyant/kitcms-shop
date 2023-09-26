import database from "svelteCMS/lib/database.server";
import { json } from "@sveltejs/kit";
import { ObjectId } from "mongodb"
import utils from "client/lib/utils/server.utils";
import type { RequestHandler } from "./$types"
import type { ApiCartUpdate } from "client/types";
import type { CartsData } from "svelteCMS/types";

export const POST:RequestHandler = async (event)=> {
    const apiLoad:ApiCartUpdate['input'] = await event.request.json()
    const cookieCartID = event.cookies.get("cart")
    const product = await database.Find.product({ _id:new ObjectId(apiLoad.productID)})
    // if product was not founded
    if(!product){
        // return error
        const badResponse:ApiCartUpdate['output'] = { error:true,message:"Product was not founded" }
        return json(badResponse)
    }
    // else if cookieCartID was not founded on cookies, create new one
    if(!cookieCartID){
        const newCart:Omit<CartsData,"_id"> = {
            totalItems:1,
            createdAt: new Date,
            updatedAt: new Date,
            totalPrice: product.price*apiLoad.quantity,
            items: [apiLoad],
        }
        const insertRes = await database.Insert.cart(newCart)
        const insertedCartID = insertRes.insertedId.toString()
        // set cookie
        utils.cookieSet(event,"cart",insertedCartID)
        const response:ApiCartUpdate['output'] = {
            error:false,message:"Cart was created",data:{ _id:insertedCartID,...newCart}
        }
        return json(response)
    }
    // update cart
    const filter = { _id:new ObjectId(cookieCartID) }
    const cart = await database.Find.cart(filter)
    const cartID = cart._id
    // set new items
    const itemInCart = cart.items.find(data=>data.variant===apiLoad.variant)
    // if item exists in cart, update quantity
    if(itemInCart){
        cart['items'] = cart.items.map(data=>{
            data['quantity'] = data.variant===itemInCart.variant ? data.quantity+apiLoad.quantity : data.quantity
            return data
        })
    }
    // else add to cart
    else cart['items'].push(apiLoad)
    // update updatedAt and totalPrice
    cart['updatedAt'] = new Date
    cart['totalPrice'] = cart.items.reduce((prevPrice,item)=>prevPrice+(item.price*item.quantity),0)
    // remove _id from cart object and update
    delete cart['_id']
    const updateRes = await database.Update.cart(filter,cart)
    if(updateRes.acknowledged){
        const response:ApiCartUpdate['output'] = { error:false,message:"Cart was created",data:{...cart,_id:cartID } }
        return json(response)
    }
    // return error
    const badResponse:ApiCartUpdate['output'] = { error:true,message:"Something went wrong" }
    return json(badResponse)
}