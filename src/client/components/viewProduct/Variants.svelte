<script lang="ts">
    import { fade } from "svelte/transition";
    import { CURRENT_VARIANT,CURRENT_PRODUCT } from "client/lib/stores";
    import Sliders from "client/components/shared/sliders/Sliders.svelte";
    import Slider from "client/components/shared/sliders/Slider.svelte";
    $: variants = $CURRENT_PRODUCT.variants.nodes
    /** Set variant */
    function setVariant(variant:typeof variants[0]){ CURRENT_VARIANT.set(variant) }
</script>

<p class="title">
    Color: <strong>{$CURRENT_VARIANT.title}</strong>
</p>
<Sliders show={5}>
    {#each variants as variant }
        {@const active = variant.id === $CURRENT_VARIANT.id}
        {@const src = variant.image.src.replace(".jpg","_100x100_crop_center.jpg")}
        <Slider>
            <div class="variant" in:fade class:active on:click={()=>setVariant(variant)} on:keypress={()=>setVariant(variant)}>
                <img {src} alt={variant.title}>
            </div>
        </Slider>
    {/each}
</Sliders>

<style lang="scss">
    .title{
        font-size: 15px;
        font-weight: 400;
        color: var(--headerColor);
        margin-bottom: 5px;
        strong{
            font-weight: 800;
            color: var(--strong);
        }
    }
    .variant{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 3px rgba(0,0,0,5%);
        border-radius: 5px;
        overflow: hidden;
        border: var(--antiBodyBg) solid 2px;
        transition: border ease 0.3s;
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
    .variant.active,.variant:hover{
        border: var(--buttonBg) solid 2px;
    }
</style>