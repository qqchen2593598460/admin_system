<template>
    <i-form ref="formLogin" :model="formLogin" :rules="formLoginRules"  class="card-box">
        <Form-item class="formLogin-title">
        <h3>用户登录</h3>
        </Form-item>
        <Form-item prop="user">
            <i-input label-width="60px" type="text" v-model="formLogin.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </Form-item>
        <Form-item prop="password">
            <i-input label-width="60px" type="password" v-model="formLogin.password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </i-input>
        </Form-item>
        <Form-item class="login-no-bottom">
            <Checkbox-group v-model="formLogin.remember">
                <Checkbox label="记住密码" name="remember" ></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item class="login-no-bottom">
            <Row>
                <i-col :xs="{span:4,offset:6}">
                    <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
                </i-col>
                <i-col :xs="{span:4,offset:6}">
                    <Button type="primary" @click="formLoginReset('formLogin')">重置</Button>
                </i-col>
            </Row>
        </Form-item>
    </i-form>
</template>
<!--登录接口http://101.200.233.12:8078/user/login.do?userName=moocyq&passWord=000000&platformId=5-->
<script>
    export default {
        data () {
            return {
                formLogin: {
                    user: '',
                    password: '',
                    remember: [],
                    loginUrl: 'http://101.200.233.12:8078/user/login.do?'
                },
                formLoginRules: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            handleSubmit(name) {
                 this.$refs[name].validate((valid) => {
                         sessionStorage.setItem('user', JSON.stringify(this.formLogin.user));
                         if (valid) {
                             this.$http.get(this.formLogin.loginUrl + 'userName='
                                 + this.formLogin.user
                                 + '&passWord='+this.formLogin.password
                                 + '&platformId=5').then(response => {
                                 if(response.body.status === '200'){
                                     //登录成功
                                     this.$Message.success('登录成功');
                                     this.$router.push({path: '/newData'})
                                 } else {
                                     this.$Message.error("登录失败");
                                 }
                             }, response => {
                                 //登录失败
                                 this.$Message.error("登录失败");
                             });
                         } else {
                             this.$Message.error('登录失败');
                         }
                         if (this.formLogin.remember[0] === '记住密码') {
                             sessionStorage.setItem('user', JSON.stringify(this.formLogin.user));
                             sessionStorage.setItem('password', JSON.stringify(this.formLogin.password));
                         } else {
                             sessionStorage.removeItem('user');
                             sessionStorage.removeItem('password')
                         }
                 });
            },
            formLoginReset(name) {
                 this.$refs[name].resetFields();
            },
        }
    }
</script>
<style scoped>
    .card-box {
        width: 400px;
        background-color: white;
        padding: 20px;
        background-clip: padding-box;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        margin: 180px auto;
    }
    .formLogin-title {
             text-align: center;
             font-size: 28px;
         }
    .formLogin-title h3{
        font-size: 18px;
    }
    .login-no-bottom {
        margin-bottom: 10px;
    }
</style>