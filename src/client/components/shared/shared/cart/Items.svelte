<script lang="ts">
    import { CART_DATA } from "client/lib/stores";
    import Item from "./Item.svelte";
    $: items = $CART_DATA.lines.nodes
</script>

<div class="items">
    {#each items as item}
        <Item {item}/>
    {/each}
</div>

<style lang="scss">
    .items{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 10px 0px;
        flex: 1;
        overflow-y: scroll;
        &::-webkit-scrollbar{ display: none; }
    }
</style>