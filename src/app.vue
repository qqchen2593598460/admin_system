<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .2s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0);
        }
    }



    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }


    body {
        /*background-color: #324057;*/
        margin: 0px;
        padding: 0px;
        /*background: url(assets/bg1.jpg) center !important;
        background-size: cover;*/
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        /*font-weight: 400;*/
        font-size:14px !important;
        width: 100%;
        height: 100%;
        background: url(assets/bg.jpg);
        -webkit-font-smoothing: antialiased;
        background:url('assets/bg.jpg');
        background-size:100% 100%;
        background-repeat:no-repeat;
        repeat: no-repeat;
        background-attachment:fixed;
        filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/bg.jpg', sizingMethod='scale');
        -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/bg.jpg', sizingMethod='scale');
    }

    #app {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;

    }

</style>