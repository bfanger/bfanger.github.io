<template>
  <nuxt-link 
    :to="to" 
    :class="'nav-button--' + type"
    class="nav-button">
    <div class="nav-button__label"><slot/></div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { type: [String, Object], required: true },
    type: { type: String, required: true }
  }
};
</script>

<style lang="scss">
.nav-button {
  background: rgba(black, 0.7);
  display: inline-block;
  transition: 0.15s transform;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.25s;
    opacity: 0.95;
  }
}
.nav-button__label {
  color: white;
  text-shadow: 0 0 10 rgba(black, 0.5);
  font-family: Raleway, sans-serif;
  font-size: 16px;
}
.nav-button--next {
  position: fixed;
  top: 50%;
  right: calc(50vw - 660px);
  width: 80px;
  height: 80px;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
  &:after {
    content: "";
    background: url("../assets/images/nav-button-next.svg") no-repeat;
    position: absolute;
    background-size: contain;
    left: 28px;
    top: 18px;
    width: 32px;
    height: 46px;
  }
  @media (max-width: 1360px) {
    right: 30px;
  }
  @media (max-width: 730px) {
    top: auto;
    bottom: 30px;
  }
  .nav-button__label {
    position: absolute;
    top: 90px;
    left: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-25px) scale(0.8);
    opacity: 0;
    transition: 0.15s opacity, 0.15s transform;
  }
  &:hover .nav-button__label {
    @media (min-width: 730px) {
      opacity: 1;
      transform: translateX(-50%) translateY(0px) scale(1);
      transition: 0.2s opacity, 0.4s transform;
    }
  }
}
</style>
