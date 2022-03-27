<script lang="ts">
  export let background: string = randomColor();
  export let title: string;

  function randomColor(): string {
    const color = `#${(Math.random() * 1000000).toFixed(0)}`;
    if (color.length !== 7) {
      return randomColor();
    }
    return `${color}c0`;
  }
</script>

<div class="screen" style:background>{title} {background}</div>

<style>
  .screen {
    min-height: 100vh;
    color: white;
    font-weight: bold;
  }
</style>
