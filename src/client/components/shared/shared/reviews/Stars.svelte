<script lang="ts">
    export let rating:number[] = [1,2,3,4,5]
    import StartIcon from "client/icons/Star.svelte";
</script>

<div class="rating">
    {#each rating as rate }
        <div class="star">
            <StartIcon />
        </div>
    {/each}
</div>

<style lang="scss">
    .rating{
        display: flex;
        align-items: center;
        width: fit-content;
        gap: 3px;
        transition: transform ease-in-out 0.3s;
        &:hover{
            transform: scale(1.03);
        }
    }
    .star{
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #F7B604;
    }
</style>