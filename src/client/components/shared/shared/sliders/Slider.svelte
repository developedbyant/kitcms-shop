<div class="slider">
    <slot />
</div>

<style>
    .slider {
        flex: 0;
        min-width: calc(100% / var(--show) - calc(var(--gap) - 2px));
    }
</style>
