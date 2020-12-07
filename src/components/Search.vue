<template>
  <div class="searchBox">
      <div class="form">
        <span>Enter a username and access user information!</span>
        <div class="inputBox">
          <input type="text" @keydown.enter="search" v-model="searchUsername" placeholder="Github Username">
          <button @click="search">Search</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data(){
    return{
      searchUsername: "",
    }
  },
  computed: {
    ...mapState(["username"])
  },
  methods: {
    ...mapActions(["fetchUser"]),
    search(){
      if(this.searchUsername !== ""){
        this.fetchUser(this.searchUsername)
        this.searchUsername = ""
      }
    }
  }

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