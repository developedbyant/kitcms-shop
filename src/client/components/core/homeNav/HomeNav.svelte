<script lang="ts">
    import { appStore } from "client/lib/stores";
    // Components
    import Link from "./Link.svelte";
    import Logo from "./Logo.svelte";
    import Close from "./Close.svelte";
    // Icons
    import HouseIcon from "client/icons/HouseFill.svelte";
    import LightningIcon from "client/icons/LightningFill.svelte"
    // Images
    import hoodiesSrc from "client/images/nav/js-hoodie.png"
    import sweatshirtsSrc from "client/images/nav/vim-sweatshirt.png"
    import tShirtsSrc from "client/images/nav/svelte-t-shirt.png"
    $: navIsOpen = $appStore.navIsOpen
</script>

<header class:navOpen={navIsOpen}>
    <nav>
        <Logo />
        <ul>
            <Link text="Home" href="/" icon={HouseIcon}/>
            <Link text="Products" href="/products" icon={LightningIcon}/>
            <Link text="Hoodies" href="/categories/hoodies" imageSrc={hoodiesSrc} />
            <Link text="Sweatshirts" href="/categories/sweatshirts" imageSrc={sweatshirtsSrc} />
            <Link text="TShirts" href="/categories/t-shirts" imageSrc={tShirtsSrc} />
        </ul>
    </nav>
    <Close />
</header>

<style lang="scss">
    header{
        display: flex;
        flex-direction: column;
    }
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    // Mobile
    @media(max-width:700px){
        header{
            display: none;
            align-items: center;
            padding: 10px;
            z-index: 1;
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(20px);
            top: 0;
            left: 0;
        }
        header.navOpen{ display: flex; }
        nav{
            align-items: center;
        }
    }
</style>