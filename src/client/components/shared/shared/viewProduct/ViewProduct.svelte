<script lang="ts">
    export let showBreadcrumb:boolean = true
    export let loading:boolean
    export let quantity:number
    import Breadcrumb from "./Breadcrumb.svelte";
    import Page from "./Page.svelte";
    import Images from "./Images.svelte";
    import RightContent from "./RightContent.svelte";
    import Title from "./Title.svelte";
    import StarsLink from "client/components/shared/ReviewsLink.svelte";
    import Prices from "./Prices.svelte";
    import Description from "./Description.svelte";
    import Variants from "./Variants.svelte";
    import Buttons from "./Buttons.svelte";
</script>

{#if showBreadcrumb}
    <Breadcrumb />
{/if}
<Page>
    <Images />
    <RightContent>
        <Title />
        <StarsLink />
        <Prices />
        <Description />
        <Variants />
        <Buttons bind:quantity bind:loading on:addToCart on:buyNow />
    </RightContent>
</Page>