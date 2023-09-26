<script lang="ts">
    export let product:HomeProducts['nodes'][0]
    import type { HomeProducts } from "client/types";
    import { fade } from "svelte/transition";
    $: href = `/products/${product.handle}`
    $: imageSrc = product.featuredImage && product.featuredImage.url || "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
</script>

<a {href} class="product" in:fade="{{ duration:500 }}">
    <img src={imageSrc} alt={product.title}>
</a>

<style lang="scss">
    .product{
        width: calc(100% / 4 - 12px);
        display: flex;
        overflow: hidden;
        position: relative;
        background-color: var(--antiBodyBg);
        box-shadow: 1px 2px 3px var(--shadow);
        border-radius: 10px;
        position: relative;
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
    /* .like{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .2);
        backdrop-filter: blur(20px);
        box-shadow: 1px 2px 3px var(--shadow);
        fill: #c87d7d;
        position: absolute;
        left: 10px;
        bottom: 10px;
    } */
    // Mobile
    @media(max-width:700px){
        .product{
            width: calc(100% / 2 - 10px);
        }
    }
</style>