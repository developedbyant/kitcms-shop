<script lang="ts">
    export let title:string
    export let text:string
    export let imageSrc:string
    export let link:{ href:string,text:string }
</script>

<div class="card">
    <div class="info">
        <h3>{title}</h3>
        <p>{text}</p>
        <a data-sveltekit-preload-code href={link.href} class="link">{link.text}</a>
    </div>
    <div class="image">
        <img src={imageSrc} alt={title}>
    </div>
</div>

<style lang="scss">
    .card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--antiBodyBg);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 1px 1px 3px var(--shadow);
        margin-bottom: 30px;
        color: #666666;
        max-height: 250px;
        height: fit-content;
        gap: 10px;
    }
    .info{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
        flex: 2.5;
        h3{
            font-size: 40px;
            font-weight: 800;
            text-transform: capitalize;
        }
        p{
            font-size: 17px;
            font-weight: 600;
        }
    }
    .link{
        all: unset;
        width: fit-content;
        cursor: pointer;
        padding: 15px 25px;
        font-size: 14px;
        font-weight: 600;
        background-color: var(--buttonBg);
        color: var(--buttonColor);
        border-radius: 50px;
        box-shadow: 1px 1px 3px var(--shadow);
    }
    .image{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
    // Mobile
    @media(max-width:700px){
        .card{
            max-height: fit-content;
            flex-direction: column-reverse;
        }
        .info{
            padding: 20px;
        }
    }
</style>