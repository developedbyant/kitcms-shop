<script lang="ts">
    import"client/global.css"
    export let cartData:PageData['cartData']
    cartStore.set(cartData)
    import { page } from "$app/stores";
    import { metaTagsStore,cartStore } from "client/lib/stores";
    import { preparePageTransition } from "client/lib/pageTransition"
    import Toasts from "svelteCMS/components/toasts/Toasts.svelte";
    import Nav from "client/components/core/nav/Nav.svelte";
    import HomeNav from "client/components/core/homeNav/HomeNav.svelte";
    import Cart from "client/components/cart/Cart.svelte";
    // images
    import backdropImageSrc from "client/images/backdrop.png"
    import faviconImageSrc from "client/images/favicon.png"
    import type { PageData } from "./$types";
    $: url = $page.url.href
    $: appName = $metaTagsStore.appName
    $: favicon = $metaTagsStore.favicon ? $metaTagsStore.favicon : faviconImageSrc
    $: ogType = $metaTagsStore.ogType ? $metaTagsStore.ogType:"website" 
    $: title = $metaTagsStore.title ? `${$metaTagsStore.title} | ${appName}`:`${appName} | All in one svelte cms` 
    $: description = $metaTagsStore.description ? $metaTagsStore.description:"All in one cms for your svelte and sveltekit projects." 
    $: image = $metaTagsStore.image ? $metaTagsStore.image: backdropImageSrc
    preparePageTransition()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content="FinOnX | Finance on X" />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
</svelte:head>

<Toasts rounded={false}/>
<div class="client">
    <Cart />
    <Nav />
    <div class="content">
        <HomeNav />
        <main>
            <slot />
        </main>
    </div>
</div>

<style lang="scss">
    .client{
        background-image: var(--appBg);
        height: 100vh;
        color: var(--textColor);
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    .content{
        display: flex;
        flex-direction: row;
        gap: 50px;
        max-width: var(--maxWidth);
        width: 95%;
        margin: 20px auto;
    }
    main{ flex: 1; }
</style>