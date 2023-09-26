<script lang="ts">
    import { CURRENT_VARIANT } from "client/lib/stores";
    import DiscountIcon from "client/icons/Discount.svelte";    
    $: price = $CURRENT_VARIANT.price.amount
    $: priceCut = $CURRENT_VARIANT.compareAtPrice.amount
    $: percentage = ( (Number(price) / Number(priceCut)) * 100 ).toFixed()
</script>

<div class="prices">
    <span class="price">${price}</span>
    <span class="priceCut">${priceCut}</span>
    <div class="discount">
        <DiscountIcon size=15/>
        Save {percentage}%
    </div>
</div>

<style lang="scss">
    .prices{
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
        .price,.priceCut{
            font-size: 30px;
            font-weight: 900;
            color: var(--headerColor);
        }
        .priceCut{
            font-weight: 400;
            text-decoration: line-through solid;
            color: var(--antiHeaderColor);
        }
    }
    .discount{
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px;
        border-radius: 6px;
        background-color: var(--mainColor);
        color: #fff;
        fill: #fff;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
    }
</style>