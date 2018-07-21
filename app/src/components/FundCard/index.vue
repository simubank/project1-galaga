<template>
  <el-card class = "fundCard" v-if="dataReady">
    <el-container>
      <el-header>
        <el-row class="green-border" :gutter="20">
          <el-col :span="16">
            <div class="header-title-wrap code-wrap">{{fund.attribution.symbol}}</div>
            <div class="header-title-wrap title-wrap">{{fund.attribution.description}}</div>
          </el-col>
          <el-col :span="8">
            <div class="header-side-wrap nav-wrap">
              <el-tooltip content="Net asset value (NAV) is value per share of a mutual fund" placement="top">
                <el-button>NAV: {{fund.attribution.nav}}</el-button>
              </el-tooltip>
            </div>
            <div class="header-side-wrap mer-wrap">
              <div class="header-side-wrap mer-wrap">{{fund.attribution.date}}</div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!-- Include Info Bar and Return Table -->
      <el-main style="padding-top:0px">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>Category:</b> {{fund.attribution.category}}</div>
            </div>
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>Min Invest:</b> {{fund.attribution.minInvest}}</div>
              <!--<div class="fund-info"><b>Risk:</b> {{fund.risk}}</div> -->
            </div>
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>MER: </b>{{fund.attribution.mer}}</div>
            </div>
            <!-- Return Table -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column v-for="(header,index) of tableHeader" :prop="header.prop" :label="header.label" :key="index">
              </el-table-column>
            </el-table>
          </el-col>
          <!-- User Invest Input -->
          <el-col :span="6">
            <div class="block">
              <span class="demonstration">Drag to invest your saving (%)</span>
              <el-slider v-model="input"></el-slider>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-card>
  <el-card class="fundCard" v-else>
    <loader></loader>
  </el-card>
</template>

<script>
import axios from 'axios'
import loader from '@/components/Loader'
export default {
  name: 'FundCard',
  props: ['fundId'],
  components: { loader },
  data() {
    return {
      /*
      input: 0,
      fund: {
        mer: '0.2%',
        nav: '30',
        code: 'TDB903',
        title: 'TD NASDAQ Index - e',
        category: 'sector',
        minInvest: '100',
        style: 'large blend',
        risk: 'high',
        change: '-0.09 (-0.40%)'
      },
      tableHeader: [
        { prop: 'Mo1', label: '1 Mo' },
        { prop: 'Mo3', label: '3 Mo' },
        { prop: 'Mo6', label: '6 Mo' },
        { prop: 'Yr1', label: '1 Yr' },
        { prop: 'Yr2', label: '2 Yr' },
        { prop: 'Yr3', label: '3 Yr' },
        { prop: 'Yr5', label: '5 Yr' },
        { prop: 'Yr10', label: '10 Yr' }
      ],
      tableData: [{
        Mo1: '1%',
        Mo3: '3%',
        Mo6: '4%',
        Yr1: '5%',
        Yr2: '6%',
        Yr3: '7%',
        Yr5: '8%',
        Yr10: '9%'
      }]
      */
      tableHeader: [
        { prop: 'Mo1', label: '1 Mo' },
        { prop: 'Mo3', label: '3 Mo' },
        { prop: 'Mo6', label: '6 Mo' },
        { prop: 'YR1', label: '1 Yr' },
        { prop: 'YR2', label: '2 Yr' },
        { prop: 'YR3', label: '3 Yr' },
        { prop: 'YR5', label: '5 Yr' },
        { prop: 'Inception', label: 'Inception' },
        { prop: 'InceptionDate', label: 'InceptionDate' }
      ],
      tableData: [],
      /*
      tableData: [{
        Mo1: this.fund.performanceList.Mo1,
        Mo3: this.fund.performanceList.Mo3,
        Mo6: this.fund.performanceList.Mo6,
        Yr1: this.fund.performanceList.Yr1,
        Yr2: this.fund.performanceList.Yr2,
        Yr3: this.fund.performanceList.Yr3,
        Yr5: this.fund.performanceList.Yr5,
        Yr10: this.fund.performanceList.Yr10,
        Inception: this.fund.performanceList.Inception,
        InceptionDate: this.fund.performanceList.InceptionDate
      }],
      */
      fund: null,
      dataReady: false
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // GET /someUrl
      axios.get('http://localhost:3000/fundInfo/' + this.fundId).then(response => {
        this.fund = response.data
        this.tableData.push(response.data.performanceList)
        console.log(response.data)
        this.dataReady = true
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.fundCard {
  font-style: normal;
  font-weight: 400;
}
.header-side-wrap {
  margin: 5px auto;
  text-align: center;
  color: green;
}
.header-title-wrap {
  color: green;
  margin: 5px auto;
  font-weight: bold;
}
.nav-wrap, .code-wrap{
  font-weight: bold;
  font-size: large;
}
.mer-wrap, .title-wrap {
  font-size: small;
}
.green-border {
  border-bottom: 1px solid green;
}
.fund-info-wrapper {
  margin: 0px 25px 0px 0px;
  display: inline-block;
  float: left;
}
.fund-info {
  margin: 5px 0px;
}
.mer-wrap button, .nav-wrap button{
  border: 0px;
  background-color: white;
  color: green;
  padding: 0px;
}
.nav-wrap button {
  font-weight: bold;
  font-size: large;
}
.nav-wrap button:hover, .mer-wrap button:hover {
  background-color: white;
  color: green;
}
</style>
