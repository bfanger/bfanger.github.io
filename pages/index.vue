<template>
  <div>
    <Intro 
      v-if="cardVisible === false" 
      @completed="showCard" />
    
    <transition name="homepage__card">
      <Card 
        v-show="cardVisible" 
        class="homepage__card">
        <img 
          src="../assets/images/avatar.jpg" 
          class="homepage__avatar">
        <h1 class="homepage__title">Hoi, ik ben Bob&nbsp;Fanger</h1>
        <p>
          Ik ben een webdeveloper bij <a href="http://www.noprotocol.nl/">NoProtocol</a>.<br > Daarnaast ben ik ook actief
          op:<br><a href="https://github.com/bfanger/"><i class="icon-github"/> GitHub</a> en <a href="http://stackoverflow.com/users/19165/bob-fanger">StackOverflow</a>.
        </p>
        <aside/>
      </Card>
    </transition>
    <NavButton 
      v-if="cardVisible" 
      class="homepage__next"
      type="next"
      to="/portfolio">Portfolio</NavButton>
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Card from "../components/Card.vue";
import NavButton from "../components/NavButton.vue";

export default {
  components: { Intro, Card, NavButton },
  data() {
    return {
      cardVisible:
        process.browser && typeof window.bf_intro_shown !== "undefined"
    };
  },
  methods: {
    showCard() {
      window.bf_intro_shown = true;
      this.cardVisible = true;
    }
  }
};
</script>

<style lang="scss">
.homepage__card {
  position: relative;
  border-radius: 50px !important;
}
.homepage__title {
  font-size: 30px;
}
.homepage__avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 4px 4px 40px rgba(black, 0.2);
  position: absolute;
  top: calc(100% - 10px);
  left: -120px;
  @media (max-width: 730px) {
    top: auto;
    bottom: calc(100% + 20px);
    left: calc(50% - 60px);
  }
}
.homepage__card-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.homepage__card-enter {
  opacity: 0;
  transform: translateY(30px);
}
.homepage__next {
  position: fixed;
  bottom: calc(50% -35px);
  right: calc(50vw - 550px);
  transform: translateX(50%);
  @media (max-width: 1290px) {
    right: 30px;
    transform: none;
  }
  @media (max-width: 880px) {
    bottom: 40px;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
