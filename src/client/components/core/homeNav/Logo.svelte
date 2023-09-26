<script lang="ts">
    import logoSrc from "client/images/logo.png"
</script>

<a href="/" class="logo">
    <img src={logoSrc} alt="Logo">
</a>

<style lang="scss">
    .logo{
        display: none;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
        img{
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
        }
    }
    // Mobile
    @media(max-width:700px){
        .logo{
            display: flex;
        }
    }
</style>