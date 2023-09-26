<script lang="ts">
    export let showTitle:boolean = false
    export let reviews:ReviewData[]
    import type { ReviewData } from "client/types";
    import Review from "./Review.svelte";
    import Stars from "./Stars.svelte"
</script>

<div id="reviews">
    {#if showTitle}
        <div class="title">
            <div class="text">
                Reviews <Stars />
            </div>
            <button class="btn">
                Write review
            </button>
        </div>
    {/if}
    <div class="reviews">
        {#each reviews as review}
            <Review {review}/>
        {/each}
    </div>
</div>

<style>
    #reviews{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 30px 0px;
    }
    .title,.text{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .text{
        font-size: 20px;
        font-weight: 20px;
        gap: 10px;
    }
    button{
        all: unset;
        cursor: not-allowed;
        padding: 10px 15px;
        background-color: var(--antiBodyBg);
        font-size: 14px;
        font-weight: 600;
        color: var(--textColor);
        box-shadow: 1px 2px 3px rgba(0,0,0,10%);
    }
    .reviews{
        display: flex;
        flex-direction: column;
    }
</style>