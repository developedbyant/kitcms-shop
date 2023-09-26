import type * as GeneratedTypes from "svelteCMS/types/generated";
import db from "svelteCMS/lib/db.server";

type Config<TYPE> = { limit?:number,skip?:number,sort?:{ key: (keyof TYPE), direction:"desc"|"asc" } }

type Filter<Data> = {[key in keyof Data]:any}|{}

type SetData<TYPE> = { [K in keyof TYPE]?: TYPE[K] }

export class Find {
    async product<K extends keyof GeneratedTypes.ProductsData>(filter:Filter<GeneratedTypes.ProductsData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("products").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.ProductsData : Pick<GeneratedTypes.ProductsData, K> & { _id:string }
            return response
        }
        async products<K extends keyof GeneratedTypes.ProductsData>(filter:Filter<GeneratedTypes.ProductsData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.ProductsData>){
            type Response = typeof select extends undefined ? GeneratedTypes.ProductsData : Pick<GeneratedTypes.ProductsData, K> & { _id:string }
            const cursor = db.collection("products").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
    async tag<K extends keyof GeneratedTypes.TagsData>(filter:Filter<GeneratedTypes.TagsData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("tags").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.TagsData : Pick<GeneratedTypes.TagsData, K> & { _id:string }
            return response
        }
        async tags<K extends keyof GeneratedTypes.TagsData>(filter:Filter<GeneratedTypes.TagsData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.TagsData>){
            type Response = typeof select extends undefined ? GeneratedTypes.TagsData : Pick<GeneratedTypes.TagsData, K> & { _id:string }
            const cursor = db.collection("tags").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
    async category<K extends keyof GeneratedTypes.CategoriesData>(filter:Filter<GeneratedTypes.CategoriesData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("categories").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.CategoriesData : Pick<GeneratedTypes.CategoriesData, K> & { _id:string }
            return response
        }
        async categories<K extends keyof GeneratedTypes.CategoriesData>(filter:Filter<GeneratedTypes.CategoriesData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.CategoriesData>){
            type Response = typeof select extends undefined ? GeneratedTypes.CategoriesData : Pick<GeneratedTypes.CategoriesData, K> & { _id:string }
            const cursor = db.collection("categories").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
    async cart<K extends keyof GeneratedTypes.CartsData>(filter:Filter<GeneratedTypes.CartsData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("carts").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.CartsData : Pick<GeneratedTypes.CartsData, K> & { _id:string }
            return response
        }
        async carts<K extends keyof GeneratedTypes.CartsData>(filter:Filter<GeneratedTypes.CartsData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.CartsData>){
            type Response = typeof select extends undefined ? GeneratedTypes.CartsData : Pick<GeneratedTypes.CartsData, K> & { _id:string }
            const cursor = db.collection("carts").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
}

export class Update {
    async product(filter:Filter<GeneratedTypes.ProductsData>,dataToSet:SetData<GeneratedTypes.ProductsData>,){
        return db.collection("products").updateOne(filter,{$set:dataToSet})
    }
    async products(filter:Filter<GeneratedTypes.ProductsData>,dataToSet:SetData<GeneratedTypes.ProductsData>,){
        return db.collection("products").updateMany(filter,{$set:dataToSet})
    }
    async tag(filter:Filter<GeneratedTypes.TagsData>,dataToSet:SetData<GeneratedTypes.TagsData>,){
        return db.collection("tags").updateOne(filter,{$set:dataToSet})
    }
    async tags(filter:Filter<GeneratedTypes.TagsData>,dataToSet:SetData<GeneratedTypes.TagsData>,){
        return db.collection("tags").updateMany(filter,{$set:dataToSet})
    }
    async category(filter:Filter<GeneratedTypes.CategoriesData>,dataToSet:SetData<GeneratedTypes.CategoriesData>,){
        return db.collection("categories").updateOne(filter,{$set:dataToSet})
    }
    async categories(filter:Filter<GeneratedTypes.CategoriesData>,dataToSet:SetData<GeneratedTypes.CategoriesData>,){
        return db.collection("categories").updateMany(filter,{$set:dataToSet})
    }
    async cart(filter:Filter<GeneratedTypes.CartsData>,dataToSet:SetData<GeneratedTypes.CartsData>,){
        return db.collection("carts").updateOne(filter,{$set:dataToSet})
    }
    async carts(filter:Filter<GeneratedTypes.CartsData>,dataToSet:SetData<GeneratedTypes.CartsData>,){
        return db.collection("carts").updateMany(filter,{$set:dataToSet})
    }
}

export class Delete {
    async product(filter:Filter<GeneratedTypes.ProductsData>){
        return db.collection("products").deleteOne(filter)
    }
    async products(filter:Filter<GeneratedTypes.ProductsData>){
        return db.collection("products").deleteMany(filter)
    }
    async tag(filter:Filter<GeneratedTypes.TagsData>){
        return db.collection("tags").deleteOne(filter)
    }
    async tags(filter:Filter<GeneratedTypes.TagsData>){
        return db.collection("tags").deleteMany(filter)
    }
    async category(filter:Filter<GeneratedTypes.CategoriesData>){
        return db.collection("categories").deleteOne(filter)
    }
    async categories(filter:Filter<GeneratedTypes.CategoriesData>){
        return db.collection("categories").deleteMany(filter)
    }
    async cart(filter:Filter<GeneratedTypes.CartsData>){
        return db.collection("carts").deleteOne(filter)
    }
    async carts(filter:Filter<GeneratedTypes.CartsData>){
        return db.collection("carts").deleteMany(filter)
    }
}

export class Insert {
     async product(data:Omit<GeneratedTypes.ProductsData,"_id">){
            return db.collection("products").insertOne(data)
        }
     async products(data:Omit<GeneratedTypes.ProductsData,"_id">[]){
            return db.collection("products").insertMany(data)
        }
     async tag(data:Omit<GeneratedTypes.TagsData,"_id">){
            return db.collection("tags").insertOne(data)
        }
     async tags(data:Omit<GeneratedTypes.TagsData,"_id">[]){
            return db.collection("tags").insertMany(data)
        }
     async category(data:Omit<GeneratedTypes.CategoriesData,"_id">){
            return db.collection("categories").insertOne(data)
        }
     async categories(data:Omit<GeneratedTypes.CategoriesData,"_id">[]){
            return db.collection("categories").insertMany(data)
        }
     async cart(data:Omit<GeneratedTypes.CartsData,"_id">){
            return db.collection("carts").insertOne(data)
        }
     async carts(data:Omit<GeneratedTypes.CartsData,"_id">[]){
            return db.collection("carts").insertMany(data)
        }
}
export default { Find:new Find,Update:new Update,Delete:new Delete,Insert:new Insert }