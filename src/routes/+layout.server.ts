import { ObjectId } from "mongodb"
import database from "svelteCMS/lib/database.server";

export const load = async(event)=>{
    // only run when not viewing admin
    if(!event.url.pathname.endsWith("/admin")){
        const cartID = event.cookies.get("cart") 
        const cartData = await database.Find.cart({ _id:new ObjectId(cartID) })
        return { cartData:cartData?cartData:null }
    }
}