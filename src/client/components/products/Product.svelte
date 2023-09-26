<script lang="ts">
    export let product:ViewProductData
    import type { ViewProductData } from "client/types";
    $: href = `/products/${product.slug}`
</script>

<a {href} class="product">
    <img src={product.image.src} alt={product.image.title} style:--imgID={product.image.id}>
    <div class="info">
        <div class="span title">{product.title}</div>
        <span class="price">${product.price}</span>
    </div>
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
            view-transition-name: var(--imgID);
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
    .info{
        width: calc(100% - 20px);
        display: flex;
        align-items: center;
        position: absolute;
        left: 50%; transform: translateX(-50%);
        gap: 5px;
        bottom: 10px;
        padding: 5px 10px;
        backdrop-filter: blur(4px);
        background-color: var(--blurBg);
        border: 1.5px solid var(--borderColor);
        padding: 5px 10px;
        border-radius: 50px;
    }
    .title{
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--blurColor);
    }
    .price{
        font-size: 12px;
        font-weight: 600;
        background-color: var(--successBg);
        color: var(--successColor);
        padding: 2px 4px;
        border-radius: 50px;
    }
    // Mobile
    @media(max-width:700px){
        .product{
            width: calc(100% / 2 - 10px);
        }
    }
</style>