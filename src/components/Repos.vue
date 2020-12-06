<template>
  <div class="repos">
      <h4>Repositories</h4>
      <div class="repo">
          <div class="repo-name">twitter-clone</div>
          <div class="repo-link">
              <a href="#">Go to repo</a>
          </div>
          <div class="repo-attr">
              <span>Stars: 85</span>
              <span>Watchers: 458</span>
              <span>Forks: 5578454</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.repos{
    width: 100%;
    margin: 30px 0;
    h4{
        font-size: 34px;
        margin: 5px 0 15px 0;
    }
    .repo{
        width: 100%;
        height: 60px;
        background: #1D3144;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        color: white;
        padding: 0 15px;
        &-name{
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