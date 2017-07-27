<style scoped>
    .content {
        height: 800px;
    }
    #eChart_content {
        height: 100%;
        float: right;
        width: 65%;
        padding: 20px;
    }
    .timeLine_content {
        height: 100%;
        width: 35%;
    }
    .timeLine_title {
        font: 15px bold;
        padding: 0 0 10px 10px;
    }
    .timeLine_content {
        font-size: 10px;
    }
</style>
<template>
    <div class="content">
        <div id="eChart_content">
        </div>
        <div class="timeLine_content">
          <Card style="margin-top: 30px">
              <p slot="title">报销流程：</p>
              <Timeline>
                  <Timeline-item>
                      <p class="timeLine_title">发起流程</p>
                      <p class="timeLine_content">费用报销者自行将报销附件粘贴于“费用报销单”后，并按“费用报销单”上内容填写完整并在报销人处签字</p>
                  </Timeline-item>
                  <Timeline-item>
                      <p class="timeLine_title">部门负责人审核</p>
                      <p class="timeLine_content">报销单送本部门负责人复核并签字；</p>
                  </Timeline-item>
                  <Timeline-item>
                      <p class="timeLine_title">财务部审核</p>
                      <p class="timeLine_content">报销人送报销单至财务部，由会计审核；</p>
                  </Timeline-item>
                  <Timeline-item>
                      <p class="timeLine_title">总经理审批</p>
                      <p class="timeLine_content">经审核无误的“费用报销单”送呈总经理审批；</p>
                  </Timeline-item>
                  <Timeline-item>
                      <p class="timeLine_title">结清并关闭流程</p>
                      <p class="timeLine_content">出纳根据总经理审批后的报销单支付款项或结清借款。</p>
                  </Timeline-item>
              </Timeline>
          </Card>
        </div>
    </div>
</template>
<script>
    import eCharts from 'echarts'
    export default {
        data() {
            return {
                chartPie : null,
            }
        },
        mounted() {
            let _this = this;
            this.chartPie = eCharts.init(document.getElementById('eChart_content'));
            this.chartPie.setOption({title : {
                text: '各部门报销占比表',
                subtext: '完全统计',
                x:'center'
            },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['人事','技术','后勤','市场','运维']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '45%',
                        center: ['50%', '35%'],
                        data:[
                            {value:335, name:'人事'},
                            {value:310, name:'技术'},
                            {value:234, name:'后勤'},
                            {value:135, name:'市场'},
                            {value:1548, name:'运维'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }
    }
</script>
