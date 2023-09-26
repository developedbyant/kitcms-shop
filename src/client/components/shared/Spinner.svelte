<script lang="ts">
    export let size = "17";
    export let color = "white";
    // Variables
    const css = `
        width:${size}px;height:${size}px;
        border:${color} 2px dashed;
        border-top:#b2b2b221 2px solid;
    `
</script>

<div class="spinner" style={css}/>

<style lang="scss">
    .spinner {
        border-radius: 50%;
        background-color: transparent;
        animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
</style>