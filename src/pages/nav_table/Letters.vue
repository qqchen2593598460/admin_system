<template>
    <div>
        <Button @click="newsData" type="info">获取数据</Button>
        <p>{{data}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: '',
                apiUrl: 'http://211.149.193.19:8080/api/customers',
            }
        },
        methods: {
            newsData() {// GET /someUrl
                this.$http.get(this.apiUrl).then(response => {
                    // get body data
                }, response => {
                    // error callback
                });
            }
        }
    }
</script>