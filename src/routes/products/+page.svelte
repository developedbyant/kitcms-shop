<script lang="ts">
    export let data:PageData
    import PageTitle from "client/components/shared/PageTitle.svelte";
    import Products from "client/components/products/Products.svelte";
    import type { PageData } from "./$types";
    $: products = data.products
</script>

<PageTitle  title="Products" link={{ text:"View more",href:"/products" }}/>
<Products {products}/>