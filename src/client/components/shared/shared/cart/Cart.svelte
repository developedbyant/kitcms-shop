<script lang="ts">
    import { CART_DATA } from "client/lib/stores"
    import { SHOW_CART } from "client/lib/stores"
    import CloseBtn from "./CloseBtn.svelte";
    import Coupon from "./Coupon.svelte";
    import Link from "./Link.svelte"
    import Items from "./Items.svelte";
    /** Close cart */
    function closeCart(e:any){
        const classList = e.target.classList as DOMTokenList
        const close = classList.contains("cart") || classList.contains("closeBtn")
        // close
        if(close) SHOW_CART.set(false)
    }
    $: cartData = $CART_DATA
</script>

<div class="cart" class:active={$SHOW_CART} on:click={closeCart} on:keypress={closeCart}>
    <div class="content">
        <div class="top">
            {#if cartData && cartData.lines.nodes.length>0}
                <span class="title">Cart</span>
                <strong class="price">{cartData.cost.totalAmount.amount} {cartData.cost.totalAmount.currencyCode}</strong>
            {:else}
                <span class="title">Empty Cart</span>
            {/if}
            <CloseBtn />
        </div>
        {#if cartData}
            <Items />
        {/if}
        <div class="bottom">
            {#if cartData && cartData.lines.nodes.length>0}
                <!-- <Coupon /> -->
                <Link href={cartData.checkoutUrl} text="CheckOut"/>
            {:else}
                <Link href="/" text="Add products" />
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .cart{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        padding: 40px 20px;
        background-color: rgba(0,0,0,0%);
        z-index: 10;
        transform: translateX(100%);
        transition: transform ease 0.5s, background-color ease 0.02s;
    }
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--antiBodyBg);
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 1px 2px 3px rgba(0,0,0,10%);
        color: var(--headerColor);
        font-size: 25px;
        font-weight: 800;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: var(--bodyBg);
        overflow: hidden;
        position: relative;
        padding: 20px;
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin: 0 0 0 auto;
        border-radius: 10px;
    }
    .active{
        transform: translateX(0%);
        background-color: rgba(0,0,0,30%);
        transition: transform ease-in-out 0.2s,background-color ease 2s;
    }
    .price{
        font-weight: 800;
        font-size: 20px;
        color: #00800087;
    }
    .bottom{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    // Mobile
    @media(max-width:700px){
        .content{
            max-width: 100%;
        }
    }
</style>