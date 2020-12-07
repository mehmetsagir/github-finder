<template>
  <div class="repos">
      <h4>Public Repositories</h4>
      <div class="repo" v-for="repo in repos" :key="repo.id">
          <div class="repo-name">{{ repo.name }}</div>
          <div class="repo-link">
              <a target="_blank" :href="repo.html_url">Go to repo</a>
          </div>
          <div class="repo-attr">
              <span>Stars: {{ repo.stargazers_count }} </span>
              <span>Watchers: {{ repo.watchers }}</span>
              <span>Forks: {{ repo.forks }}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        repos(){
            return this.$store.getters.repos
        }
    }
}
</script>

<style lang="scss" scoped>
.repos{
    width: 100%;
    h4{
        font-size: 34px;
        margin: 60px 0 25px 0;
    }
    .repo{
        width: 100%;
        min-height: 60px;
        background: #1D3144;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        color: white;
        padding: 0 15px;
        &-name{
            line-height: 35px;
            flex: 1;
            font-size: 22px;
            text-transform: uppercase;
        }
        &-link{
            flex: 1;
            text-align: center;
            a{
                background: lighten(#1D3144, 5%);
                padding: 10px 25px;
                color: white;
                text-decoration: none;
                border-radius: 3px;
            }
        }
        &-attr{ 
            flex: 3;
            display: flex;
            justify-content: space-evenly;
            span{
                background: lighten(#1D3144, 5%);
                padding: 5px 25px;
                border-radius: 3px;
            }
        }
    }
}
</style>