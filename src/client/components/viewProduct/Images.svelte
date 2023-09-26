<script lang="ts">
    import { fade } from "svelte/transition";
    import { CURRENT_PRODUCT,CURRENT_VARIANT,VIEW_IMAGE } from "client/lib/stores";
    import Sliders from "client/components/shared/sliders/Sliders.svelte";
    import Slider from "client/components/shared/sliders/Slider.svelte";
    $: product = $CURRENT_PRODUCT
    $: images = product.images.nodes
    $: mainImageSrc = $CURRENT_VARIANT.image.src
    // Set main image src when click on image
    function setMainImage(src:string){
        mainImageSrc = src
    }
    // Set main image src when variant changes
    $: if($CURRENT_VARIANT){ setMainImage($CURRENT_VARIANT.image.src)}
</script>

<div class="main">
    <div class="mainImage" on:click={()=>VIEW_IMAGE.set(mainImageSrc)} on:keypress={()=>VIEW_IMAGE.set(mainImageSrc)} in:fade="{{ duration:500 }}">
        <img src={mainImageSrc} alt={product.title}>
    </div>
    <Sliders>
        {#each images as image}
            {@const active = mainImageSrc===image.src}
            {@const src = image.src.replace(".jpg","_100x100_crop_center.jpg")}
            <Slider>
                <div class="image" class:active on:click={()=>setMainImage(image.src)} on:keypress={()=>setMainImage(image.src)} in:fade="{{ duration:500 }}">
                    <img {src} alt={product.title}>
                </div>
            </Slider>
        {/each}
    </Sliders>
</div>

<style lang="scss">
    .main{
        flex: 0.5;
        position: relative;
        overflow: hidden;
    }
    .mainImage{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        overflow: hidden;
        img{
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
        }
    }
    .image{
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 1px 1px 3px rgba(0,0,0,5%);
        &:hover,&.active{
            border: var(--buttonBg) solid 2px;
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>