import database from "svelteCMS/lib/database.server";

export const load = async(event)=>{
    const slug = event.params.slug
    const products = await database.Find.products({ "categories.slug":slug},undefined,{ limit:10 } )
    return { products,slug }
}