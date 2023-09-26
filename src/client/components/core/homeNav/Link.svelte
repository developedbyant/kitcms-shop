<script lang="ts">
    import { page } from "$app/stores";

    export let icon:any|undefined = undefined
    export let imageSrc:string|undefined = undefined
    export let text:string
    export let href:string
    $: pathnameDir = $page.url.pathname.split("/")[1]
    $: hrefDir = href.split("/")[1]
    $: active = $page.url.pathname === href || ( pathnameDir === hrefDir && pathnameDir!=="categories")
</script>

<li>
    <a class="link" {href} class:active>
        { text }
        {#if icon}
            <div class="icon">
                <svelte:component this={icon} size=20/>
            </div>
        {:else if imageSrc}
            <div class="image">
                <img src={imageSrc} alt={text}>
            </div>
        {/if}
    </a>
</li>

<style lang="scss">
    .link{
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        color: var(--secondNavLinkColor);
        fill: var(--iconColor);
        background-color: var(--antiAppBg);
        padding: 10px 15px;
        border-radius: 10px;
        box-shadow: 1px 2px 3px var(--shadow);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
    }
    // when link is active
    .link.active,a:hover{
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        fill: var(--buttonColor);
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 40px;
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
</style>