<script lang="ts">
    import { appStore } from "client/lib/stores";
    import CloseIcon from "client/icons/X.svelte"
    /** Close nav */
    function closeNav(){ appStore.update(data=>{ data['navIsOpen']=false ; return {...data} }) }
</script>

<button class="close" on:click={closeNav}>
    <CloseIcon />
</button>

<style lang="scss">
    .close{
        cursor: pointer;
        fill: var(--iconColor);
        background-color: var(--antiAppBg);
        display: none;
        align-items: center;
        justify-content: center;
        max-width: fit-content;
        padding: 10px;
        border-radius: 50%;
        margin-top: 10px;
        box-shadow: 0 0 4px var(--shadow);
        transition: transform ease-in-out 0.3s;
    }
    .close:hover{
        transform: rotate(180deg) scale(1.05);
    }
    // Mobile
    @media(max-width:700px){
        .close{ display: flex; }
    }
</style>