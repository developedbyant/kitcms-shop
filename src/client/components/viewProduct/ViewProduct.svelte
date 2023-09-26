<script lang="ts">
    export let showBreadcrumb:boolean = true
    // export let loading:boolean
    // export let quantity:number
    import { viewingProductStore } from "client/lib/stores";
    import Breadcrumb from "./Breadcrumb.svelte";
    import Page from "./Page.svelte";
    import Images from "./Images.svelte";
    import RightContent from "./RightContent.svelte";
    import StarsLink from "client/components/shared/ReviewsLink.svelte";
    import Spinner from "client/components/shared/Spinner.svelte";
    // import Variants from "./Variants.svelte";
    import Buttons from "./Buttons.svelte";
    // icons
    import DiscountIcon from "client/icons/Discount.svelte";    
    import CartIcon from "client/icons/CartShopping.svelte"
    import CreditCardIcon from "client/icons/CreditCard.svelte"
    import MinusIcon from "client/icons/Minus.svelte";
    import PlusIcon from "client/icons/Plus.svelte";
    $: product = $viewingProductStore
    $: price = $viewingProductStore.price
    $: priceCut = $viewingProductStore.priceComp
    $: percentage = ( (Number(price) / Number(priceCut)) * 100 ).toFixed()
</script>

{#if showBreadcrumb}
    <Breadcrumb />
{/if}
<Page>
    <Images />
    <RightContent>
        <h2 class="title">{product.title}</h2>
        <StarsLink />
        <div class="prices">
            <span class="price">${product.price}</span>
            <span class="priceCut">${product.priceComp}</span>
            <div class="discount">
                <DiscountIcon size=15/>
                Save {percentage}%
            </div>
        </div>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit accusamus magni nihil veniam tempore harum, quibusdam error fugiat sunt?</p>
    </RightContent>
</Page>

<style lang="scss">
    .title{
        font-size: 35px;
        font-weight: 800;
        color: var(--headerColor);
        margin-bottom: 10px;
    }
    /* prices info */
    .prices{
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
        .price,.priceCut{
            font-size: 30px;
            font-weight: 900;
            color: var(--headerColor);
        }
        .priceCut{
            font-weight: 400;
            text-decoration: line-through solid;
            color: var(--antiHeaderColor);
        }
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
    // description
    .desc{
        font-size: 15px;
        font-weight: 500;
        color: var(--textColor);
        margin-bottom: 10px;
    }
</style>