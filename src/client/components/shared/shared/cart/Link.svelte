<script lang="ts">
    export let href:string = ""
    export let text:string = "CheckOut"
</script>

<a class="link" {href}>
    {text}
</a>

<style lang="scss">
    .link{
        cursor: pointer;
        border: none;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        font-size: 15px;
        font-weight: 600;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        box-shadow: 1px 1px 3px var(--shadow);
    }
</style>