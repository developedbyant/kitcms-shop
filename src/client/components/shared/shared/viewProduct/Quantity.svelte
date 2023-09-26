<script lang="ts">
    export let quantity:number
    import MinusIcon from "client/icons/Minus.svelte";
    import PlusIcon from "client/icons/Plus.svelte";
    function add(){ quantity++ }
    function remove(){ if(quantity>1) quantity-- }
</script>

<div class="quantity">
    <button class="add" on:click={add} on:keypress={add}>
        <PlusIcon />
    </button>
    <input type="number" bind:value={quantity}>
    <button class="remove" on:click={remove} on:keypress={remove}>
        <MinusIcon />
    </button>
</div>

<style lang="scss">
    .quantity{
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--antiBodyBg);
        width: fit-content;
        padding: 7px 13px;
        border-radius: 50px;
        box-shadow: 1px 1px 3px var(--shadow);
    }
    button{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: transparent;
        border: var(--buttonBg) solid 1.5px;
        color: var(--buttonBg);
        fill: var(--buttonBg);
        font-size: 14px;
        font-weight: 600;
        border-radius: 50%;
    }
    input{
        background-color: transparent;
        border: none;
        height: 30px;
        width: 20px;
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        color: var(--textColor);
        &:focus{
            outline: none;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    // Mobile
    @media(max-width:1000px){
        .quantity{
            width: 100%;
            justify-content: space-between;
        }
    }
</style>