<script lang="ts">
    export let title:string
    export let link:{href:string,text:string}|undefined = undefined
</script>

<div class="title">
    <h2>{title}</h2>
    {#if link}
        <a href={link.href} class="link">
            {link.text}
        </a>
    {/if}
</div>

<style lang="scss">
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--headerColor);
        margin-bottom: 15px;
    }
    h2{
        font-weight: 200;
        font-size: 45px;
        text-transform: capitalize;
        flex: 1;
    }
    .link{
        cursor: pointer;
        border: none;
        padding: 10px 20px;
        border-radius: 50px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        color: var(--buttonColor);
        background-color: var(--buttonBg);
        box-shadow: 1px 2px 3px var(--shadow);
        transition: transform ease-in-out 0.3s;
        &:hover{
            transform: scale(1.05);
        }
    }
    @media(max-width:700px){
        h2{
            font-size: 33px;
        }
        .link{
            padding: 8px 14px;
            font-weight: 400;
        }
    }
</style>