
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Table from './pages/nav_table/Table.vue'
import Main from './pages/nav_table/Main.vue'
import Form from './pages/nav_table/Form.vue'
import AskLeave from './pages/nav_echart/AskLeave.vue'
import Position from './pages/nav_echart/Position.vue'
import Title from './pages/nav_echart/Title.vue'
import Welfare from './pages/nav_echart/Welfare.vue'
import Recycle from './pages/nav_table/Recycle.vue'

let routers = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '财务报表',
        iconCls: 'ios-home',
        children: [
            { path: '/main', component: Main, name: '最新数据' },
            { path: '/table', component: Table, name: '报销' },
            { path: '/form', component: Form, name: '加急快报' },
            { path: '/recycle', component: Recycle, name: '垃圾箱' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '人事管理',
        iconCls: 'ios-home',
        leaf: true,
        children: [
            { path: '/ask', component: AskLeave, name: '请假'},
            { path: '/position', component: Position, name: '入/离职' },
            { path: '/welfare', component: Welfare, name: '工资福利' },
            { path: '/title', component: Title, name: '职称' },
        ]
    },
];
export default routers;