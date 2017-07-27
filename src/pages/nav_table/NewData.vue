<style scoped>
    .table_page {
        margin-top: 20px;
        float: right;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .carousel-item-style {
        height: 470px;
        width: inherit;
        background: #ccc;
    }
    .carousel-img {
        width: 100%;
        height: 100%;
    }
    .carousel-style {
        width: 65%;
        float: right;
    }
</style>
<template>
    <div>
        <div>
            <div>
                <Carousel autoplay class='carousel-style'>
                    <Carousel-item>
                        <div class='carousel-item-style'>
                           <img class='carousel-img' src="../../assets/main_1.jpg"/>
                        </div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class='carousel-item-style'>
                            <img class='carousel-img' src="../../assets/main_2.jpg"/>
                        </div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class='carousel-item-style'>
                            <img class='carousel-img' src="../../assets/main_3.jpg"/>
                        </div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class='carousel-item-style'>
                            <img class='carousel-img' src="../../assets/main_4.jpg"/>
                        </div>
                    </Carousel-item>
                </Carousel>
            </div>
            <div style="height: 470px;">
                <Card style="width:400px">
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        最受员工欢迎电影龙虎榜
                    </p>
                    <a href="#" slot="extra" @click.prevent="changeLimit">
                        <Icon type="ios-loop-strong"></Icon>
                        换一换
                    </a>
                    <ul>
                        <li v-for="item in randomMovieList" style="margin-top: 20px">
                            <a :href="item.url" target="_blank">{{ item.name }}</a>
                            <span>
                    <Icon style="color: #FFAC2D" type="ios-star" v-for="n in 4" :key="n"></Icon>
                    <Icon style="color: #FFAC2D" type="ios-star" v-if="item.rate >= 9.5"></Icon>
                    <Icon style="color: #FFAC2D" type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
        <div style="margin-top: 20px">
            <p>参与调研员工信息：</p>
        </div>
        <div style="margin-top: 10px;">
            <Table border :columns="columnsData" :data="tableData"></Table>
        </div>
        <div class="table_page">
            <Page :total="100" show-elevator></Page>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columnsData: [
                    {
                        title: '姓名',
                        key: 'name',
                        render:(h,params) => {
                            return h('div',[
                                h('Icon',{
                                    props: {
                                        type: 'android-person',
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }
                                }),
                                h('strong',params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title:'操作',
                        key:'action',
                        width:150,
                        align:'center',
                        render:(h,params) => {
                            return h('div' , [
                                h('Button' , {
                                    props: {
                                        type:'info',
                                        size:'small',
                                        shape:"circle"
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                             this.show(params.index);
                                        }
                                    }
                                },'查看'),
                                h('Button' , {
                                    props: {
                                        type:'error',
                                        size:'small',
                                        shape:"circle"
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                },'删除')
                            ]);
                        }

                    }
                ],
                movieList: [
                    {
                        name: '肖申克的救赎',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: '这个杀手不太冷',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: '霸王别姬',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: '阿甘正传',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: '美丽人生',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: '千与千寻',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: '辛德勒的名单',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: '海上钢琴师',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: '机器人总动员',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: '盗梦空间',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: [],
                tableData: [
                    {
                        name: '至尊宝',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '紫霞仙子',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李白',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '高渐离',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        methods: {
            show(index) {
                this.$Modal.info({
                    title:'员工信息',
                    content: `姓名：${this.tableData[index].name}<br>年龄：${this.tableData[index].age}<br>地址：${this.tableData[index].address}`
                });
            },
            remove(index) {
                this.$Modal.confirm({
                    title: '确定要删除该员工信息吗?',
                    content: '数据无价，谨慎操作',
                    onOk: () => {
                        this.tableData.splice(index,1);
                    },
                    onCancel: () => {
                    }
                });
            },
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>