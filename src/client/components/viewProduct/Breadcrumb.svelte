<script lang="ts">
    import { viewingProductStore } from "client/lib/stores";
    import ArrowIcon from "client/icons/AngleRight.svelte";
    $: product = $viewingProductStore
    $: title = product.title
    $: href = `/products/${product.slug}`
</script>

<nav class="breadcrumb">
    <ol class="links">
        <li><a href="/" class="link">Home</a></li>
        <div class="icon"><ArrowIcon size=12 /></div>
        <li><a href="/products" class="link">Products</a></li>
        <div class="icon"><ArrowIcon size=12 /></div>
        <li><a {href} class="link">{title}</a></li>
    </ol>
</nav>

<style lang="scss">
    .breadcrumb{
        display: flex;
        align-items: center;
        fill: var(--iconColor);
        margin-bottom: 15px;
    }
    .links{
        display: flex;
        align-items: center;
        list-style: none;
        gap: 3px;
    }
    .link{
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: var(--mainColor);
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(2px);
    }
</style>