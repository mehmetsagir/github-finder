<template>
  <nav>
      <h3>Github Finder</h3>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
nav{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(#ccc, .2);
    h3{
      line-height: 70px;
      padding-left: 5px;
      font-size: 35px;
      cursor: pointer;
      &::selection{
        background: none;
      }
    }
}
</style>