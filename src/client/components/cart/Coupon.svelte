<script lang="ts">
    export let coupon:string = ""
</script>

<div class="flex">
    <input type="text" placeholder="Coupon code..." bind:value={coupon}/>
    <button on:click on:keypress>Add</button>
</div>

<style lang="scss">
    .flex{
        width: 100%;
        display: flex;
        align-items: center;
    }
    input{
        flex: 1;
        border: none;
        border-radius: 5px 0px 0px 5px;
        padding: 10px 15px;
        box-shadow: 1px 1px 3px var(--shadow);
        background-color: var(--appBg);
        font-size: 14px;
        font-weight: 600;
        color: var(--textColor);
        transition: box-shadow ease-in 0.3s;
        &:focus{
            outline: none;
            box-shadow: 0 0 3px 2px var(--shadow);
        }
    }
    input::placeholder{
        font-size: 14px;
        font-weight: 600;
        color: var(--textColor);
    }
    button{
        cursor: pointer;
        border: none;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 15px;
        font-weight: 600;
        padding: 10px;
        border-radius: 0px 5px 5px 0px;
    }
</style>