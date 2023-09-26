<script lang="ts">
    export let noBg:boolean = true
    export let rating:number[] = [1,2,3,4,5]
    import StarIcon from "client/icons/Star.svelte";
</script>

<a href="#reviews" class="stars" class:noBg>
    {#each rating as num}
        <StarIcon />
    {/each}
</a>

<style lang="scss">
    .stars{
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 7px;
        justify-content: center;
        fill: #F7B604;
        background-color: rgba(0,0,0,30%);
        padding: 10px 15px;
        border-radius: 5px;
    }
    .noBg{
        padding: 0px;
        background-color: transparent;
        margin-bottom: 10px;
    }
</style>