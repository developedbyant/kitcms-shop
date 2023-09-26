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
        margin-bottom: 15px;
    }
    h2{
        color: var(--headerColor);
        font-weight: bolder;
        font-size: 30px;
        text-transform: capitalize;
        flex: 1;
    }
    .link{
        text-decoration: none;
        cursor: pointer;
        border: none;
        padding: 10px 12px;
        border-radius: 50px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: var(--buttonColor);
        background-color: var(--buttonBg);
        box-shadow: 1px 2px 2px var(--shadow);
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