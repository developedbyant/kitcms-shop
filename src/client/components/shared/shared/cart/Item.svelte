<script lang="ts">
    export let item:CartData['lines']['nodes'][0]
    import { CART_DATA } from "client/lib/stores";
    import { fetchPost,type HandleCart } from "api/core";
    import type { CartData } from "client/types";
    $: price = item.merchandise.price.amount
    $: currency = item.merchandise.price.currencyCode

    /** Remove */
    async function remove(){
        item.quantity = item.quantity - 1
        handleChange()
    }
    /** Add */
    function add(){
        item.quantity = item.quantity + 1
        handleChange()
    }

    /** Add */
    async function handleChange(){
        const quantity = item.quantity
        if(quantity<=0){
            const newLinesData = $CART_DATA.lines.nodes.filter(data=>data.id!==item.id)
            CART_DATA.update(data=>{ data['lines']['nodes'] = newLinesData ; return data })
        }
        // Update cart
        const apiLoad:HandleCart['input'] = { name:"handleCart",data:{ quantity,id:item.merchandise.id }}
        const apiRes:HandleCart['output'] = await fetchPost(apiLoad)
        if(apiRes.ok){
            CART_DATA.set(apiRes.data)
        }
    }
</script>

<div class="item">
    <div class="image">
        <img src={item.merchandise.image.src} alt={item.merchandise.title}>
    </div>
    <div class="info">
        <span class="title">
            {item.merchandise.title}
        </span>
        <span class="price">
            {price} {currency}
        </span>
    </div>
    <div class="actions">
        <div class="remove" data-label-left data-label="Remove" on:click={remove} on:keypress={remove}>-</div>
        <input type="number" class="count" bind:value={item.quantity} on:change={handleChange}>
        <div class="add" data-label-left data-label="Add" on:click={add} on:keypress={add}>+</div>
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
        background-color: var(--antiBodyBg);
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
        gap: 5px;
        font-weight: 700;
    }
    .title{
        flex: 1;
        font-size: 16px;
        font-weight: 700;
        color: var(--headerColor);
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
    }
    .remove,.add{
        cursor: pointer;
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
</style>