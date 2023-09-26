import { ObjectId } from "mongodb"
import database from "svelteCMS/lib/database.server";
import type { Handle } from "@sveltejs/kit";

export const clientHooks:Handle = async({event,resolve})=>{   
     // stop hooks if we are viewing admin page
     if(event.url.pathname.startsWith("/admin")) return await resolve(event)
     // else run code
     const cartID = event.cookies.get("cart")  
     if(cartID){
          const cartData = await database.Find.cart({ _id:new ObjectId(cartID) },{})
          // @ts-ignore
          event.locals.cartData = cartData
     }else event.locals.cartData = null
     // Return event
     const response = await resolve(event);
     return response;
}