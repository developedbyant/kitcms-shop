<script lang="ts">
    export let data:PageData
    import PageTitle from "client/components/shared/PageTitle.svelte";
    import Products from "client/components/products/Products.svelte";
    import type { PageData } from "./$types.js";
    $: products = data.products
    $: slug = data.slug
</script>

<PageTitle title={slug}/>
<Products {products}/>