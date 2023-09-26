import { error } from "@sveltejs/kit";
import database from "svelteCMS/lib/database.server";

export const load = async(event)=>{
    const slug = event.params.slug
    const product = await database.Find.product({ slug },{ title:true,description:true,slug:true,image:true,images:true,price:true,priceComp:true,variants:true })
    // throw error if product was not founded
    if(!product) throw error(404,{ message:"Product not founded"})
    // return data
    const products = await database.Find.products({},{ title:true,description:true,slug:true,image:true,price:true,priceComp:true },{ limit:10,sort:{key:"createdAt",direction:"desc"} })
    return { product,products }
}