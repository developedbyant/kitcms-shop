<script lang="ts">
    export let review:ReviewData
    import type { ReviewData } from "client/types";
    import { fade } from "svelte/transition";
    import { VIEW_IMAGE } from "client/lib/stores";
    import userImageSrc from "client/static/user.png"
    import Stars from "./Stars.svelte";
    import Sliders from "client/components/shared/sliders/Sliders.svelte";
    import Slider from "client/components/shared/sliders/Slider.svelte";
</script>

<div class="review">
    <div class="reviewInfo">
        <div class="user">
            <div class="userImage">
                <img src="/api/image/{review.username||"A"}" alt={review.username||"A"}>
            </div>
            <div class="flex c">
                <span class="username">{review.username||"A"}******</span>
                <Stars rating={review.stars}/>
            </div>
        </div>
    </div>
    <p class="reviewText">
        {review.text}
    </p>
    {#if review.images.length>0}
        <Sliders>
            {#each review.images as image}
                <Slider>
                    <div class="image" on:click={()=>VIEW_IMAGE.set(image)} on:keypress={()=>VIEW_IMAGE.set(image)} in:fade="{{ duration:500 }}">
                        <img src={image} alt="review" loading="lazy">
                    </div>
                </Slider>
            {/each}
        </Sliders>
    {/if}
</div>

<style lang="scss">
    .flex{ display: flex; }
    .flex.c{ flex-direction: column; }
    .review{
        margin-bottom: 15px;
        padding: 20px 10px;
        border-radius: 5px;
        box-shadow: 0 1px 5px rgba(0,0,0,.1);
        background-color: var(--antiBodyBg);
    }
    .reviewInfo{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .user{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .username{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 2px;
        color: #4f4f4f;
    }
    .reviewText{
        font-size: 15px;
        font-weight: 300;
        color: #888888;
    }
    .userImage{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        min-width: 45px;
        width: 45px;
        height: 45px;
        margin-right: 10px;
        box-shadow: 1px 1px 3px rgba(0,0,0,.2);
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
    .image{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0,0,0,.1);
        height: 100%;
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
</style>