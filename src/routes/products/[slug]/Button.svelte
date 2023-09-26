<script lang="ts">
    export let text:string
    export let borderStyle:boolean = false
    export let icon:any = undefined
    export let loading:boolean = false
    import Spinner from "client/components/shared/Spinner.svelte";
    let pressing:boolean = false
    const onPress = ()=> pressing = true
    const onPressUp = ()=> pressing = false
</script>

<button class="btn" class:loading class:borderStyle class:pressing disabled={loading} on:click on:pointerup={onPressUp} on:pointerdown={onPress}>
    {#if loading}
        <Spinner size=15 color={borderStyle?"var(--buttonBg)":undefined}/>
    {:else if icon}
        <div class="icon">
            <svelte:component this={icon} size=15 />
        </div>
    {/if}
    {text}
</button>

<style lang="scss">
    .btn{
        flex: 1;
        cursor: pointer;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 14px;
        font-weight: 600;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 1px 2px 2px var(--shadow);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        border: 1.5px solid var(--buttonBg);
        &.loading{
            cursor: not-allowed;
            opacity: 70%;
        }
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--buttonColor);
    }
    .borderStyle{
        background-color: transparent;
        border: 1.5px solid var(--buttonBg) ;
        color: var(--buttonBg);
        .icon{
            fill: var(--buttonBg);
        }
    }
    .pressing{
        transform: scale(0.98);
    }
</style>