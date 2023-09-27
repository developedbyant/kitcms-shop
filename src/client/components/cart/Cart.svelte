<script lang="ts">
    import { appStore,cartStore } from "client/lib/stores";
    import Coupon from "./Coupon.svelte";
    import XIcon from "client/icons/X.svelte";
    import Item from "./Item.svelte";
    import type { CartsData } from "svelteCMS/types"
    import type { ApiCartItemUpdate } from "client/types";
    import utils from "client/lib/utils";
    import { createToast } from "svelteCMS/components/toasts/store";
    $: cartData = $cartStore
    $: open = $appStore.cartIsOpen
    let closedAnimation = false
    let updatingItem:CartsData['items'][0] = {} as any

    /** open cart */
    const closeCart = (e:MouseEvent)=>{
        const target = e.target as HTMLDivElement|HTMLButtonElement
        const runFunc = target.classList.contains("closeBtn") || target.classList.contains("cart") || target.classList.contains("btn")
        // stop function
        if(!runFunc) return
        // run close
        closedAnimation = true
        setTimeout(()=>{
            appStore.update(data=>{ data['cartIsOpen']=false ; return {...data}})
            closedAnimation = false
        },500)
    }

    /** Remove item from cart */
    function itemRemove(e:any){
        const item:CartsData['items'][0] = e.detail
        const newItems = cartData!.items.filter(data=>data.variant!==item.variant)
        cartData!.items = [...newItems]
    }

    /** update item in cart */
    async function itemUpdate(e:any) {
        const item:CartsData['items'][0] = e.detail
        // set item being updated
        updatingItem = item
        // make request
        const apiLoad:ApiCartItemUpdate['input'] = item
        const apiResponse:ApiCartItemUpdate['output'] = await utils.apiRequest("/api/cart/item-update",apiLoad)
        // show error
        if(apiResponse.error) createToast({ type:"error",msg:apiResponse.message })
        // else set new cart data
        else cartStore.set(apiResponse.data)
        await utils.wait(500)
        updatingItem = {} as any
    }
</script>

{#if $appStore.cartIsOpen}
    <div class="cart" class:open class:closedAnimation on:click={closeCart} role="none">
        <div class="content">
            <div class="titleHeader">
                <p class="title">
                    {#if cartData}My cart{:else}Empty cart{/if}
                </p>
                <button class="closeBtn" on:click={closeCart}>
                    <XIcon size=18/>
                </button>
            </div>
            <div class="items">
                {#if cartData}
                    {#each cartData.items as item (item.productID+item.variant) }
                        <Item {updatingItem} {item} on:remove={itemRemove} on:update={itemUpdate}/>
                    {/each}
                {/if}
            </div>
            <div class="actionButtons">
                {#if cartData}<Coupon />{/if}
                <a href="/products" class="btn" on:click={closeCart}>Add products</a>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    :global(.closeBtn svg){ pointer-events: none; }
    .cart{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.2);
        display: flex;
        justify-content: flex-end;
        &.open{ animation: fadeIn 0.5s;}
        &.open .content{ animation: openIn 0.3s;}
        &.closedAnimation{ animation: fadeOut 0.5s forwards; }
        &.closedAnimation .content{ animation: closeOut 0.3s forwards; }
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 500px;
        width: 95%;
        background-color: var(--antiAppBg);
        padding: 20px;
    }
    // title header
    .titleHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        .title{
            font-size: 18px;
            font-weight: 800;
        }
        .closeBtn{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border: 1px solid var(--borderColor);
            background-color: var(--appBg);
            fill: var(--iconColor);
            border-radius: 2px;
            box-shadow: 1px 2px 2px var(--shadow);
        }
    }
    // cart items
    .items{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        scroll-behavior: smooth;
        &::-webkit-scrollbar{ display: none;}
    }
    // buttons
    .actionButtons{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .btn{
        cursor: pointer;
        border: none;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 15px;
        font-weight: 600;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        box-shadow: 1px 1px 3px var(--shadow);
    }
    @keyframes fadeIn{
        from { opacity: 0%;}
        to { opacity: 100%;}
    }
    @keyframes openIn{
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    @keyframes fadeOut{
        from { opacity: 100%;}
        to { opacity: 0%;}
    }
    @keyframes closeOut{
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }
    // Mobile
    @media(max-width:700px){
        .content{
            max-width: 100%;
            width: 100%;
        }
    } 
</style>