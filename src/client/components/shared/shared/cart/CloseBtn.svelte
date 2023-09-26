<script lang="ts">
    import XIcon from "client/icons/X.svelte";
</script>

<div class="closeBtn">
    <XIcon size=15/>
</div>

<style lang="scss">
    .closeBtn{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--buttonBg);
        border-radius: 10px;
        padding: 10px;
        fill: var(--buttonColor);
    }
    :global(.closeBtn svg){
        pointer-events: none;
    }
</style>