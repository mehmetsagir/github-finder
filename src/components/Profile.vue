<template>
    <div class="profile">
        <div class="image">
            <img src="">
            <a href="#" target="_blank" class="view-profile">
                View Github Profile
            </a>
        </div>
        <div class="content">
            <div class="content-header">
                <span>Repos: </span>
                <span>Gists: </span>
                <span>Followers: </span>
                <span>Following: </span>
            </div>
            <div class="content-text">
                <ul>
                    <li>
                        <span>Name: </span>
                    </li>
                    <li>
                        <span>Website: </span>
                    </li>
                    <li>
                        <span>Location: </span>
                    </li>
                    <li>
                        <span>Since when a member: </span> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
                    }
                }
            }
        }
    }
}
</style>