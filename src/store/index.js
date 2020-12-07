import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: "https://api.github.com/users/",
    user: null,
    username: "",
    userRepos: null,
    userNotFound: false,
  },
  mutations: {
    setUsername(state, data){
      state.username = data;
    }
  },
  actions: {
    fetchUser({commit}, data){
      commit('setUsername', data)
      if(this.state.username.length > 0){
        Axios.get(this.state.baseURL + this.state.username).then(response => {
          this.state.user = response.data;
          this.state.userNotFound = false
        }).catch(() => {
          this.state.userNotFound = true
          this.state.user = null
          this.state.userRepos = null
          console.clear()
          setTimeout(() => {this.state.userNotFound = false}, 5000)
        })
        Axios.get(this.state.baseURL + this.state.username + '/repos').then(response => {
          if(response.data.length > 0){
            this.state.userRepos = response.data;
            this.state.userNotFound = false
          }else{
            this.state.userRepos = null;
          }
        }).catch(() => {
          this.state.userNotFound = true
          this.state.user = null
          this.state.userRepos = null
          console.clear()
          setTimeout(() => {this.state.userNotFound = false}, 5000)
        })
      }
    }    
  },
  getters: {
    repos(state){
      return state.userRepos
    },
    user(state){
      return state.user
    }
  }
})
