<script lang="ts">
    export let products:ViewProductData[]
    import Product from "./Product.svelte";
    import type { ViewProductData } from "client/types";
</script>

<div class="products">
    {#each products as product (product._id)}
        <Product {product}/>
    {/each}
</div>

<style lang="scss">
    .products{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
</style>