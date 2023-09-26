<script lang="ts">
    import HomeNav from "client/components/core/homeNav/HomeNav.svelte";
</script>

<div class="content">
    <HomeNav />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    .content{
        display: flex;
        flex-direction: row;
        gap: 30px;
        max-width: var(--maxWidth);
        width: 95%;
        margin: 20px auto;
        scroll-behavior: smooth !important;
    }
    main{
        flex: 1;
    }
</style>