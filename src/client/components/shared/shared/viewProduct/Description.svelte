<script lang="ts">
    import { CURRENT_PRODUCT } from "client/lib/stores";
    $: product = $CURRENT_PRODUCT
</script>

<p class="desc">
    {product.description}
</p>

<style lang="scss">
    .desc{
        font-size: 15px;
        font-weight: 500;
        color: var(--textColor);
        margin-bottom: 10px;
    }
    /* // Mobile
    @media(max-width:1000px){
    } */
</style>