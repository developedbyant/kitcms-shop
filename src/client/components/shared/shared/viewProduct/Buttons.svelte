<script lang="ts">
    export let quantity:number
    export let loading:boolean = false
    import { createEventDispatcher } from "svelte";
    import CartIcon from "client/icons/CartShopping.svelte"
    import CreditCardIcon from "client/icons/CreditCard.svelte"
    import Spinner from "client/components/shared/Spinner.svelte";
    import Quantity from "./Quantity.svelte";
    // Variables
    const dispatcher = createEventDispatcher()
    let btnLoading:"buyNow"|"addToCart" = "addToCart"
    $: buyBtnLoading = ( loading && btnLoading==="buyNow" )
    $: addToCartBtnLoading = ( loading && btnLoading==="addToCart" )
    /** Send event add to cart */
    function addToCart(){
        btnLoading = "addToCart"
        loading = true
        dispatcher("addToCart")
    }
    /** Send event buy now */
    function buyNow(){
        btnLoading = "buyNow"
        loading = true
        dispatcher("buyNow")
    }
</script>

<div class="buttons">
    <Quantity bind:quantity/>
    <button class="button" disabled={loading} class:loading on:click={buyNow}>
        {#if buyBtnLoading}
            <Spinner color="white"/>
        {:else}
            <div class="icon">
                <CreditCardIcon size=15/>
            </div>
        {/if}
        Buy now
    </button>
    <button class="button cart" disabled={loading} class:loading on:click={addToCart}>
        {#if addToCartBtnLoading}
            <Spinner color="var(--mainColor)"/>
        {:else}
            <div class="icon">
                <CartIcon size=15/>
            </div>
        {/if}
        Add to cart
    </button>
</div>

<style lang="scss">
    .buttons{
        display: flex;
        align-items: flex-end;
        gap: 15px;
        margin-top: auto;
    }
    .button{
        cursor: pointer;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--buttonColor);
        gap: 10px;
        font-size: 14px;
        font-weight: 600;
        border: none;
        border-radius: 50px;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        padding: 15px;
        &.loading{
            opacity: 80%;
            cursor: not-allowed;
        }
    }
    .button.cart{
        background-color: transparent;
        color: var(--buttonBg);
        border: var(--buttonBg) solid 1.5px;
        fill: var(--buttonBg);
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    // Mobile
    @media(max-width:1000px){
        .buttons{
            margin-bottom: 10px;
            flex-direction: column;
        }
        .button{
            width: 100%;
        }
    }
</style>