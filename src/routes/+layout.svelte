<script>
    export let data
    import { page } from "$app/stores";
    import Layout from "./Layout.svelte";
</script>

{#if $page.url.pathname.startsWith("/admin")}
    <slot />
{:else}
    <Layout cartData={data.cartData}>
        <slot/>
    </Layout>
{/if}