<script lang="ts">
  export let href: string;
  export let type: "next" | "previous";
</script>

<a {href} sveltekit:prefetch class="nav-button nav-button--{type}" on:mousedown>
  <div class="nav-button__label">
    <slot />
  </div>
</a>

<style lang="scss">
  .nav-button {
    background: linear-gradient(
      to bottom,
      rgba(black, 0.8),
      rgba(black, 0.7) 30%,
      rgba(black, 0.7) 70%,
      rgba(black, 0.8)
    );
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 70px;
    border-radius: 35px;
    padding-left: 25px;
    padding-right: 25px;
    box-shadow: 2px 2px 30px rgba(black, 0.2);
    cursor: pointer;
    user-select: none;
    &:hover {
      text-decoration: none;
    }
  }
  .nav-button__label {
    font: 300 22px/70px Raleway, sans-serif;
    text-shadow: 0 0 10 rgba(black, 0.5);
    color: white;
  }
  %nav-button--icon {
    .nav-button__label {
      max-width: 0;
      overflow: hidden;
      transition: 0.15s all;
    }
    &:hover .nav-button__label {
      max-width: 400px;
      transition: 0.25s all;
    }
  }
  .nav-button--next {
    @extend %nav-button--icon;
    padding-right: 20px;
    padding-left: 22px;

    &:after {
      content: "";
      background: url("/images/nav-button-next.svg") no-repeat center center;
      display: inline-block;
      background-size: contain;
      width: 28px;
      height: 40px;
    }
    &:hover .nav-button__label {
      padding-right: 10px;
    }
  }
  .nav-button--previous {
    @extend %nav-button--icon;
    padding-right: 23px;
    padding-left: 19px;

    &:before {
      content: "";
      background: url("/images/nav-button-previous.svg") no-repeat center center;
      display: inline-block;
      background-size: contain;
      width: 28px;
      height: 40px;
    }
    &:hover .nav-button__label {
      padding-left: 10px;
    }
  }
</style>
