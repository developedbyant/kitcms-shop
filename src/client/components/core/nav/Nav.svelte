<script lang="ts">
    import { appStore,cartStore } from "client/lib/stores";
    import logoSrc from "client/images/logo.png"
    import BurgerMenu from "./Burger.svelte";
    import BagIcon from "client/icons/Bag.svelte"
    import SearchIcon from "client/icons/Search.svelte"
    const openCart = ()=> appStore.update(data=>{ data['cartIsOpen']=true ; return {...data}})

    let inputValue:string = ""
</script>

<header>
    <nav>
        <BurgerMenu />
        <a href="/" class="logo">
            <img src={logoSrc} alt="Logo">
        </a>
        <div class="rightMenu">
            <div class="search">
                <input type="text" placeholder="Search..." bind:value={inputValue}>
                <div class="icon">
                    <SearchIcon size=15/>
                </div>
            </div>
            <ul class="links">
                <li><a href="/" class="link">Home</a></li>
                <li><a href="/" class="link">About</a></li>
                <li><a href="/" class="link">Contact us</a></li>
            </ul>
            <button class="cartBtn" on:click={openCart}>
                <BagIcon size=15 />
                <div class="count">{$cartStore ? $cartStore.totalItems : 0}</div>
            </button>
        </div>
    </nav>
</header>

<style lang="scss">
    header{
        position: sticky;
        top: 0;
        z-index: 1;
        background-color: var(--navBg);
        box-shadow: 0 1px 1px var(--shadow);
        nav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0px;
            gap: 20px;
            max-width: var(--maxWidth);
            width: 95%;
            margin: auto;
        }
    }
    // logo
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 200px;
        width: 100%;
        img{
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    // right menu
    .rightMenu{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
    }
    // search
    .search{
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: var(--searchBg);
        padding: 12px 15px;
        border-radius: 15px;
        box-shadow: 1px 2px 2px var(--shadow);
        max-width: 300px;
        width: 100%;
        border: 1px solid var(--borderColor);
    }
    .search input,.search input::placeholder{
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 13px;
        font-weight: 400;
        color: var(--searchColor);
    }
    .search input:focus{
        outline: none;
    }
    .search .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--iconColor);

    }
    // nav links
    .links{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
        list-style: none;
    }
    .link{
        text-transform: capitalize;
        text-decoration: none;
        font-size: 17px;
        font-weight: 500;
        color: var(--navLinkColor);
    }
    .cartBtn{
        all: unset;
        cursor: pointer;
        fill: var(--iconColor);
        position: relative;
        background-color: var(--searchBg);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--borderColor);
        box-shadow: 1px 2px 2px var(--shadow);
    }
    .cartBtn .count{
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: -5px;
        right: -5px;
        background-color: var(--mainColor);
        color: #fff;
        border: 2px solid #fff;
        padding: 8px;
        border-radius: 50%;
        font-size: 10px;
        font-weight: 700;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    // on mobile
    @media(max-width:700px){
        .rightMenu{ flex: 0; }
        .search{
            display: none;
        }
        .links{
            display: none;
        }
    }
</style>