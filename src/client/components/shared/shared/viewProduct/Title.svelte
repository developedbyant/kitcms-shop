<script lang="ts">
    import { CURRENT_PRODUCT } from "client/lib/stores";
    $: product = $CURRENT_PRODUCT
</script>

<h2 class="title">
    {product.title}
</h2>

<style lang="scss">
    .title{
        font-size: 35px;
        font-weight: 800;
        color: var(--headerColor);
        margin-bottom: 10px;
    }
    // Mobile
    /* @media(max-width:1000px){
    } */
</style>