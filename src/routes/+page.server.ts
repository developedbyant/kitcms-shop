import database from "svelteCMS/lib/database.server";
import type { PageServerLoad } from "./$types";

export const load = async()=>{
    const products = await database.Find.products({},{ title:true,slug:true,image:true,price:true,priceComp:true },{ limit:10 })
    return { products }
}