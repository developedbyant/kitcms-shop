export type * from "./api"
import type { PageData as RootType } from "../../../.svelte-kit/types/src/routes/$types"
import type { PageData as ProductData } from "../../../.svelte-kit/types/src/routes/products/[slug]/$types"

export type ViewProductData = RootType['products'][0]
export type ProductViewerData = ProductData['product']

export type DynamicTypes = {
    productData:RootType['products']
    viewProductData:ProductData['product']
}