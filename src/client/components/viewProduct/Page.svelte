<script>
    import { fade } from "svelte/transition";
</script>

<div class="page" in:fade="{{ duration:500 }}">
    <slot />
</div>

<style lang="scss">
    .page{
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
    // Mobile
    @media(max-width:1000px){
        .page{
            flex-direction: column;
        }
    }
</style>