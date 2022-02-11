<template >
    <div>
        <p>现在是 {{ now }}</p>
        <p v-if="goOffWorkMinute > 0">
            麻溜干活！ 离下班还有：
            <span
                v-if="Math.floor(goOffWorkMinute / 60) > 0"
            >{{ Math.floor(goOffWorkMinute / 60) }}小时</span>
            <span v-if="goOffWorkMinute > 0">{{ goOffWorkMinute % 60 }}分钟。</span>
        </p>
        <p v-if="goOffWorkMinute <= 0">已经下班啦！！！</p>

        <p>
            今天周末了吗？
            <span v-if="weekendInterval == 0 || weekendInterval == 6">周末啦！！！</span>
            <span v-if="weekendInterval != 0 && weekendInterval != 6">没有。今天{{dayOfWeek}}，还有{{ weekendInterval }}天。</span>
        </p>

        <p v-if="qingMingInterval != 0">距离清明节还有：{{ qingMingInterval }}天。</p>
        <p v-if="laborDayInterval != 0">距离劳动节还有：{{ laborDayInterval }}天。</p>
        <p v-if="dragonBoatFestivalInterval != 0">具体端午节还有：{{ dragonBoatFestivalInterval }}天。</p>
        <p v-if="midAutumnFestivalInterval != 0">距离中秋节还有：{{ midAutumnFestivalInterval }}天。</p>
        <p v-if="nationalDayInterval != 0">距离国庆节还有：{{ nationalDayInterval }}天。</p>
        <!-- <p>{{ goOffWorkMinute/60 }}</p> -->
    </div>
</template>
<script>
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

export default {

    data() {
        return {
            now: dayjs().format('YYYY-MM-DD HH:mm'),
            dayOfWeek: dayjs().format('ddd'),
            weekendInterval: 6 - dayjs().day(),
            qingMingInterval: dayjs('2022-4-3').diff(dayjs(), 'day'),
            laborDayInterval: dayjs('2022-5-1').diff(dayjs(), 'day'),
            dragonBoatFestivalInterval: dayjs('2022-6-3').diff(dayjs(), 'day'),
            midAutumnFestivalInterval: dayjs('2022-9-10').diff(dayjs(), 'day'),
            nationalDayInterval: dayjs('2022-10-1').diff(dayjs(), 'day'),
            goOffWorkMinute: dayjs().hour(18).minute(0).second(0).diff(dayjs(), 'minute'),
        }
    },
    mounted() {
        setInterval(() => {
            this.goOffWorkMinute = dayjs().hour(18).minute(0).second(0).diff(dayjs(), 'minute');
            this.now = dayjs().format('YYYY-MM-DD HH:mm');
        }, 1000);
    },
}

</script>
<style lang="css">
</style>