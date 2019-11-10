<script>
  export let href;
  export let type;
  export let homepage = false;

  let hover = false;
  let el;

  function touchstart(e) {
    e.preventDefault();
    hover = true;
  }
  function touchend(e) {
    e.preventDefault();
    if (hover) {
      //   $router.push(to);
    } else {
      hover = false;
    }
  }
  function touchmove(e) {
    const bounds = el.getBoundingClientRect();
    const touch = e.touches[0];
    if (
      touch.clientX < bounds.left ||
      touch.clientX > bounds.left + bounds.width ||
      touch.clientY < bounds.top ||
      touch.clientY > bounds.top + bounds.height
    ) {
      hover = false;
    } else {
      hover = true;
    }
  }
</script>

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
    &.nav-button--hover .nav-button__label {
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
    &.nav-button--hover .nav-button__label {
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
    &.nav-button--hover .nav-button__label {
      padding-left: 10px;
    }
  }
</style>

<a
  bind:this={el}
  {href}
  rel="prefetch"
  class="nav-button nav-button--{type}"
  class:nav-button--hover={hover}
  on:mousedown
  on:mouseenter={() => (hover = true)}
  on:mouseleave={() => (hover = false)}
  on:touchstart={() => (hover = true)}
  on:touchend={() => (hover = false)}>
  <div class="nav-button__label">
    <slot />
  </div>
</a>
