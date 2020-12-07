<template>
    <div class="profile">
        <div class="image">
            <img :src="user.avatar_url">
            <a :href="'https://github.com/' + user.login" target="_blank" class="view-profile">
                View Github Profile
            </a>
        </div>
        <div class="content">
            <div class="content-header">
                <span>Repos: {{ user.public_repos }} </span>
                <span>Gists: {{ user.public_gists }} </span>
                <span>Followers: {{ user.followers }} </span>
                <span>Following: {{ user.following }} </span>
            </div>
            <div class="content-text">
                <ul>
                    <li v-if="user.name == null || user.blog == null || user.blog == ''">
                        <span style="color: darkred; font-size: 20px">Places that are empty about the account are not shown!</span>
                    </li>
                    <li v-if="user.name != null">
                        <span>Name: <b>{{user.name}}</b></span>
                    </li>
                    <li v-if="user.blog != ''" >
                        <span>Website: <a target="_blank" :href="'http://' + user.blog">{{ user.blog }}</a> </span>
                    </li>
                    <li v-if="user.location != null" >
                        <span>Location: <b>{{ user.location }}</b></span>
                    </li>
                    <li>
                        <span>Since when a member: <b>{{ user.created_at }}</b></span> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.getters.user
        }
    }
}
</script>

<style lang="scss" scoped>
.profile{
    width: 100%;
    height: 250px;
    margin: 20px auto;
    display: flex;
    border: 1px solid rgba(#ccc, .4);
    .image{
        width: 250px;
        height: 100%;
        background: #1D3144;
        position: relative;
        &:hover .view-profile{
            opacity: 1;
            transition: 300ms;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .view-profile{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(black, .3);
            display: grid;
            place-content: center;
            color: #fff;
            font-size: 22px;
            text-decoration: none;
            opacity: 0;
            transition: 300ms;
        }
    }
    .content{
        flex: 1;
        height: 100%;
        &-header{
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            border-bottom: 1px solid rgba(#ccc, .4);
            span{
                min-width: 125px;
                line-height: 30px;
                padding: 2px 10px;
                border-radius: 2px 2px 20px 2px;
                background: #1D3144;
                color: white;
                font-size: 17px;
            }
        }
        &-text{
            width: 100%;
            padding-left: 10px;
            height: calc(100% - 60px);
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                li{
                    padding: 0 10px;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    span{
                        font-weight: 500;
                        font-size: 17px;
                        b, a{
                            font-size: 19px;
                            text-decoration: none;
                            color: black;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
}
</style>