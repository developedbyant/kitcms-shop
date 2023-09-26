import type { ApiEndpoints } from "client/types"

export default new class Utils {

    /** Wait for given time */
    wait(milliseconds:number){ return new Promise(r=>setTimeout(r,milliseconds))}

    /** Make api request */
    async apiRequest(apiUrl:ApiEndpoints,apiLoad:{[key:string]:any}|FormData) {
        const isAFile = apiLoad instanceof FormData        
        const requestHeaders = isAFile ? {} : { "Content-Type":"application/json" } as any        
        const requestBody = isAFile ? apiLoad : JSON.stringify(apiLoad)
        const request = await fetch(apiUrl,{
            method:"POST",
            headers:requestHeaders,
            body:requestBody
        })
        return request.json()
    }
}