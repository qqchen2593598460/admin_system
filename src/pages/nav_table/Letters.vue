<style>
    p {
        margin: 10px;
    }
    a {
        margin: 10px;
    }
    span {
        margin-left: 10px;
    }
    ol {
        margin: 0;
        padding: 20px;
    }
</style>
<template>
    <div>
        <div>
            <ol>
                <li v-for="news in newsResult">
                    <Card style="margin: 20px;">
                            <p style="font-weight: bold;" slot="title">{{news.desc}}</p>
                            <p style="font-style:italic">作者：{{news.who}}</p>
                            <span>详情请移步：</span><a :href="news.url" target="value">{{news.url}}</a>
                    </Card>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news:{
                    desc:'',
                    who:'',
                    url:'',
                },
                data: '',
                newsResult:[],
                apiUrl: 'http://gank.io/api/data/Android/10/1',
            }
        },
        mounted() {
            this.$Loading.start();
            this.$http.get(this.apiUrl).then(response => {
                this.$Loading.finish();
                this.newsResult = response.body.results;
            }, response => {
                // error callback
                this.$Loading.error();
                this.$Message.error('请求失败');
            });
        },
        methods: {
        }
    }
</script>