<script lang="ts">
    export let products:HomeProducts
    import type { HomeProducts } from "client/types";
    import Product from "./Product.svelte";
</script>

<div class="products">
    {#each products.nodes as product}
        <Product {product}/>
    {/each}
</div>

<style lang="scss">
    .products{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 20px;
    }
</style>