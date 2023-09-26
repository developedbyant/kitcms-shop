<script lang="ts">
    export let src:string
    export let href:string
    export let title:string
    export let subTitle:string
    export let text:string
    import StarsLink from "./StarsLink.svelte";
    let style = `
    background: linear-gradient(45deg, rgba(0,0,0,.6), rgba(0,0,0,.8)),url(${src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;`
</script>

<div class="wrap" {style}>
    <div class="content">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{text}</p>
        <div class="flex">
            <a {href} class="btn" data-sveltekit-preload-code>Shop now</a>
            <StarsLink noBg={false} />
        </div>
    </div>
</div>

<style lang="scss">
    .flex{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .wrap{
        box-shadow: 0 0 4px var(--shadow);
        margin: 0px 0px 10px 0px;
        overflow: hidden;
        box-shadow: 1px 2px 3px rgba(0,0,0,10%);
    }
    .content{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 50px 20px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        width: 100%;
        min-height: 80vh;
        text-align: center;
        border-radius: 20px;
    }
    h2{
        font-size: 60px;
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
    }
    h3{
        font-size: 40px;
        color: #c9c9c9;
        font-weight: 300;
        text-transform: capitalize;
        margin-bottom: 5px;
    }
    p{
        font-size: 17px;
        color: #d7d7d7;
        font-weight: 300;
        margin-bottom: 10px;
        max-width: 800px;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        /* background-color: var(--buttonBg); */
        background: linear-gradient(45deg, var(--mainColor),var(--secondColor));
        color: var(--buttonColor);
        box-shadow: 1px 2px 3px var(--shadow);
        padding: 10px 20px;
        border-radius: 5px;
    }
    // Mobile
    @media(max-width:700px){
        .content{
            min-height: 50vh;
        }
        h2{
            font-size: 50px;
            display: none;
        }
        h3{
            font-size: 30px;
        }
        p{
            font-size: 15px;
        }
    }
</style>