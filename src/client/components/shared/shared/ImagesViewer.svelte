<script lang="ts">
    export let src:string = $VIEW_IMAGE
    import { VIEW_IMAGE } from "client/lib/stores";
    import XIcon from "client/icons/X.svelte";
    function closeViewer(e:any){
        const classList = e.target.classList as DOMTokenList
        const close:boolean = classList.contains("wrap") || classList.contains("closeBtn")
        if(close) VIEW_IMAGE.set("")
    }
</script>

<div class="wrap" on:click={closeViewer} on:keypress={closeViewer}>
    <div class="mainImage">
        <img {src} alt="main">
        <div class="closeBtn" on:click={closeViewer} on:keypress={closeViewer}>
            <XIcon />
        </div>
    </div>
</div>

<style lang="scss">
    .wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        position: fixed;
        top: 0; left: 0;
        height: 100vh;
        width: 100%;
        z-index: 10;
        background-color: rgba(0,0,0,.5);
        backdrop-filter: blur(5px);
    }
    .mainImage{
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100%;
        position: relative;
        img{
            border-radius: 5px;
            object-fit: cover;
            object-position: center;
            background-color: rgba(0,0,0,.5);
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
        }
    }
    .closeBtn{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--buttonBg);
        border-radius: 0 0 0 5px;
        padding: 10px;
        fill: var(--buttonColor);
    }
    :global(.closeBtn svg){
        pointer-events: none;
    }
</style>