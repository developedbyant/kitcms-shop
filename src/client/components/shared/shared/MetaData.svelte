<script lang="ts">
    import { page } from "$app/stores"
    import site from "client/site";
    export let divider:string = "|"
    export let siteName:string = site.name
    export let title:string = site.title
    export let description:string = site.description
    export let favicon:string = site.favicon
    export let thumbnail:string = site.favicon
    export let url:string = $page.url.href
    export let type:string = "website"
</script>

<svelte:head>
<!-- Primary Meta Tags -->
<link rel="icon" href={favicon} type="image/png"/>
<title>{ title } {divider} { siteName }</title>
<meta name="title" content="{ title } {divider} { siteName }">
<meta name="description" content="{ description }">
<!-- Open Graph / Facebook -->
<meta property="og:type" content="{ type }">
<meta property="og:url" content="{ url }">
<meta property="og:title" content="{ title } {divider} { siteName }">
<meta property="og:description" content="{ description }">
<meta property="og:image" content="{thumbnail}">
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{ url }">
<meta property="twitter:title" content="{ title } {divider} { siteName }">
<meta property="twitter:description" content="{ description }">
<meta property="twitter:image" content="{ thumbnail }">
</svelte:head>