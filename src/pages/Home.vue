<style>
    .layout {
        height: 100%;
        background: white;
    }
    .layout-logo-left{
        width: 90%;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        text-align: center;
    }
    .layout-hide-text {
        display: none;
    }
    .layout-title {
        color: white;
        size: 15px;
    }
    .layout-logo {
        width: 30px;
        height: 30px;
    }
    .layout-breadcrumb {
        margin: 20px;
    }
    .layout-content-main{
        padding: 20px;
    }
    hr.style-devide {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text' :spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu :mode="modeType" theme="light" width="auto" :active-name="this.$route.path" :open-names="openNames" @on-select="menuSelect">
                    <div class="layout-logo-left">
                        <img class="layout-logo" src="../assets/logo.png">
                    </div>
                    <template v-for="(item,index) in $router.options.routes">
                        <Submenu :name="item.name" v-if="!item.hidden">
                            <template slot="title">
                                <Icon :type="item.iconCls"></Icon>
                                <span style="margin: 9px">{{item.name}}</span>
                            </template>
                            <template v-for="(child,childIndex) in item.children" v-if="!child.hidden">
                                <Menu-item :name="child.path">{{child.name}}</Menu-item>
                            </template>
                        </Submenu>
                    </template>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                            <Breadcrumb-item>{{$route.name}}</Breadcrumb-item>
                        </Breadcrumb>
                </div>
                <hr class="style-devide">
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 5,
                modeType: 'vertical',
                logoIsDisplay: 'false',
                spanRight: 19,
                openNames: [this.$route.matched[0].name],
            }
        },
        methods: {
            menuSelect(name) {
                this.$router.push({path:name});
            }
        },
        computed: {
            logoSize(){
                if (this.spanLeft !== 5){
                     this.logoIsDisplay = true;
                     return 30;
                }else{
                    this.logoIsDisplay = false;
                    return 0;
                }
            },
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            },
        }
    }
</script>