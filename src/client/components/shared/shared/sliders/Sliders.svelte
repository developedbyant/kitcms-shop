<script lang="ts">
    export let show:number = 4
    export let gap:number = 10
    export let margin:string = "10px 0"
    import ArrowLeftIcon from "client/icons/AngleLeft.svelte"
    import ArrowRightIcon from "client/icons/AngleRight.svelte"
    let leftP:number = 0
    let rightP:number = 0
    let slidersDOM:HTMLDivElement

    function moveLeft(){
        const childSliderWidth = slidersDOM.firstElementChild!.clientWidth
        leftP = leftP + (childSliderWidth + gap)
        slidersDOM.scrollLeft = -leftP
        rightP = 0 // reset rightP
    }
    function moveRight(){
        const childSliderWidth = slidersDOM.firstElementChild!.clientWidth
        rightP = rightP + childSliderWidth + gap
        slidersDOM.scrollLeft = rightP
        leftP = 0 // reset leftP
    }
</script>

<div class="container" style="--show:{show};--gap:{gap}px;--margin:{margin}">
    <div class="arrow left" on:click={moveLeft} on:keypress={moveLeft}>
        <ArrowLeftIcon />
    </div>
    <div class="sliders" bind:this={slidersDOM}>
        <slot />
    </div>
    <div class="arrow right" on:click={moveRight} on:keypress={moveRight}>
        <ArrowRightIcon />
    </div>
</div>

<style>
    .container {
        width: 100%;
        position: relative;
        margin: var(--margin);
    }
    .sliders {
        display: flex;
        gap: var(--gap);
        width: 100%;
        scroll-behavior: smooth;
        overflow-x: scroll;
    }
    .sliders::-webkit-scrollbar{
        display: none;
        appearance: none;
    }
    .arrow{
        z-index: 1;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(0,0,0,20%);
        fill: white;
        border-radius: 50%;
    }
    .arrow.left{
        left: 0;
    }
    .arrow.right{
        right: 0;
    }
</style>
