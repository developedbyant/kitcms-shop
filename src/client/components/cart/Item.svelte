<script lang="ts">
    export let item:CartsData['items'][0]
    export let updatingItem:CartsData['items'][0]
    import { createEventDispatcher } from "svelte";
    import type { CartsData } from "svelteCMS/types/generated"
    const dispatch = createEventDispatcher()
    $: loading = updatingItem.productID === item.productID && updatingItem.variant=== item.variant
    
    /** handle quantity change */
    async function changeQuantify(action:"add"|"remove"){
        item.quantity = action==="add" ? item.quantity + 1 : item.quantity - 1
        // if quantity is 0 or less, remove item from cart
        if(item.quantity<=0) dispatch("remove",item)
        // send change event when quantity change
        dispatch("update",item)
    }
</script>

<div class="item">
    <div class="image">
        <img src={item.imageSrc} alt={item.title}>
    </div>
    <div class="info">
        <span class="title">{item.title}</span>
        <span class="variant">{item.variant}</span>
        <span class="price">{item.price}</span>
    </div>
    <div class="actions" class:loading>
        <button class="remove" data-label-left data-label="Remove" on:click={()=>changeQuantify("remove")}>-</button>
        <input type="number" class="count" bind:value={item.quantity} on:change={()=>dispatch("update",item)}>
        <button class="add" data-label-left data-label="Add" on:click={()=>changeQuantify("add")}>+</button>
    </div>
</div>

<style lang="scss">
    .item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 10px;
        border-radius: 10px;
        background-color: var(--appBg);
        box-shadow: 1px 2px 3px rgba(0,0,0,5%);
    }
    .image{
        min-width: 60px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 1px 2px 3px rgba(0,0,0,15%);
    }
    img{
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%
    }
    .info{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
        font-weight: 700;
    }
    .title{
        flex: 1;
        font-size: 16px;
        font-weight: 500;
        color: var(--headerColor);
    }
    .variant{
        flex: 1;
        font-size: 15px;
        font-weight: 900;
        color: var(--textColor);
    }
    .price{
        font-weight: 800;
        font-size: 15px;
        color: #00800087;
    }
    .actions{
        display: flex;
        align-items: center;
        border: solid 1.5px rgba(0,0,0,30%);
        padding: 3px;
        border-radius: 40px;
        box-shadow: 1px 2px 3px rgba(0,0,0,5%);
        position: relative;
        &.loading{
            animation: loading 0.6s linear infinite alternate;
            pointer-events: none;
            cursor: not-allowed;
        }
    }
    .remove,.add{
        cursor: pointer;
        border: none;
        font-size: 15px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        padding: 5px;
        border-radius: 50%;
        background-color: rgba(0,0,0,5%);
        color: white;
        transition: scale ease-in-out 0.4s;
        box-shadow: 1px 2px 3px rgba(0,0,0,5%);
        &:hover{ scale: 1.05;}
    }
    .remove{
        background-color: #ff000030;
    }
    .add{
        background-color: rgba(0,0,0,15%);
    }
    .count{
        width: 25px;
        border: none;
        background-color: transparent;
        font-size: 15px;
        font-weight: 800;
        text-align: center;
        color: var(--textColor);
        &:focus{ outline: none; }
    }
    .count::-webkit-outer-spin-button,
    .count::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @keyframes loading {
        from { box-shadow: 0 0 2px 2px var(--mainColor); }
        to { box-shadow: 0 0 2px 2px var(--borderColor); }
    }
</style>