<template>
  <header class='header'>
    <h1 class='header__title'>
      <router-link to='/'>#MOVIENOW</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 36px 0 16px;
  background: $red-color;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.28);

  &__title {
    margin: 0;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.21em;
    text-align: center;

    a {
      text-decoration: none;
      color: #000;
      cursor: pointer;
    }
  }
}
</style>
