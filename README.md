# 更新记录
## 1.0.0 （2020-10-29）
发布beauty-calendar
# beauty-calendar
uniapp 日历插件，可多选，单选
## 特性
- 兼容H5，APP-NVUE，微信小程序，其他端未测试
- 日历可多选，可单选
- 可选择日期范围
## 使用说明
### html 示例
``` html
<beauty-calendar ref="calendar" 
    :auto-choose="autoChoose" 
    :multi="multi" 
    :start-date="startDate" 
    :end-date="endDate" 
    :range="rang" 
    :auto-clear="autoClear" 
    @change="change">
</beauty-calendar>
```
### javascript 示例
``` javascript
import beautyCalendar from '@/components/beauty-calendar/beauty-calendar.vue'
export default {
  components:{
    beautyCalendar,
  },
  data() {
    return {
      title: 'beauty-calendar',
      multi: true,
      autoChoose: false,
      startDate: "2020/11/02",
      endDate: "2020/11/03",
      rang: 13,
      autoClear:false
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
### 属性说明
| 参数 |  类型  | 默认值 | 说明 |
|------|--------|-------|------|
|multi| Boolean | true | 是否开启多选模式，默认开启|
|autoChoose|Boolean|false| 是否自动选择指定日期|
|autoClear|Boolean|true| 点击保存是否自动清除选择|
|range|Number|13|日历范围，自本月之后的月份数，默认至下年本月|
|starDate| String | 今天 | 格式为YYYY/MM/DD, 单选为选中日期，多选为选中开始日期，默认选择为今天，需要autoChoose = true|
|endDate| String | 明天 | 格式为YYYY/MM/DD,单选无效，多选为选中结束日期，默认选择为明天，需要autoChoose = true |
### 事件说明
|名称|说明|
|----|----|
|change| 返回当前日历选中的日期数组，例如['2020-10-29',]|

