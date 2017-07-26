<style scoped>
    .table_page {
        margin-top: 20px;
        float: right;
        margin-right: 20px;
        margin-bottom: 20px;
    }
</style>
<template>
    <div>
        <div>
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
                tableData: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
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
            }
        }
    }
</script>