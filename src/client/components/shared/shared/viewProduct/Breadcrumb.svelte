<script lang="ts">
    import { CURRENT_PRODUCT } from "client/lib/stores";
    import ArrowIcon from "client/icons/AngleRight.svelte";
    $: product = $CURRENT_PRODUCT
    $: title = product.title
    $: href = `/products/${product.handle}`
</script>

<nav class="breadcrumb">
    <ol class="links">
        <li>
            <a href="/" class="link">Home</a>
        </li>
        <ArrowIcon size=12 />
        <li>
            <a href="/products" class="link">Products</a>
        </li>
        <ArrowIcon size=14 />
        <li>
            <a {href} class="link">{title}</a>
        </li>
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
        font-size: 14px;
        font-weight: 600;
        color: var(--mainColor);
    }
</style>