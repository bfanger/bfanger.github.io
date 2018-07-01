<template>
  <div class="card"><slot/></div>
</template>

<style lang="scss">
.card {
  display: block;
  background: rgba(#ffffff, 0.9);
  border-radius: 2px;
  padding: 10px 20px;
  margin: 10px;
  min-width: 33%;
  max-width: 760px;
  box-shadow: 6px 6px 60px rgba(black, 0.2);
  @media (min-width: 500px) {
    padding: 25px 30px;
  }
}
</style>
