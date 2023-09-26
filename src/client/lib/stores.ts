import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { DynamicTypes } from "client/types";

/** currently viewing product */
export const viewingProductStore:Writable<DynamicTypes['viewProductData']> = writable()

/** project store with basic information/stages */
export const appStore:Writable<{
    navIsOpen:boolean
    cartIsOpen:boolean
}> = writable({ navIsOpen:false,cartIsOpen:false })

/** set meta tags */
export const metaTagsStore:Writable<{
    appName:string
    favicon?:string
    url?:string
    title?:string
    description?:string
    image?:string
    ogType?:"website"|"article"
}> = writable({ appName:"svelteCMS" })
