# beauty-calendar
uniapp 日历插件，可多选，单选
## 特性
- 兼容H5，APP-NVUE，微信小程序，支付宝小程序，字节跳动，qq小程序，未测试360，快应用（没时间研究这个配置了，令人头大），暂不兼容百度（是百度老了吗?同样的循环，就百度渲染不出来）
- 日历可多选，可单选
- 可选择日期范围
- 适用酒店预定、飞机票火车票预定
## 使用说明
### html 示例
``` html
<beauty-calendar ref="calendar" 
    :auto-choose="autoChoose" 
    :multi="multi" 
    :start-date="startDate" 
    :end-date="endDate" 
    :range="rang" 
	  :minDate="minDate"
	  :cur-show="curShow"
    :auto-clear="autoClear" 
    @change="change">
</beauty-calendar>
```
### javascript 示例
``` javascript
import beautyCalendar from '@/components/beauty-calendar'
export default {
  components:{
    beautyCalendar,
  },
  data() {
    return {
      title: 'beauty-calendar',
      multi: true,
      autoChoose: true,
      startDate: "2021-12-13",
      endDate: "2021-12-14",
      rang: 13,
      curShow: 0,
      autoClear:false,
      minDate: "2021-12-12"
    }
  },
  onLoad() {

  },
  methods: {
    show(){
      this.$refs.calendar.open()
    },
    change(e){
      console.log(e)
    }
  }
}
```
## 文档说明
### 依赖说明
-需要安装 `sass` 插件
### 属性说明
| 参数 |  类型  | 默认值 | 说明 |
|------|--------|-------|------|
|multi| Boolean | true | 是否开启多选模式，默认开启|
|autoChoose|Boolean|false| 是否自动选择指定日期|
|autoClear|Boolean|true| 点击保存是否自动清除选择|
|minDate| String | 可选起始日期 | 格式为YYYY-MM-DD今天明天|
|range|Number|13|日历范围，自本月之后的月份数，默认至下年本月|
|curShow|Number|0|配合minDate，range使用，展示从minDate为索引0计算的第n月|
|starDate| String | 今天 | 格式为YYYY-MM-DD, 单选为选中日期，多选为选中开始日期，默认选择为今天，需要autoChoose = true|
|endDate| String | 明天 | 格式为YYYY-MM-DD(需要与startDate保持格式一致),单选无效，多选为选中结束日期，默认选择为明天，需要autoChoose = true |
### 事件说明
|名称|说明|
|----|----|
|change| 返回当前日历选中的日期数组，例如['2020-10-29',]|
