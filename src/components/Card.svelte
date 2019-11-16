<script>
    import { fade } from 'svelte/transition';

    let inTransition = fade;
    export { inTransition as in };
    export let out = fade;
    export let homepage = false;
    function animateIn(node) {
        if (Array.isArray(inTransition)) {
            return inTransition[0](node, inTransition[1]);
        }
        return inTransition(node, {});
    }
    function animateOut(node) {
        if (Array.isArray(out)) {
            return out[0](node, out[1]);
        }
        return out(node, {});
    }
</script>

<style lang="scss">
    .card {
        display: block;
        background: rgba(#ffffff, 0.9);
        min-width: 33%;
        width: 100%;
        max-width: 760px;
        padding: 10px 20px;
        box-sizing: border-box;
        box-shadow: 6px 6px 60px rgba(black, 0.2);
        @media (min-width: 500px) {
            padding: 25px 30px;
        }
    }
    .card--homepage {
        position: relative;
        width: auto;
        border-radius: 50px !important;
    }
</style>

<div in:animateIn out:animateOut class="card" class:card--homepage={homepage}>
    <slot />
</div>
