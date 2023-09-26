<script lang="ts">
    export let data:PageData
    import homeImageSrc from "client/images/banners/home.webp"
    import HomeImage from "client/components/shared/HomeImage.svelte";
    import PageTitle from "client/components/shared/PageTitle.svelte";
    import Products from "client/components/products/Products.svelte";
    import type { PageData } from "./$types";
    $: products = data.products
</script>

<HomeImage src={homeImageSrc} href="/" title="SvelteShop" subTitle="" text="Example site of how to create a online store using svelteCMS."/>
<PageTitle  title="Products" link={{ text:"View more",href:"/products" }}/>
<Products {products}/>