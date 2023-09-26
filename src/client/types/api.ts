import type { CartsData } from "svelteCMS/types"

// API ENDPOINTS =============================================================
type ApiUsersEndpoints<Start extends string = "/api/cart"> = `${Start}/update` | `${Start}/delete` | `${Start}/add-item`
/** All api endpoints */
export type ApiEndpoints = ApiUsersEndpoints


// API INPUTS AND OUTPUTS =============================================================
/** update cart */
export type ApiCartUpdate = ApiRequest<CartsData['items'][0],Omit<CartsData,"createdAt">>


// CORE =============================================================
/** Input and output for making request to /admin/api/* */
type ApiRequest<InputData,OutputData> = {
    input:InputData,
    output: {
        error:true
        message:string
    } | {
        error:false
        message:string
        data:OutputData
    }
}