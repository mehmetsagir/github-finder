<template>
  <div class="searchBox">
      <div class="form">
        <span>Enter a username and access user information!</span>
        <div class="inputBox">
          <input type="text" placeholder="Github Username">
          <button>Search</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.searchBox{
    width: 100%;
    padding: 60px 0;
    display: flex;
    align-items: center;
    .form{
      width: 100%;
      span{
        display: block;
        font-size: 26px;
        color: rgba(black, .7);
        font-weight: bold;
      }
      .inputBox{
        margin-top: 20px;
        display: flex;
        border: 1px solid #ccc;
          input{
            width: 100%;
            height: 45px;
            padding: 0 10px;
            font-size: 18px;
            outline: none;
            border: none;
          }
          button{
            width: 120px;
            border: none;
            background: none;
            outline: none;
            border-left: 1px solid rgba(#ccc, .4);
            cursor: pointer;
            font-size: 17px;
          }
      }
    }
}
</style>