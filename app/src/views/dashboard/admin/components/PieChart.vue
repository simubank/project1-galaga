<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
import { mapGetters } from 'vuex'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      list: [],
      category: []
    }
  },
  mounted() {
    this.initChart()
    this.updateChart()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  computed: {
    ...mapGetters([
      'netSaving',
      'listLoading',
      'netSpending',
      'netIncome',
      'netSpendingList'
    ])
  },
  watch: {
    netSaving: function(val) {
      this.updateChart()
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
    },
    setChart() {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: this.category
        },
        calculable: true,
        series: [{
          name: 'spending distribution',
          type: 'pie',
          roseType: 'radius',
          radius: [15, 95],
          center: ['50%', '38%'],
          data: this.list,
          animationEasing: 'cubicInOut',
          animationDuration: 2600
        }]
      })
    },
    updateChart() {
      if (!this.listLoading) {
        this.list = this.netSpendingList.map(function(item) {
          return {
            value: item.amount,
            name: item.category
          }
        })
        this.category = this.netSpendingList.map(function(item) {
          return item.category
        })
        this.list.push({
          value: this.netSaving,
          name: 'Saving'
        })
        this.category.push('Saving')
        this.setChart()
      }
    }

  }
}
</script>
