<script lang="ts">
    export let data:PageData
    import { viewingProductStore,appStore } from "client/lib/stores";
    import Breadcrumb from "./Breadcrumb.svelte";
    import emblaCarouselSvelte from "embla-carousel-svelte";
    import ReviewsLink from "client/components/shared/ReviewsLink.svelte";
    import Button from "./Button.svelte";
    // icons
    import DiscountIcon from "client/icons/Discount.svelte";
    import CartIcon from "client/icons/CartShopping.svelte";
    import utils from "client/lib/utils";
    import type { ApiCartUpdate } from "client/types";
    import type { PageData } from "./$types";
    import { createToast } from 'svelteCMS/components/toasts/store';
    viewingProductStore.set(data.product)
    $: product = data.product
    $: mainImage = product.image
    $: variants = data.product.variants ? data.product.variants : []
    let currentVariant = data.product.variants ? data.product.variants[0] : { key:"",value:""}
    let addingToCart = false

    /** Add new item to cart */
    async function addToCart() {
        addingToCart = true
        const apiLoad:ApiCartUpdate['input'] = {
            productID:data.product._id,
            title: product.title,
            quantity: 1,
            price: product.price,
            variant: currentVariant.value,
            imageSrc: product.image.src
        }
        const apiResponse:ApiCartUpdate['output'] = await utils.apiRequest("/api/cart/update",apiLoad)
        await utils.wait(500)
        // show message
        createToast({ type:apiResponse.error?"error":"successful",msg:apiResponse.message })
        // if cart was updated, open cart
        if(!apiResponse.error) appStore.update(data=>{ data.cartIsOpen=true ; return data})
        await utils.wait(1000)
        addingToCart = false
    }
</script>

<Breadcrumb />
<div class="product">
    <!-- left Content -->
    <div class="productImages">
        <div class="mainImage">
            <img src={mainImage.src} alt={mainImage.title} style:--imgID={mainImage.id}>
        </div>
        <div class="images" use:emblaCarouselSvelte>
            <div class="imageContainer">
                {#each product.images as image }
                {@const active = mainImage.id===image.id }
                    <div class="image" class:active on:click={()=>mainImage=image} role="none">
                        <img src={image.src} alt={image.title}>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <!-- right Content -->
    <div class="productInfo">
        <h2 class="title">{product.title}</h2>
        <div class="prices">
            <span class="price">${product.price}</span>
            <span class="priceCut">${product.priceComp}</span>
            <div class="discount">
                <DiscountIcon size=15/>
                Save {( (product.price / product.priceComp) * 100 ).toFixed()}%
            </div>
        </div>
        <p class="description">{product.description}</p>
        <ReviewsLink />
        <div class="variants">
            {#each variants as variant}
            {@const active = currentVariant.key===variant.key&&currentVariant.value===variant.value }
                <button class="variant" class:active on:click={()=>currentVariant=variant}>
                    {variant.value}
                </button>
            {/each}
        </div>
        <div class="buttons">
            <Button bind:loading={addingToCart} text="Add to cart" icon={CartIcon} on:click={addToCart}/>
        </div>
    </div>
</div>


<style lang="scss">
    .product{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        max-width: var(--maxWidth);
        width: 95%;
        background-color: var(--antiAppBg);
        padding: 0 10px 10px 0;
        border-radius: 10px;
        box-shadow: 0 0 3px 1px var(--shadow);
        overflow: hidden;
    }
    .productImages{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .mainImage{
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            box-shadow: 1px 2px 2px var(--shadow);
            img{
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
            }
        }
        .images {
            overflow: hidden;
        }
        .imageContainer {
            display: flex;
            gap: 5px;
        }
        .image {
            flex: 0 0 calc(100% / 4 - 4px);
            display: flex;
            min-width: 0;
            overflow: hidden;
            box-shadow: 1px 2px 2px var(--shadow);
            border-radius: 5px;
            cursor: pointer;
            border: 2px solid var(--borderColor);
            &.active,:hover{
                border-color: var(--mainColor);
            }
        }
    }
    // product info
    .productInfo{
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1.5;
        padding: 10px;
    }

    .title{
        font-size: 40px;
        font-weight: 900;
        color: var(--headerColor);
        text-transform: uppercase;
    }
    img{
        width: 100%;
        border-radius: 5px;
        view-transition-name: var(--imgID);
    }
    .description{
        font-size: 15px;
        font-weight: 400;
        color: var(--textColor);
    }
    // prices and discount
    .prices{
        display: flex;
        align-items: center;
        gap: 15px;
        .price,.priceCut{
            font-size: 30px;
            font-weight: 900;
            color: var(--headerColor);
        }
        .priceCut{
            font-weight: 400;
            text-decoration: line-through solid;
            color: var(--successBg);
        }
        .discount{
            display: flex;
            align-items: center;
            gap: 3px;
            padding: 5px;
            border-radius: 6px;
            background-color: var(--mainColor);
            color: #fff;
            fill: #fff;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
    .variants{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        .variant{
            flex-grow: 1;
            cursor: pointer;
            padding: 10px 20px;
            border: 1.5px solid var(--borderColor);
            background-color: var(--appBg);
            color: var(--textColor);
            border-radius: 3px;
            text-transform: capitalize;
        }
        .variant:hover,.variant.active{
            border: 1.5px solid var(--mainColor);
        }
    }
    .buttons{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: auto;
    }

    // on mobile
    @media(max-width:700px){
        .product{
            width: 100%;
            flex-direction: column;
            padding: 0 0 10px 0;
        }
    }
</style>