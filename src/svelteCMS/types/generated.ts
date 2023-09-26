export type ProductsData = {
    _id:any
    title:string
    slug:string
    description:string
    views:number
    price:number
    priceComp:number
    images:import("svelteCMS/types").AssetData[]
    variants:{key:string,value:string}[]
    tags:TagsData[]
    categories:CategoriesData[]
    updatedAt:Date
    public:boolean
    createdAt:Date
    image:import("svelteCMS/types").AssetData
}
export type TagsData = {
    _id:any
    title:string
    slug:string
}
export type CategoriesData = {
    _id:any
    title:string
    slug:string
    description:string
    image:import("svelteCMS/types").AssetData
}
export type CartsData = {
    _id:any
    createdAt:Date
    updatedAt:Date
    totalPrice:number
    totalItems:number
    items:{ title:string,quantity:number,price:number,variant:string,imageSrc:string,productID:string }[]
}