<div class="rightContent">
    <slot />
</div>

<style lang="scss">
    .rightContent{
        flex: 1;
        display: flex;
        flex-direction: column;
        color: var(--textColor);
    }
    // Mobile
    /* @media(max-width:1000px){
        .page{
            flex-direction: column;
        }
    } */
</style>