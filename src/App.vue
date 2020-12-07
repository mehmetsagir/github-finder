<template>
  <div id="app" class="container">
    <Nav />
    <Search />
    <Error v-if="this.$store.state.userNotFound" />
    <Profile v-if="this.$store.state.user != null" />
    <Repos v-if="this.$store.state.userRepos != null" />
  </div>
</template>   

<script>
import Search from "@/components/Search";
import Nav from "@/components/Nav";
import Error from "@/components/Error";
import Profile from "@/components/Profile";
import Repos from "@/components/Repos";

export default {
  name: 'App',
  components: {
    Search,
    Nav,
    Error,
    Profile,
    Repos,
  }
}
</script>

<style lang="scss">
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body{
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 background: #FAFCFD;
}
.container{
  margin: 40px auto;
  padding: 10px 20px 40px 20px;
  width: 1200px;  
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(black, .1); 
}

</style>
