<script lang="ts">
    export let src:string
    export let href:string
    export let title:string
    export let subTitle:string
    export let text:string
    let style = `
    background: linear-gradient(45deg, rgba(0,0,0,.7), rgba(0,0,0,.3)),url(${src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;`
</script>

<div class="image" {style}>
    <h2>{title}</h2>
    <h3>{subTitle}</h3>
    <p>{text}</p>
    <a {href} class="btn">Shop now</a>
</div>

<style lang="scss">
    .image{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        width: 100%;
        height: 40vh;
        border-radius: 15px;
        box-shadow: 1px 2px 2px var(--shadow);
        margin-bottom: 20px;
    }
    h2{
        font-size: 50px;
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: -10px;
    }
    h3{
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
    p{
        font-size: 15px;
        color: #d7d7d7;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        box-shadow: 1px 2px 3px var(--shadow);
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>