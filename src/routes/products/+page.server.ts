import database from "svelteCMS/lib/database.server";
import type { PageServerLoad } from "./$types";

export const load = async()=>{
    const products = await database.Find.products({},undefined,{ limit:10,sort:{key:"createdAt",direction:"desc"} })
    return { products }
}